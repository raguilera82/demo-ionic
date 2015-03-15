angular.module('Contacts.services', [])

.factory('ContactsService', function($cordovaContacts){
	function findContactsByName(){
		var options = new ContactFindOptions();
		options.filter = 'Ruben';
		options.multiple = true;
		options.desiredFields = [navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];

		return $cordovaContacts.find(options);
	}

		return {
			findContacts: findContactsByName
	};
});