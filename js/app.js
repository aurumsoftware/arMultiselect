(function () {

	'use strict';
	var dependencies = ['ar-dropdown-multiselect'];
	angular.module('arDropdownMultiselectDemo', dependencies)

		/* @ngInject */
		.controller('arDropdownMultiselectDemoCtrl', function ($scope) {
			$scope.examplemodel = [] ;
			$scope.examplesinglemodel = {} ;
			$scope.$watch('examplemodel', function () { $scope.asd = $scope.examplemodel.id; },true);
			$scope.exampledata = [
				{id: 1, label: 'Allan'},
				{id: 2, label: 'André'},
				{id: 3, label: 'Felipe'},
				{id: 4, label: 'Gustavo'},
				{id: 5, label: 'Idmar Ramos Junior'},
				{id: 6, label: 'Marcela'}];

			$scope.examplesettings = {
				showCheckAll: false,
				showUncheckAll: false,
				dynamicTitle: false,
				smartButtonMaxItems: 3,
				enableNewItem: false,
				selectionLimit: 2,
				enableEdit: false,
			};

			$scope.exampleCloseOnSelect = {
				showCheckAll: false,
				showUncheckAll: false,
				dynamicTitle: true,
				smartButtonMaxItems: 3,
				enableNewItem: false,
				selectionLimit: 1,
				enableEdit: false,
				closeOnSelect: true
			};

			$scope.exampleevents = {
				onNewItemAdd: function (newItem) {
					var id = $scope.exampledata.length + 1;
					$scope.exampledata.push({id:id, label:newItem});
					console.log(newItem);
				},
				// onItemEdit: function (id, label) {
				// 	// debugger;
				// },
				// onItemRemove: function (id) {
				// 	// debugger;
				// }
			};
		});
})();