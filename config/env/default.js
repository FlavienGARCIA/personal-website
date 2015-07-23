'use strict';


module.exports = {
	app: {
		title: 'Flavien GARCIA - Développeur web front-end',
		description: 'Site personnel de Flavien GARCIA, développeur web spécialisé dans le front-end',
		keywords: 'Flavien, Garcia, développeur, web, front-end',
		googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions'
};
