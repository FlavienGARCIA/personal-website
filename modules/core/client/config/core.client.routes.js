'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$translateProvider',
	function($stateProvider, $urlRouterProvider, $translateProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});

		var translationsFR = {
			SIDEBAR: {
				TITLE: 'Développeur front-end',
				FIRST_PARAGRAPH: 'Développeur web spécialisé dans le front-end, j\'utilise HTML 5, CSS 3 et JavaScript pour concevoir des expériences intuitives et dynamiques où l\'expérience utilisateur est toujours une priorité.',
				SECOND_PARAGRAPH: 'L\'approfondissement continue des mes connaissances et l\'utilisation des dernières et meilleures technologies du web est pour moi un élément essentiel du développement web, et dont je m\'engage à améliorer chaque jour.',
				PHONE_BTN: 'Téléphone',
			},
			BIO: {
				TITLE: 'Mes outils',
				PARAGRAPH: 'Bien que le front-end soit mon domaine de prédilection, j\'ai également acquis au fil du temps une large panoplie de compétences, allant du développement back-end à l\'infographie en passant par la création 3D.',
				SUBTITLE_1: 'Utilisation avancée',
				SUBTITLE_2: 'A l\'aise et autonome',
				SUBTITLE_3: 'Notions avancées',
				PHOTO_SKILL: 'Photographie avec DSLR Canon',
				ENGLISH_SKILL: 'Anglais (lu, écrit et compréhension orale)'
			}
		};

		var translationsEN = {
			SIDEBAR: {
				TITLE: 'Front-end developper',
				FIRST_PARAGRAPH: 'Web developer specializing in front-end, I use HTML 5, CSS 3 and JavaScript to design intuitive and dynamic experiences, where user experience is always a priority.',
				SECOND_PARAGRAPH: 'The constant deepening of my knowledge and using the latest and greatest web technologies is for me an essential part of web development, and I am commited to improve them every day.',
				PHONE_BTN: 'Phone',
			},
			BIO: {
				TITLE: 'My tools',
				PARAGRAPH: 'Although the front-end is my field of choice, I also acquired over time a wide range of skills, from back-end development to computer graphics through 3D creation.',
				SUBTITLE_1: 'Advanced usage',
				SUBTITLE_2: 'Comfortable and autonomous',
				SUBTITLE_3: 'Advanced notions',
				PHOTO_SKILL: 'Canon DSLR photography',
				ENGLISH_SKILL: 'English (read, written et oral comprehension)'
			}
		};

		$translateProvider.translations('fr', translationsFR);
		$translateProvider.translations('en', translationsEN);
		$translateProvider.preferredLanguage('fr');
		$translateProvider.useSanitizeValueStrategy('escaped');
	}
]);