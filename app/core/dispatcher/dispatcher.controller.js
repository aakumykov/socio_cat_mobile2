'use strict';

angular.module('Dispatcher',[]).
controller('DispatcherController', function(){
	this.sidebar = true;

	this.toggle = function(){
		this.sidebar = !this.sidebar;
	}

	this.status = function(){
		this.sidebar;
	}
});