'use strict';

var module = angular.module('SideBar');

module.factory('sideBarService', function(){
	var visibility = true;

	var cmd = function(name){
		console.debug('sideBarService.cmd('+name+')');

		switch (name) {
			case 'status':
				return status();
			case 'show':
				return show();
			case 'hide':
				return hide();
			case 'toggle':
				return toggle();
			default:
				console.error("неизвестная команда '"+name+"'");
		}
	}

	var toggle = function(){
		console.debug('sideBarService.toggle()');
		visibility = !visibility;
	}

	var show = function(){
		console.debug('sideBarService.show()');
		visibility = true;
	}

	var hide = function(){
		console.debug('sideBarService.hide()');
		visibility = false;
	}

	var status = function(){
		console.debug('sideBarService.status('+visibility+')');
		return visibility;
	}

	return {
		cmd: cmd,
	}
});