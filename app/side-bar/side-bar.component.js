'use strict';

// function SidebarController(){
// 	this.visible = true;

// 	this.status = function(){
// 		console.log('SidebarController.status()');
// 		return this.visible;
// 	}
	
// 	this.toggle = function(){
// 		console.log('SidebarController.toggle()');
// 		this.visible = !this.visible;
// 	}

// 	this.hide = function(){
// 		console.log('SidebarController.hide()');
// 		this.visible = false;
// 	}

// 	this.show = function(){
// 		console.log('SidebarController.show()');
// 		this.visible = true;
// 	}
// };

var module = angular.module('Sidebar');

//console.info('module: '+module);

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	controller: {
		visible: true,
		status: function(){
			console.log('SidebarController.status()');
			return this.visible;
		},
		toggle: function(){
			console.log('SidebarController.toggle()');
			this.visible = !this.visible;
		},
		hide: function(){
			console.log('SidebarController.hide()');
			this.visible = false;
		},
		show: function(){
			console.log('SidebarController.show()');
			this.visible = true;
		},
	},
} );

// module.component('sideBarToggler', {
// 	templateUrl: 'side-bar/side-bar-toggler.template.html',
// 	controller: SidebarController,
// });

