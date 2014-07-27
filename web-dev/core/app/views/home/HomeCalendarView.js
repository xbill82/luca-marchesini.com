define([ 'marionette', 'handlebars', 'App', 'text!templates/home.html', 'collections/Gigs', 'views/calendar/GigInListView'],
	function (Marionette, Handlebars, App, template, Gigs, GigView) {
		return Marionette.CompositeView.extend({
			template: Handlebars.compile($(template).filter('#t-calendar').html()),
			childView: GigView,
			collection: new Gigs(),
			itemViewContainer: 'tbody',
			tagName: 'table',
			className: 'table',

			ui: {
			},

			events: {
			},

			initialize: function() {
				this.collection.setUpcoming();
				this.collection.setLimit(5);
			},

			onShow: function() {
				this.collection.fetch();
			},
		});
	}
);
