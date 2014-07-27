define([ 'marionette', 'handlebars', 'App', 'text!templates/home.html'],
	function (Marionette, Handlebars, App, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile($(template).filter("#t-calendar-empty").html()),
	        tagName: 'tr',
	        className: 'gigs-empty'
	    });
	}
);