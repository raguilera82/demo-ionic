angular.module('Rate', [])
.controller('RateController', function($scope, $cordovaActionSheet, $cordovaToast){
	
	console.log('RateController: fuera');

	$scope.doAcciones = function(){
		var options = {
		    title: 'What do you want with this image?',
		    buttonLabels: ['Lucia es la mejor', 'Share via Twitter'],
		    addCancelButtonWithLabel: 'Cancel',
		    androidEnableCancelButton : true,
		    winphoneEnableCancelButton : true,
		    addDestructiveButtonWithLabel : 'Delete it'
		  };

		$cordovaActionSheet.show(options).then(function(btnIndex) {
        var index = btnIndex;
        $cordovaToast.showShortCenter('Ha pulsado: ' + index);
      });;

	}

});