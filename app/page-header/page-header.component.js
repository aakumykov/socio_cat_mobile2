'use strict';

angular.module('PageHeader').
	component('pageHeader',{
		templateUrl: 'page-header/page-header.template.html',
		controller: [ '$scope', function($scope){
			$scope.showSideNav = function(){
				document.getElementById("full_page").style.marginLeft = $scope.sideNavWidth;
				document.getElementById("full_page").style.marginRight = '-'+$scope.sideNavWidth;
				
				document.getElementById("side_nav").style.width = $scope.sideNavWidth;
				document.getElementById("side_nav").style.display = "block";
				
				document.getElementById("sidebar_button").style.display = 'none';
			};
			$scope.hideSideNav = function(){
				document.getElementById("full_page").style.marginLeft = '0%';
				document.getElementById("full_page").style.marginRight = '0%';
				
				document.getElementById("side_nav").style.width = $scope.sideNavWidth;
				document.getElementById("side_nav").style.display = "none";

				document.getElementById("sidebar_button").style.display = 'inline';
			};
		}]
	});