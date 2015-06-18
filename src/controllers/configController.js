'use strict';

app
	.controller('configController' , function ($scope , $rootScope, dataProvider) {
		$rootScope.options = dataProvider.getOptions();
		$rootScope.translateWords = dataProvider.getTranslateWords();

	})
;
