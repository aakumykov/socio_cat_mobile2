'use strict';

var module = angular.module('SideBar');

module.factory('sideBarService', function(){
	var visible = false;

	var all_callbacks = [];
	
	var onToggle = function(callback){
		console.debug('sideBarService.onToggle()');
		all_callbacks.push(callback);
	}

	var toggle = function(){
		console.debug('sideBarService.toggle()');
		visible = !visible;
		for (i=0; i<all_callbacks.length; i++) {
			all_callbacks[i](visible);
		}
	}
	
	return {
		onToggle: onToggle,
		toggle: toggle,
	}
});