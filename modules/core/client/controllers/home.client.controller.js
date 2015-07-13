'use strict';

angular.module('core').controller('HomeController', ['$scope',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.tab = 1;
	}
]);