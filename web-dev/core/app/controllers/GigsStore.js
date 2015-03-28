define(['require', 'marionette', 'collections/Gigs'],
function (require) {
	'use strict';

	var Marionette = require('marionette');
	var Gigs = require('collections/Gigs');

	var GigStore = Marionette.Controller.extend({
		
		getRecentUpcomingGigs: function() {
			var gigs = new Gigs();
			var deferred = $.Deferred();

			gigs.setSome();
			gigs.setLimit(5);

			gigs.fetch({
				success: function(collection, response, options) {
					deferred.resolve(collection);
				},
				error: function(collection, response, options) {
					deferred.reject();
				},
			});

			return deferred.promise();
		},

		getUpcomingGigs: function() {
			var gigs = new Gigs();
			var deferred = $.Deferred();

			gigs.setUpcoming();

			gigs.fetch({
				success: function(collection, response, options) {
					deferred.resolve(collection);
				},
				error: function(collection, response, options) {
					deferred.reject();
				},
			});

			return deferred.promise();
		},

		getOldGigs: function() {
			var gigs = new Gigs();
			var deferred = $.Deferred();

			gigs.setOld();

			gigs.fetch({
				success: function(collection, response, options) {
					deferred.resolve(collection);
				},
				error: function(collection, response, options) {
					deferred.reject();
				},
			});

			return deferred.promise();
		},
	});

	return new GigStore();
});