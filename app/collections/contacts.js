define([
    "jquery",
    "backbone",
    "backbone.localStorage",
    "models/contact"
], 

function ($, Backbone, LocalStorage, Contact) {

	return Backbone.Collection.extend({

		model: Contact,

		localStorage: new Backbone.LocalStorage('contacts-backbone'),

		initialize: function (){
			console.log('ContactS');
		},
		comparator: function( contact ) {
	      return contact.get('order');
	    }


	});

});