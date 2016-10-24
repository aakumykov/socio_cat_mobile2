'use strict';

angular.module('MainApp').
controller('MainController', function(){
	this.page = {
		sideBar: true,
	},

	this.sideBar = function(cmd){
		console.log("MainController.sideBar('"+cmd+"')");

		switch (cmd) {
			case '?':
				return this.page.sideBar;
			case 'toggle':
				this.page.sideBar = !this.page.sideBar;
				break;
			default:
				console.log("неизвестная команда '"+cmd+"'");
				break;
		}
	}
});