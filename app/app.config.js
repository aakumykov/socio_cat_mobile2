'use strict';

angular.module('MainApp').
	config([
		'$locationProvider', 
		'$routeProvider', 
		function config($locationProvider, $routeProvider){
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/cards',{
					template: '<card-list></card-list>'
				}).
				when('/cards/:id',{
					template: '<card-detail></card-detail>'
				}).
				otherwise({
					template: 'Нет такой страницы'
				});
		}
	]);