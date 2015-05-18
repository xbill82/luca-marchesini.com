define(['require', 'marionette', 'App', 'collections/Claims'],
function (require) {
	'use strict';

    var App = require('App'),
		Marionette = require('marionette'),
		Claims = require('collections/Claims');

	var ClaimStore = Marionette.Controller.extend({
		
		initialize: function() {
			var that = this;

			App.reqres.setHandler('store:claims:getOneFeatured', function() {
				return that.getOneFeaturedClaim();
			});

			App.reqres.setHandler('store:claims:getAll', function() {
				return that.getAllClaims();
			});

			App.reqres.setHandler('store:claims:getFeaturedForShow', function(showName) {
				return that.getFeaturedClaimsForShow(showName);
			});
		},

		getOneFeaturedClaim: function() {
			var claims = new Claims();
			var deferred = $.Deferred();

			claims.setOneFeatured();

			claims.fetch({
				success: function(collection, response, options) {
					deferred.resolve(collection);
				},
				error: function(collection, response, options) {
					deferred.reject();
				},
			});

			return deferred.promise();
		},

		getFeaturedClaimsForShow: function(showName) {
			if (!showName)
				throw "No showName specified";

			var claims = new Claims({
				filter: 'featured',
				showName: showName
			});
			var deferred = $.Deferred();

			claims.fetch({
				success: function(collection, response, options) {
					deferred.resolve(collection);
				},
				error: function(collection, response, options) {
					deferred.reject();
				},
			});

			return deferred.promise();
		},

		getAllClaims: function() {
			var claims = new Claims();
			var deferred = $.Deferred();

			claims.fetch({
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

	return new ClaimStore();
});