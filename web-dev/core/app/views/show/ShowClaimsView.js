define([ 'marionette', 'handlebars', 'App', 'collections/Claims', './ShowClaimView'],
	function (Marionette, Handlebars, App, Claims, ShowClaimView) {
		return Marionette.CollectionView.extend({
			childView: ShowClaimView,

			onShow: function() {
				
			}
		});
	}
);
