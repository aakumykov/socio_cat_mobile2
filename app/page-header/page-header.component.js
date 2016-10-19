'use strict';

angular.module('PageHeader').
	component('pageHeader',{
		templateUrl: 'page-header/page-header.template.html',
		controller: [ '$scope', function($scope){
			//this.sideNavWidth = '30%';

			$scope.showSideBar = function(){
				document.getElementById("page").style.marginLeft = '30%';
				document.getElementById("page").style.marginRight = '-30%';
				
				document.getElementById("side_nav").style.width = '30%';
				document.getElementById("side_nav").style.display = "block";
				
				document.getElementById("sidebar_button").style.display = 'none';
			};
			$scope.hideSideBar = function(){
				document.getElementById("page").style.marginLeft = '0%';
				document.getElementById("page").style.marginRight = '0%';
				
				document.getElementById("side_nav").style.width = '30%';
				document.getElementById("side_nav").style.display = "none";

				document.getElementById("sidebar_button").style.display = 'inline';
			};
		}]
	});