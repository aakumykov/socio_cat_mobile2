'use strict';

function SideBarController(sideBarService) {
	this.visibility = false;
	var self = this;
	
	sideBarService.onToggle(function(visibility){
		console.debug('SideBarController.onToggle.CALLBACK('+this.visibility+')');
		self.visibility = visibility;
	});
	
	this.status = function(){
		console.debug('SideBarController.status('+this.visibility+')');
		return this.visibility;
	}
}

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	controller: SideBarController,
});

module.component('sideBarToggler',{
	template: "<a ng-click='' href='javascript:void(0)' id='sidebar_button' title='Меню'>@Меню</a>",
	controller: SideBarController,
});