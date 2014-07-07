define([ 'marionette', 'handlebars', 'App', 'text!templates/home.html', 'collections/Shows', 
	'./HomeShowView', 'views/calendar/NoGigsView'],
	function (Marionette, Handlebars, App, template, Shows, HomeShowView, NoGigsView) {
	    return Marionette.CollectionView.extend({
	        childView: HomeShowView,
	        emptyView: NoGigsView
	    });
	}
);
