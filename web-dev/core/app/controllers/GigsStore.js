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
			});

			return deferred.promise();
		},
	});

	return new GigStore();
});