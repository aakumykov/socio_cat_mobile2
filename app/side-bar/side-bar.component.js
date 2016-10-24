'use strict';

angular.module('SideBar').
	component('sideBar',{
		templateUrl: 'side-bar/side-bar.template.html',
		bindings: {
			visibility: '<',
		},
	});