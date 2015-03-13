(function () {

	'use strict';
	var dependencies = ['ac-dropdown-multiselect'];
	angular.module('acDropdownMultiselectDemo', dependencies)

		/* @ngInject */
		.controller('acDropdownMultiselectDemoCtrl', function ($scope) {
			$scope.examplemodel = [];
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
				selectionLimit: 5,
				enableEdit: false
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