'use strict';

var data_languages = [
	{ 'id': 1 , 'tag': 'fr' , 'country': 'France' , 'name': 'Français' , 'url': '/' , 'class': 'flag-fr' , 'active': false},
	{ 'id': 2 , 'tag': 'en' , 'country': 'United States' , 'name': 'English (US)' , 'url': '/' , 'class': 'flag-us' , 'active': true},
	{ 'id': 3 , 'tag': 'es' , 'country': 'España' , 'name': 'Español' , 'url': '/' , 'class': 'flag-es' , 'active': false},
	{ 'id': 4 , 'tag': 'de' , 'country': 'German' , 'name': 'Deutsch' , 'url': '/' , 'class': 'flag-de' , 'active': false}
];

var data_news = [
	{ 'title': 'Stat Wars, Episode VIII: Return of Bayes' },
	{ 'title': 'Comment mesurer l’impact de sa stratégie de testing sur le long terme ?' },
	{ 'title': 'L’AB Testing, nouveau relais de croissance des ecommerçants ?' },
	{ 'title': '6 astuces pour optimiser son site en cette période de fête' }
	
];

app
	.controller('headerController' , function ($scope) {
		$scope.languages = data_languages;
		$scope.news      = data_news;
		$scope.haveNews  = $scope.news.length;
	})
;
