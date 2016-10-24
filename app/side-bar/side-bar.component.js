'use strict';

function SideBarController(){
	this.visible = true;

	this.status = function(){
		console.log('SideBarController.status()');
		return this.visible;
	}

	this.hide = function(){
		console.log('SideBarController.hide()');
		this.visible = false;
	}
}

var module = angular.module('SideBar')

module.component('sideBar', {
	templateUrl: 'side-bar/side-bar.template.html',
	controller: SideBarController,
});