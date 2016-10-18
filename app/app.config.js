'use strict';

angular.module('MainApp').
	config([
		'$locationProvider', 
		'$routeProvider', 
		function config($locationProvider, $routeProvider){
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/',{
					redirectTo: '/cards'
				}).
				when('/cards',{
					template: '<card-list></card-list>'
				}).
				when('/cards/:id',{
					template: '<card-detail></card-detail>'
				}).
				when('/cards/:id/edit',{
					template: '<card-edit></card-edit>'
				}).
				otherwise({
					template: 'неизвестная страница'
				});
		}
	]);