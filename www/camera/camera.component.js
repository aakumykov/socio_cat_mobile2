'use strict';

function MyCameraController(){
	console.debug('MyCameraController');

	var self = this;
	
	self.name = 'Фотопаратчик';

	self.takeAPhoto = function(){
		console.debug('takeAPhoto()');
		navigator.camera.getPicture(
			self.onSuccess, 
			self.onFail, 
			{ 
				quality: 50,
    			destinationType: Camera.DestinationType.FILE_URI
    		}
    	);
	}

	self.onSuccess = function(imageURI){
		console.debug('onSuccess('+imageURI+')');
		var image = document.getElementById('myImage');
    	image.src = imageURI;
	}

	self.onFail = function(message) {
	    console.error('ОШИБКА: ' + message);
	}
}

module = angular.module('MyCamera').
component('myCamera',{
	templateUrl: 'camera/camera.template.html',
	controller: MyCameraController,
});