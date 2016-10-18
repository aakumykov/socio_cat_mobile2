'use strict';

angular.module('CardEdit').
	component('cardEdit',{
		templateUrl: 'card-edit/card-edit.template.html',
		controller: ['$http', '$routeParams', function($http, $routeParams){
			var self = this;

			var id = $routeParams.id;
			  console.log('edit id: '+id);

			$http.get('cards/list.json').then(function(response){
				var cardList = response.data;
				self.card = cardList[id-1];
			});

			this.cancel = function(){
				console.log('отмена редактирования карточки '+id);
			}
			this.save = function(){
				console.log('сохранение карточки '+id);

				var formData = new FormData();
					formData.append('title', this.card.title);
					formData.append('content', this.card.content);
					//if (this.card.file) formData.append('avatar', this.card.file);

				$http.post('/items/new', formData, { 
					transformRequest: angular.identity, 
					headers: {'Content-Type': undefined}
				}).then(
					function successCallback(response) {
						//$scope.displayResult('success','карточка создана');
						console.log('POST: успех сохранения карточки '+id);
					},
					function errorCallback(response) {
						//$scope.displayResult('error','ошибка создания карточки');
						console.log(
							'POST: ошибка сохранения карточки '+id+
							': '+response.status+
							', '+response.statusText
						);
					}
				);
			}
		}]
	});