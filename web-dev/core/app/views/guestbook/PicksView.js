define([ 'marionette', 'handlebars', 'App', 'collections/Claims', './PickView'],
	function (Marionette, Handlebars, App, Claims, PickView) {
		return Marionette.CollectionView.extend({
			childView: PickView
		});
	}
);
