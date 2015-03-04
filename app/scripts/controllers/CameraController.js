angular.module('Controllers', [])
.controller('CameraController', function($scope, $cordovaCamera, $cordovaToast){
	
	console.log('CameraController: fuera');

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
			$cordovaToast.showShortCenter('Error cámara');
		});

	}

});