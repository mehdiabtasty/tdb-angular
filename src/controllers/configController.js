'use strict';

app
	.controller('configController' , function ($scope , $rootScope, dataProvider) {
		$scope.optionsPage = dataProvider.getOptions().then(function(optionsPage){
	      $rootScope.optionsPage = optionsPage;
	    });
		$scope.translateWords = dataProvider.getTranslateWords().then(function(translateWords){
	      $rootScope.translateWords = translateWords;
	    });

	})
;
