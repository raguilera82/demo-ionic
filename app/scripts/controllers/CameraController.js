/* global angular, Camera, CameraPopoverOptions */

'use strict'; 

angular.module('Camera', [])
.controller('CameraController', function($scope, $cordovaCamera, $cordovaToast){

	$scope.takePicture = function(){
		var options = {
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			encodingType: Camera.EncodingType.JPG,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};

		$cordovaCamera.getPicture(options).then(function(imageData){
			$scope.myImage = 'data:image/jpeg;base64,' + imageData;
		}, function(err){
			$cordovaToast.showShortCenter('Foto cancelada');
		});

	};

});