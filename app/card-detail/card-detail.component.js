'use strict';

angular.module('CardDetail').
	component('cardDetail',{
		templateUrl: 'card-detail/card-detail.template.html',
		controller: ['$http', '$routeParams', function($http, $routeParams){
			var self = this;

			this.card = undefined;

			var id = $routeParams.id;
			  console.log('id: '+id);

			$http.get('cards/list.json').then(function(response){
				var cardList = response.data;

				self.card = cardList[id-1];
			});
		}]
	});