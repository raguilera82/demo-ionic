angular.module('Contacts', [])
.controller('ContactsController', function($scope, $cordovaContacts, $cordovaToast){
	
	console.log('ContactsController');

	$scope.findContacts = function(){

		var options = new ContactFindOptions();
		options.filter = '';
		options.multiple = true;
		options.desiredFields = [navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];

		$cordovaContacts.find(options).then(function (results){
			console.log(JSON.stringify(results));
			$scope.contacts = results;
		}, function(err){
			$cordovaToast.showShortCenter('Error contactos');
		});
	}

});