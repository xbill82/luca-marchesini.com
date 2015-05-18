define(['require', 'marionette', 'App', 'collections/Gigs'],
function (require) {
	'use strict';

    var App = require('App'),
		Marionette = require('marionette'),
		Gigs = require('collections/Gigs');

	var GigStore = Marionette.Controller.extend({
		
		initialize: function() {
			var that = this;

			App.reqres.setHandler('store:gigs:getRecentUpcoming', function() {
				return that.getRecentUpcomingGigs();
			});

			App.reqres.setHandler('store:gigs:getUpcoming', function() {
				return that.getUpcomingGigs();
			});

			App.reqres.setHandler('store:gigs:getOld', function() {
				return that.getOldGigs();
			});
		},

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