'use strict';

angular.module('CardList').
	component('cardList',{
		templateUrl: 'card-list/card-list.template.html',
		controller: ['$http', function CardListController($http){
			var self = this;
			
			$http.get('cards/list.json').then(function(response){
				console.log('CardList');
				self.cardList = response.data;
			});
		}]
	}
);
