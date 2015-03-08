angular.module('Rate', [])
.controller('RateController', function($scope, $cordovaActionSheet, $cordovaToast){
	
	$scope.doAcciones = function(){
		var options = {
		    title: '¿Qué te parece la demo?',
		    buttonLabels: ['La mejor del mundo', 'No está mal', 'Yo lo se hacer mejor']
		  };

		$cordovaActionSheet.show(options).then(function(btnIndex) {
        var index = btnIndex;
        if (index == 1){
        	$cordovaToast.showShortCenter('Ya será menos :-)');	
        }else if (index == 2){
        	$cordovaToast.showShortCenter('Espero que te sirva :-|');
        }else if (index == 3){
        	$cordovaToast.showShortCenter('Estoy esperando que lo demuestres ;-)');
        }else {
        	$cordovaToast.showShortCenter('No sé que has pulsado :-(');
        }
        
      });;

	}

});