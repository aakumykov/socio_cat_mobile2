'use strict';

var module = angular.module('SideBar');

module.service('ss', function(){
	this.visible = true;

	this.status = function(){
		return this.visible;
	}

	this.toggle = function(){
		this.visible = !this.visible;
	}
});