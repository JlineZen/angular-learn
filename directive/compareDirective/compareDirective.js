(function() {
	'use strict';
	angular.module('app.compare', [])
		.controller('compareCtrl', compareCtrl)
		.directive('compareAs', compareAs);

	compareCtrl.$inject = ['$scope'];

	function compareCtrl($scope) {
		var vm = this;
		return vm;
	}

	function compareAs() {
		
	}
	
}());