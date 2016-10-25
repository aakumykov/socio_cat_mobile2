'use strict';

function SideBarController(sideBarService) {

}

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	controller: SideBarController,
});

module.component('sideBarToggler',{
	template: "<a ng-click='' href='javascript:void(0)' id='sidebar_button' title='Меню'>@Меню</a>",
	controller: SideBarController,
});