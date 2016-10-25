'use strict';

var module = angular.module('SideBar');

module.factory('sideBarService', function(){
	var visibility = false;

	var all_callbacks = [];
	
	var onToggle = function(callback){
		console.debug('sideBarService.onToggle()');
		all_callbacks.push(callback);
	}

	var trigger_callbacks = function(){
		for (var i=0; i<all_callbacks.length; i++) {
			all_callbacks[i](visibility);
		}
	}

	var toggle = function(){
		console.debug('sideBarService.toggle()');
		visibility = !visibility;
		trigger_callbacks();
	}

	var show = function(){
		console.debug('sideBarService.show()');
		visibility = true;
		trigger_callbacks();
	}

	var hide = function(){
		console.debug('sideBarService.hide()');
		visibility = false;
		trigger_callbacks();
	}

	var status = function(){
		console.debug('sideBarService.status('+visibility+')');
		return visibility;
	}

	return {
		onToggle: onToggle,
		toggle: toggle,
		show: show,
		hide: hide,
		status: status,
	}
});