'use strict';
describe('Modulo Contacts', function(){
	beforeEach(function(){
		module('Contacts');
	});
	describe('Contacts Service', function(){
	var contactsService;

	beforeEach(function(){
		inject(['ContactsService', function(service){
				contactsService = service;
		}]);
	});

	it ('debe devolver los contactos con nombre Ruben', function(){
		var contacts = contactsService.findContacts();
		expect(contacts).toBeDefined(); 
	}); 

});
});
