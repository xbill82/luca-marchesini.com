define(['controllers/AnalyticsController', 'GA'],
	function(AnalyticsController, GA) {
		return AnalyticsController.extend({
			setupTracker: function(apiKey) {},

			trackEvent: function(category, action) {
				GA.event(category, action);
			},

			trackPageView: function(pageTitle) {
				GA.view(pageTitle);
			}
		});
	});