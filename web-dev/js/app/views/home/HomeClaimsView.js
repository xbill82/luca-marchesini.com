define([ 'marionette', 'handlebars', 'App', 'collections/Claims', './HomeClaimView'],
	function (Marionette, Handlebars, App, Claims, HomeClaimView) {
		return Marionette.CollectionView.extend({
			childView: HomeClaimView,
			collection: new Claims(),

			onShow: function() {
				this.collection.setOneFeatured();
				this.collection.fetch();
			}
		});
	}
);
