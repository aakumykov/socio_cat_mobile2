'use strict';

var module = angular.module('SideBar');

module.factory('sideBarService', function(){
	var visibility = false;

	this.actions = {
		toggle: function(){
			console.debug('sideBarService.toggle()');
			visibility = !visibility;
		},
		show: function(){
			console.debug('sideBarService.show()');
			visibility = true;
		},
		hide: function(){
			console.debug('sideBarService.hide()');
			visibility = false;
		},
		status: function(){
			console.debug('sideBarService.status('+visibility+')');
			return visibility;
		},
	}

	var self = this;

	var cmd = function(name){
		console.debug('sideBarService.cmd('+name+')');
		return self.actions[name]();
	}

	return {
		cmd: cmd,
	}
});