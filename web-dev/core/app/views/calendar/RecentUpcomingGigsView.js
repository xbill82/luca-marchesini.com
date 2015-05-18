define([ 'marionette', 'handlebars', 'App', 'text!./templates/gigs-list.html', 'collections/Gigs', 'views/calendar/GigInListView'],
	function (Marionette, Handlebars, App, template, Gigs, GigView) {
		return Marionette.CompositeView.extend({
			template: Handlebars.compile(template),
			childView: GigView,
			itemViewContainer: 'tbody',
			tagName: 'table',
			className: 'table',
		});
	}
);
