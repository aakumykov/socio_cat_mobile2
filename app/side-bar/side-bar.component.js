'use strict';

var module = angular.module('SideBar');

module.service('sidebar', function(){
	this.visible = true;

	this.status = function(){
		return this.visible;
	}

	this.toggle = function(){
		this.visible = !this.visible;
	}
});


module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	bindings: {
		visibility: '<',
		onSidebarToggle: '&',
	},
});

