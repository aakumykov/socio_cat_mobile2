'use strict';

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	controller: [ 'ss', function SideBarController(ss){
		this.close = function(){
			console.log('SideBarController.close()');
			ss.hide();
		}
		this.status = function(){
			console.log('SideBarController.status()');
			return ss.status();
		}
	}]
});

module.component('sideBarToggler',{
	templateUrl: 'side-bar/side-bar-toggler.template.html',
	replace: true,
	controller: [ 'ss', function SideBarController(ss){
		this.close = function(){
			console.log('SideBarController.close()');
			ss.toggle();
		}
		this.status = function(){
			console.log('SideBarController.status()');
			return ss.status();
		}
	}]
});