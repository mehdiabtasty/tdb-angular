'use strict';

app
	.controller('headerController' , function ($scope , dataProvider) {
		$scope.languages = dataProvider.getLanguages().then(function(languages){
	      $scope.languages = languages;
	    });
		$scope.news = dataProvider.getNews().then(function(news){
	      $scope.news = news;
	      $scope.haveNews  = $scope.news.length;
	    });
	})
;
