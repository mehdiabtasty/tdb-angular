'use strict';

var data_menu = [
	{'id': 1, 'name': 'Dashboard'             , 'url': '/'                 , 'fa_icon': 'fa-home'        , 'active': true},
	{'id': 2, 'name': 'Knowledge'             , 'url': '/knowledge'        , 'fa_icon': 'fa-cloud'       , 'active': false},
	{'id': 3, 'name': 'Client stats'          , 'url': '/clientstats'      , 'fa_icon': 'fa-bar-chart'   , 'active': false},
	{'id': 4, 'name': 'Pending tests'         , 'url': '/pendingtests'     , 'fa_icon': 'fa-play-circle' , 'active': false},
	{'id': 4, 'name': 'Translations'          , 'url': '/translations'     , 'fa_icon': 'fa-comments-o'  , 'active': false},
	{'id': 4, 'name': 'Validate plugins'      , 'url': '/validateplugins'  , 'fa_icon': 'fa-plug'        , 'active': false},
	{'id': 4, 'name': 'Translate plugins'     , 'url': '/translateplugins' , 'fa_icon': 'fa-comment-o'   , 'active': false},
	{'id': 4, 'name': 'Last 24h tests ranking', 'url': '/lastTestsRanking' , 'fa_icon': 'fa-signal'      , 'active': false},
	{'id': 4, 'name': 'Webinar management'    , 'url': '/webinar'          , 'fa_icon': 'fa-calendar'    , 'active': false}
];
var data_user = {
		'firstname': 'mehdi',
		'lastname' : 'betari',
		'imgUri'   : 'ressources/img/avatars/mehdi.jpg',
	};

app
	.controller('sidebarController' , function ($scope) {
		$scope.menu = data_menu;
		$scope.user = data_user;
	})
;
