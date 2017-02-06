(function () {

	'use strict';
	var dependencies = ['aurum-multiselect'];
	angular.module('aurumMultiselectDemo', dependencies)

		.controller('aurumMultiselectDemoCtrl', ['$scope', function ($scope) {
			$scope.examplemodel = [];
			$scope.$watch('examplemodel', function () { $scope.asd = $scope.examplemodel.id; },true);
			$scope.exampledata = [
				{id: 1, label: 'Allan'},
				{id: 2, label: 'André'},
				{id: 3, label: 'Felipe'},
				{id: 4, label: 'Gustavo'},
				{id: 5, label: 'Idmar Ramos Junior'},
				{id: 6, label: 'Marcela'}];
		}]);
})();