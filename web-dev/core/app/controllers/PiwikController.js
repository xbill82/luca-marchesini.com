define(['controllers/AnalyticsController'],
	function (AnalyticsController) {
	return AnalyticsController.extend({
		setupTracker: function() {},

		trackEvent: function(category, action) {
			_paq.push(['trackEvent', category, action]);
		},

		trackPageView: function(pageTitle) {
			_paq.push(['setDocumentTitle', pageTitle]);
			_paq.push(['trackPageView']);
		}
	});
});
