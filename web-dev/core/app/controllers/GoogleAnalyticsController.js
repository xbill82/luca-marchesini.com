define(['controllers/AnalyticsController'],
	function (AnalyticsController) {
	return AnalyticsController.extend({
		setupTracker: function() {},

		trackEvent: function(category, action) {
			ga('send', 'event', category, action);
		},

		trackPageView: function(pageTitle) {
			ga('send', 'pageview', {'title': pageTitle});
		}
	});
});
