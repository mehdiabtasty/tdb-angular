'use strict';

app
	.controller('sidebarController' , function ($scope , dataProvider) {
		$scope.menu = dataProvider.getMenu().then(function(menu){
	      $scope.menu = menu;
	    });
		$scope.user = dataProvider.getUser().then(function(user){
	      $scope.user = user;
	    });
	})
;
