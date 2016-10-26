'use strict';

function SideBarController(sideBarService) {
	this.cmd = function(name){
		console.debug('SideBarController.cmd('+name+')');
		return sideBarService.cmd(name);
	}
}

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	controller: SideBarController,
});

module.component('sideBarToggler',{
	template: "<a ng-click='$ctrl.cmd(\"show\")' href='#' id='sidebar_button' title='Меню'>@Меню</a>",
	controller: SideBarController,
});