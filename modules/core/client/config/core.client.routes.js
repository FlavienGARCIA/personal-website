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
				FIRST_PARAGRAPH: 'Avec HTML 5, CSS 3 et JavaScript,',
				SECOND_PARAGRAPH: 'je réalise des expériences responsives et dynamiques.',
				THIRD_PARAGRAPH: 'Passionné par le web et disponible immédiatement.',
				PHONE_BTN: 'Téléphone',
			},
			PROJECTS: {
				TITLE: 'Mes projets',
				TITLE_1: 'Universol',
				SUBTITLE_1: 'Site e-commerce Magento',
				TITLE_2: 'Gestionnaire de cibles',
				SUBTITLE_2: 'Application de gestion de cibles pour tireur sportif',
				TITLE_3: 'Construire une piscine naturelle',
				SUBTITLE_3: 'Site de présentation et de vente d\'un ebook'
			},
			BIO: {
				TITLE: 'Mes outils',
				PARAGRAPH: 'En plus du front-end qui est mon domaine de prédilection, j\'ai également acquis au fil du temps un grand nombre de compétences, allant du back-end à l\'infographie en passant par la création 3D.',
				SUBTITLE_1: 'Utilisation avancée',
				SUBTITLE_2: 'A l\'aise et autonome',
				SUBTITLE_3: 'Notions avancées',
				SUBTITLE_4: 'Autres',
				PHOTO_SKILL: 'Photographie avec DSLR Canon',
				ENGLISH_SKILL: 'Anglais (lu, écrit et compréhension orale)'
			},
			CONTACT: {
				TITLE: 'Contact'
			},
			VISIT_LINK: 'Accéder au site'
		};

		var translationsEN = {
			SIDEBAR: {
				TITLE: 'Front-end developper',
				FIRST_PARAGRAPH: 'Web developer specializing in front-end, I use HTML 5, CSS 3 and JavaScript to design intuitive and dynamic experiences, where the user experience is always a priority.',
				SECOND_PARAGRAPH: 'The constant deepening of my knowledge and using the latest web technologies is for me an essential part of web development, and I am commited to improve them every day.',
				PHONE_BTN: 'Phone',
			},
			PROJECTS: {
				TITLE: 'My projects',
				TITLE_1: 'Universol',
				SUBTITLE_1: 'Magento e-commerce website',
				TITLE_2: 'Targets manager',
				SUBTITLE_2: 'Management application for sport shooters',
				TITLE_3: '"Construire une piscine naturelle"',
				SUBTITLE_3: 'Presentation and sale of an ebook'
			},
			BIO: {
				TITLE: 'My tools',
				PARAGRAPH: 'In addition to the front-end which is my field of choice, I also acquired over time a large number of skills, from back-end to computer graphics through 3D creation.',
				SUBTITLE_1: 'Advanced usage',
				SUBTITLE_2: 'Comfortable and autonomous',
				SUBTITLE_3: 'Advanced notions',
				SUBTITLE_4: 'Others',
				PHOTO_SKILL: 'Canon DSLR photography',
				ENGLISH_SKILL: 'English (reading, writing and listening comprehension)'
			},
			CONTACT: {
				TITLE: 'Contact'
			},
			VISIT_LINK: 'Access website'
		};

		$translateProvider.translations('fr', translationsFR);
		$translateProvider.translations('en', translationsEN);
		$translateProvider.preferredLanguage('fr');
		$translateProvider.useSanitizeValueStrategy('escaped');
	}
]);