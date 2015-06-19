'use strict';

/*Factory des données - Service qui récupères les données en Ajax au format JSON*/
app.factory('dataProvider' , function($q, $http) {
  var factory = {
    accounts: false,
    getAccounts : function(){
      var deferred = $q.defer();

      	// Simple GET request example :
		$http.get('API.php',{params: {dataProvider: 'accounts'}}).
			success(function(data, status, headers, config) {
	            factory.accounts = data;
	            deferred.resolve(factory.accounts);
			});

      return deferred.promise;
    },
    tableCols: false,
    getTableCols : function(){
      var deferred = $q.defer();

      	// Simple GET request example :
		$http.get('API.php',{params: {dataProvider: 'tableCols'}}).
			success(function(data, status, headers, config) {
	            factory.tableCols = data;
	            deferred.resolve(factory.tableCols);
			});

      return deferred.promise;
    },
    optionsPage: false,
    getOptions : function(){
      var deferred = $q.defer();

      	// Simple GET request example :
		$http.get('API.php',{params: {dataProvider: 'optionsPage'}}).
			success(function(data, status, headers, config) {
	            factory.optionsPage = data;
	            deferred.resolve(factory.optionsPage);
			});

      return deferred.promise;
    },
    translateWords: false,
    getTranslateWords : function(){
      var deferred = $q.defer();

      	// Simple GET request example :
		$http.get('API.php',{params: {dataProvider: 'translateWords'}}).
			success(function(data, status, headers, config) {
	            factory.translateWords = data;
	            deferred.resolve(factory.translateWords);
			});

      return deferred.promise;
    },
    menu: false,
    getMenu : function(){
      var deferred = $q.defer();

      	// Simple GET request example :
		$http.get('API.php',{params: {dataProvider: 'menu'}}).
			success(function(data, status, headers, config) {
	            factory.menu = data;
	            deferred.resolve(factory.menu);
			});

      return deferred.promise;
    },
    user: false,
    getUser : function(){
      var deferred = $q.defer();

      	// Simple GET request example :
		$http.get('API.php',{params: {dataProvider: 'user'}}).
			success(function(data, status, headers, config) {
	            factory.user = data;
	            deferred.resolve(factory.user);
			});

      return deferred.promise;
    },
    languages: false,
    getLanguages : function(){
      var deferred = $q.defer();

      	// Simple GET request example :
		$http.get('API.php',{params: {dataProvider: 'languages'}}).
			success(function(data, status, headers, config) {
	            factory.languages = data;
	            deferred.resolve(factory.languages);
			});

      return deferred.promise;
    },
    news: false,
    getNews : function(){
      var deferred = $q.defer();

      	// Simple GET request example :
		$http.get('API.php',{params: {dataProvider: 'news'}}).
			success(function(data, status, headers, config) {
	            factory.news = data;
	            deferred.resolve(factory.news);
			});

      return deferred.promise;
    },
  }
  return factory;
});