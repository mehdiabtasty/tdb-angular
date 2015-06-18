'use strict';

app
	.controller('sidebarController' , function ($scope , dataProvider) {
		$scope.menu = dataProvider.getMenu();
		$scope.user = dataProvider.getUser();
	})
;
