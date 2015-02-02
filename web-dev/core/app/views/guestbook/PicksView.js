define([ 'marionette', 'handlebars', 'App', 'collections/Claims', './PickView'],
	function (Marionette, Handlebars, App, Claims, PickView) {
		return Marionette.CollectionView.extend({
			childView: PickView,
			collection: new Claims(),

			onShow: function() {
				this.collection.setOneFeatured();
				this.collection.fetch();
			}
		});
	}
);
