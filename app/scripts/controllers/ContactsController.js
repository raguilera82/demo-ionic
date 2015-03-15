angular.module('Contacts', ['Contacts.services'])
.controller('ContactsController', 
	function($scope, $cordovaToast, $ionicPlatform, ContactsService){
	
	$ionicPlatform.ready(function(){ 
		doFindContacts();	
	});

	$scope.findContacts = function(){
		 doFindContacts();	
	};

	function doFindContacts(){
		ContactsService.findContacts().then(function (results){
			$scope.contacts = results;
			$scope.$broadcast('scroll.refreshComplete');
		}, function(err){
			$cordovaToast.showShortCenter('Error en los contactos');
		});
	}

});