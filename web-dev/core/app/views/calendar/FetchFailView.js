define([ 'marionette', 'handlebars', 'App', 'text!./templates/fetch-fail.html'],
	function (Marionette, Handlebars, App, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile(template),
	        className: 'fetch-fail'
	    });
	}
);