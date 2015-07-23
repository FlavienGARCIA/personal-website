'use strict';

angular.module('core').controller('HomeController', ['$scope', '$translate',
	function($scope, $translate) {

		$scope.tab = 1;

		$scope.isCurrentLang = function(lang) {
            return $translate.use() === lang;
        };

		$scope.changeLanguage = function(key) {
			if(!$scope.isCurrentLang(key)) {
				$translate.use(key);

				$('html, body').animate({
					scrollTop: 0
				}, 250);

				$(window).trigger('resize');
			}
		};
	}
]);