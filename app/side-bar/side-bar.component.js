'use strict';

function SideBarController(sideBarService) {
	this.status = function(){
		console.debug('SideBarController.status()');
		return sideBarService.status();
	}
	this.hide = function(){
		console.debug('SideBarController.hide()');
		sideBarService.hide();
	}
	this.show = function(){
		console.debug('SideBarController.show()');
		sideBarService.show();
	}
	this.toggle = function(){
		console.debug('SideBarController.show()');
		sideBarService.show();
	}
}

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	controller: SideBarController,
});

module.component('sideBarToggler',{
	template: "<a ng-click='$ctrl.show()' href='javascript:void(0)' id='sidebar_button' title='Меню'>@Меню</a>",
	controller: SideBarController,
});