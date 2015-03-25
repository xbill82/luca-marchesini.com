define(['jquery', 'backbone', 'marionette', 'App',],
	function ($, Backbone, Marionette, App) {
	return Backbone.Marionette.Controller.extend({
		initialize: function(apiKey) {
			var that = this;

			this.setupTracker(apiKey);

			App.commands.setHandler('trackEvent', function(category, action) {
				that.trackEvent(category, action);
			});

			App.commands.setHandler('trackPageView', function(pageTitle) {
				that.trackPageView(pageTitle);
			});
		},

		setupTracker: function(apiKey) {},

		trackEvent: function(category, action) {},

		trackPageView: function(pageTitle) {}
	});
});
