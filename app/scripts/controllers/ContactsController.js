angular.module('Contacts', [])
.controller('ContactsController', function($scope, $cordovaContacts, $cordovaToast, $ionicPlatform){
	
	console.log('ContactsController');

	$ionicPlatform.ready(function(){ 
		findContacts();		
	});

	$scope.findContacts = function(){
		findContacts();
	};

	function findContacts(){
		var options = new ContactFindOptions();
		options.filter = '';
		options.multiple = true;
		options.desiredFields = [navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];

		$cordovaContacts.find(options).then(function (results){
			console.log(JSON.stringify(results));
			$scope.contacts = results;
			$scope.$broadcast('scroll.refreshComplete');
		}, function(err){
			$cordovaToast.showShortCenter('Error contactos');
		});
	}

});