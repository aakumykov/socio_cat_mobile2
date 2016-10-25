'use strict';

angular.module('CardList').
	component('cardList',{
		templateUrl: 'card-list/card-list.template.html',
		controller: ['$http', function CardListController($http){
			var self = this;
			
			$http.get('cards/list.json').then(function(response){
				self.cardList = response.data;
			});
		}]
	}
);
