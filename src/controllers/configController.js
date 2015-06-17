'use strict';

var data_options = { 
		'lang': 'en',
		'country': 'australia',
		'flag_icon': 'flag-au',
		'year': '2015',
		'lastConnexion': '52 min plus tôt',
		'pageName': 'Dashboard',
		'pageParentName': 'Home'
	
	};

var data_translateWords = {
		'latestNews'       : 'latest news',
		'noNews'           : 'no news',
		'topicality'       : 'topicality',
		'clear'            : 'clear',
		'home'             : 'home',
		'dashboard'        : 'dashboard',
		'accounts database': 'accounts database',
		'accounts'         : 'accounts',
		'search by'        : 'search by',
		'submit'           : 'submit',
		'lastConnexion'    : 'last connexion'
	};
// var translateWords = {
// 		'latestNews' : 'dernières infos',
//      'noNews': 'no news',
// 		'topicality' : 'actualités',
// 		'clear' : 'vider',
// 		'home' : 'accueil',
// 		'dashboard' : 'tableau de bord',
// 		'accounts database' : 'base client',
// 		'accounts' : 'comptes',
// 		'search by' : 'rechercher par',
// 		'submit' : 'envoyer',
//		'lastConnexion': 'Dernière connexion'
// 	};
app
	.controller('configController' , function ($scope , $rootScope) {
		$rootScope.options = data_options;
		$rootScope.translateWords = data_translateWords;

	})
;
