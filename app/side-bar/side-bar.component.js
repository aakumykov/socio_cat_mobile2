'use strict';

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	bindings: {
		visibility: '<',
		sidebarToggle: '&',
	},
	controller: [ 'ss', function SideBarController(ss){
		this.action = function(){
			console.log('ss: '+ss);
		}
	}]
});

