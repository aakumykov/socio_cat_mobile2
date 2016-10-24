'use strict';

function SideBarController(){
	this.visible = true;

	this.status = function(){
		console.log('SideBarController.status()');
		return this.visible;
	}
}

var module = angular.module('SideBar')

module.component('sideBar', {
	templateUrl: 'side-bar/side-bar.template.html',
	controller: SideBarController,
});