define([ 'marionette', 'handlebars', 'App', 'collections/Shows', 
	'./ShowItemView'],
	function (Marionette, Handlebars, App, Shows, ShowItemView) {
	    return Marionette.CollectionView.extend({
	        childView: ShowItemView,
	    });
	}
);
