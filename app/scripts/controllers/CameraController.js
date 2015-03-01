angular.module('Controllers', [])
.controller('CameraController', function($scope, $cordovaCamera, $cordovaToast){
	
	console.log('CameraController: fuera');

	$scope.takePicture = function(){
		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 100,
			targetHeight: 100,
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