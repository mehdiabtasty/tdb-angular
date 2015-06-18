'use strict';

app
	.controller('headerController' , function ($scope) {
		$scope.languages = data_languages;
		$scope.news      = data_news;
		$scope.haveNews  = $scope.news.length;
	})
;
