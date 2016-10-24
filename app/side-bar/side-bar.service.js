'use strict';

var module = angular.module('SideBar');

module.service('ss', function(){
	this.visible = true;

	this.status = function(){
		console.log('ss.status()');
		return this.visible;
	}

	this.toggle = function(){
		console.log('ss.toggle()');
		this.visible = !this.visible;
	}
});