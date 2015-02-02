define([ 'marionette', 'handlebars', 'App', 'text!./templates/no-gigs.html'],
	function (Marionette, Handlebars, App, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile(template),
	        tagName: 'tr',
	        className: 'gigs-empty'
	    });
	}
);