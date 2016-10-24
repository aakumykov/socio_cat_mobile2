'use strict';

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	bindings: {
		visibility: '<',
		onSidebarToggle: '&',
	},
});

// module.component('sideBarToggler',{
// 	templateUrl: 'side-bar/side-bar-toggler.template.html',
// 	bindings: {
// 		action: '&',
// 	},
// });