'use strict';

function SideBarController(){
	var self = this;
	
	self.visible = true;

	self.status = function(){
		console.debug('SideBarController.status(), visible: '+self.visible);
		return self.visible;
	}

	self.hide = function(){
		console.debug('SideBarController.hide(), before: '+self.visible);
		self.visible = false;
		console.debug('SideBarController.hide(), after: '+self.visible);
	}

	self.show = function(){
		console.debug('SideBarController.show(), before: '+self.visible);
		self.visible = true;
		console.debug('SideBarController.show(), after: '+self.visible);
	}
}

var module = angular.module('SideBar')

module.component('sideBar', {
	templateUrl: 'side-bar/side-bar.template.html',
	controller: SideBarController,
});

module.component('sideBarLauncher', {
	templateUrl: 'side-bar/side-bar-launcher.template.html',
	controller: SideBarController,
	bindings: {
		action: '&',
	},
	transclude: true,
});