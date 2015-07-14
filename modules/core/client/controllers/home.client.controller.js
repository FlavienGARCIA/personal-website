'use strict';

angular.module('core').controller('HomeController', ['$scope', '$translate',
	function($scope, $translate) {
		// This provides Authentication context.
		$scope.tab = 1;

		$scope.changeLanguage = function(key) {
			$translate.use(key);
		};

		$scope.isCurrentLang = function (lang) {
            return $translate.use() === lang;
        };
	}
]);