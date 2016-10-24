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

	this.show = function(){
		console.log('ss.show()');
		this.visible = true;
	}

	this.hide = function(){
		console.log('ss.hide()');
		this.visible = false;
	}
});