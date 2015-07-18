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

        $scope.setActiveTab = function(tab) {
        	$scope.tab = tab;

    //     	setTimeout(function() {
				// $('html, body').animate({
				// 	scrollTop: $('.title_' + tab).offset().top + 1
				// }, 250);
    //     	}, 100);
        };

        $scope.toggleBodyClass = function() {
        	if($('body').hasClass('light')) {
        		$('body').removeClass('light');
        	} else {
        		$('body').addClass('light');
        	}
        };
	}
]);