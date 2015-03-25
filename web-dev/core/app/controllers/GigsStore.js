define(['require', 'backbone.marionette', 'collections/Gigs'],
function (require) {
	'use strict';

	var Marionette = require('backbone.marionette');
	var Gigs = require('collections/Gigs');

	return Marionette.Controller.extend({
		
		getRecentUpcomingGigs: function() {
			var gigs = new Gigs();
			var deferred = $.Deferred();

			gigs.setSome();
			gigs.setLimit(5);

			gigs.fetch({
				success: function(data) {
					deferred.resolve(data);
				},
			});

			return deferred.promise();
		},
	});

});