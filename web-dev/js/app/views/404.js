define([ 'marionette', 'handlebars', 'App', 'text!templates/404.html'],
function (Marionette, Handlebars, App, template) {
	return Marionette.ItemView.extend({
		template: Handlebars.compile(template),
		className: "error-404",

		initialize: function(options) {
			if (options.routeName)
				this.model = new Backbone.Model({
					routeName: options.routeName
				});
		},
	});
});