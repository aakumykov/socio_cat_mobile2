'use strict';

function SideBarController($rootScope, $scope){
	this.visibe = true;
	this.statusRequest = function(){
		console.debug('SideBarController.statusRequest('+this.visibe+')');
		return this.visibe;
	}
	this.showRequest = function(){
		console.debug('SideBarController.showRequest()');
		$rootScope.$broadcast('sidebar', {cmd:'show'});
	}
	this.hideRequest = function(){
		console.debug('SideBarController.hideRequest()');
		$rootScope.$broadcast('sidebar', {cmd:'hide'});
	}
	this.showResponse = function(){
		console.debug('SideBarController.showResponse()');
		var self = this;
		$scope.$on('sidebar', function(cmd){
			self.visibe = true;
		});
	}
	this.hideResponse = function(){
		console.debug('SideBarController.hideResponse()');
		var self = this;
		$scope.$on('sidebar', function(cmd){
			self.visibe = false;
		});
	}
}

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	controller: SideBarController,
});

module.component('sideBarToggler',{
	template: "<a ng-click='$ctrl.show()'' href='javascript:void(0)' id='sidebar_button' title='Меню'>@Меню</a>",
	replace: true,
});