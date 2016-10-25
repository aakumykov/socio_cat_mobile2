'use strict';

angular.module('myApp',['ngTouch']);
 
var onDeviceReady = function() {
    angular.bootstrap(document, ['myApp']);
}
document.addEventListener('deviceready', onDeviceReady);

