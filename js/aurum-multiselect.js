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
          label: '@',
          search: '@',
          placeholder: '@',
          dynamicTitle: '@',
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
              template += '<div class="menu-item" data-ng-class="{\'selected\': isChecked(getPropertyForObject(option)), \'not-selected\': !isChecked(getPropertyForObject(option))}">';
              
              // Label
              template += '<div class="menu-item-label" role="menuitem" tabindex="-1" ng-click="setSelectedItem(getPropertyForObject(option))" title="{{getPropertyForObject(option, settings.displayProp)}}" >{{getPropertyForObject(option, settings.displayProp)}}</div>';

              template += '</li>';
              template += '</ul>';
              template += '</div>';
          
          return template;
        },


        link: function (scope, element, attributes) {

          if ( attributes.dynamicTitle === 'true' ) {
            scope.dynamicTitle = true;
          } else {
            scope.dynamicTitle = false;
          }

          scope.externalEvents = {
            onItemSelect: angular.noop,
            onInitDone: angular.noop
          };

          scope.settings = {
            displayProp: attributes.label,
            buttonClasses: 'btn btn-default',
            dynamicTitle: scope.dynamicTitle,
            smartButtonTextConverter: angular.noop
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
            if (scope.settings.dynamicTitle && angular.isObject(scope.selectedModel) && (scope.selectedModel.length > 0 || _.keys(scope.selectedModel).length > 0)) {
              var itemsText = [];

              angular.forEach(scope.options, function (optionItem) {
                if (scope.isChecked(scope.getPropertyForObject(optionItem))) {
                  var displayText = scope.getPropertyForObject(optionItem, scope.settings.displayProp);
                  var converterResponse = scope.settings.smartButtonTextConverter(displayText, optionItem);

                  itemsText.push(converterResponse ? converterResponse : displayText);
                }
              });

              if (scope.selectedModel.length > scope.settings.smartButtonMaxItems) {
                itemsText = itemsText.slice(0, scope.settings.smartButtonMaxItems);
                itemsText.push('...');
              }

              return itemsText.join(', ');
            } else {
              return scope.texts.buttonDefaultText;
            }
          };

          scope.getPropertyForObject = function (object, property) {
            if ( property ) {
              if (angular.isDefined(object) && object.hasOwnProperty(property)) {
                return object[property];
              }
              return '';
            } else {
              if (angular.isDefined(object)) {
                return object;
              }
              return '';
            }
          };

          scope.setSelectedItem = function (object) {
            scope.selectedModel.push(object);
            scope.externalEvents.onItemSelect(object);
          };

          scope.isChecked = function (id) {
            return _.findIndex(scope.selectedModel, id) !== -1;
          };

          scope.externalEvents.onInitDone();
        }
      };
  }]);
})();
