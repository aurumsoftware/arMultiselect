(function() {

  'use strict';

  angular.module('aurum-multiselect', [])

    .directive('aurumMultiselect', ['$filter', '$document', '$timeout', function ($filter, $document, $timeout) {

      return {
        restrict: 'AE',

        scope: {
          selectedModel: '=',
          options: '=',
          events: '=',
          search: '@',
          placeholder: '@',
          ngDisabled: '='
        },

        template: function (element, attributes) {
          var template =  '<div class="multiselect-parent btn-group dropdown-multiselect" ng-class="{ active: open }">';
              template += '<button type="button" ng-disabled="ngDisabled" class="dropdown-toggle arButton" ng-class="settings.buttonClasses" ng-click="toggleDropdown()"><span class="arButtonLabel">{{getButtonText()}}&nbsp;</span><i class="caret"></i></button>';
              template += '<ul class="dropdown-menu dropdown-menu-form" ng-style="{display: open ? \'block\' : \'none\' }" style="overflow: scroll" >';

              // Search
              template += '<li ng-show="enableSearch"><div class="dropdown-header"><input type="text" class="form-control" style="width: 100%;" ng-model="searchFilter" placeholder="{{texts.searchPlaceholder}}" /></li>';

              template += '<li class="presentation" role="presentation" ng-repeat="option in options | filter: searchFilter">';

              // Menu row
              template += '<div class="menu-item" data-ng-class="{\'selected\': isChecked(getPropertyForObject(option,settings.idProp)), \'not-selected\': !isChecked(getPropertyForObject(option,settings.idProp))}">';
              
              // Label
              template += '<div class="menu-item-label" role="menuitem" tabindex="-1" ng-click="setSelectedItem(getPropertyForObject(option,settings.idProp))" title="{{getPropertyForObject(option, settings.displayProp)}}" >{{getPropertyForObject(option, settings.displayProp)}}</div>';

              template += '</li>';
              template += '</ul>';
              template += '</div>';
          
          return template;
        },


        link: function (scope, element, attributes) {

          scope.externalEvents = {
            onItemSelect: angular.noop,
            onInitDone: angular.noop
          };

          scope.settings = {
            displayProp: 'label',
            idProp: 'id',
            externalIdProp: 'id',
            buttonClasses: 'btn btn-default'
          };

          scope.texts = {
            searchPlaceholder: attributes.search,
            buttonDefaultText: attributes.placeholder || 'Select'
          };

          var dropdownTrigger = element.children()[0];
          
          scope.toggleDropdown = function () {
            scope.open = !scope.open;

            $timeout( function(){
              element[0].querySelector('.form-control').focus();
            }, 200 );
          };

          if ( attributes.search ) {
            scope.enableSearch = true;
          } else {
            scope.enableSearch = false;
          }

          angular.extend(scope.settings, scope.extraSettings || []);
          angular.extend(scope.externalEvents, scope.events || []);
          angular.extend(scope.texts, scope.translationTexts);

          function getFindObj(id) {
            var findObj = {};

            if (scope.settings.externalIdProp === '') {
              findObj[scope.settings.idProp] = id;
            } else {
              findObj[scope.settings.externalIdProp] = id;
            }

            return findObj;
          }

          var handleCloseOnBlur = function (e) {
            var target = e.target.parentElement;
            var parentFound = false;

            while (angular.isDefined(target) && target !== null && !parentFound) {
               if (_.contains(target.className.split(' '), 'multiselect-parent') && !parentFound) {
                if(target === dropdownTrigger) {
                  parentFound = true;
                }
              }
              target = target.parentElement;
            }

            if (!parentFound) {
              scope.$apply(function () {
                scope.open = false;
              });
            }
          };

          $document.on('click', handleCloseOnBlur);
          scope.$on('$destroy', function() {
            $document.off('click', handleCloseOnBlur);
          });

          scope.getButtonText = function () {
            return scope.texts.buttonDefaultText;
          };

          scope.getPropertyForObject = function (object, property) {
            if (angular.isDefined(object) && object.hasOwnProperty(property)) {
              return object[property];
            }

            return '';
          };

          scope.setSelectedItem = function (id, dontRemove) {
            var findObj = getFindObj(id);
            var finalObj = null;
            finalObj = findObj;

            dontRemove = dontRemove || false;

            var exists = _.findIndex(scope.selectedModel, findObj) !== -1;

            if (!dontRemove && exists) {
              scope.selectedModel.splice(_.findIndex(scope.selectedModel, findObj), 1);
            } else if (!exists) {
              scope.selectedModel.push(finalObj);
              scope.externalEvents.onItemSelect(finalObj);
            }
          };

          scope.isChecked = function (id) {
            return _.findIndex(scope.selectedModel, getFindObj(id)) !== -1;
          };

          scope.externalEvents.onInitDone();
        }
      };
  }]);
})();