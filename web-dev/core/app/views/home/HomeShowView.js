define([ 'marionette', 'handlebars', 'App', 'models/Show', 'text!templates/home.html', 'lazyloader'],
	function (Marionette, Handlebars, App, Show, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile($(template).filter("#t-show").html()),
	        model: new Show(),
	        tagName: 'div',
	        className: 'show col-lg-4 col-md-4 col-md-offset-0 col-sm-5 col-sm-offset-1 col-xs-12',

	        onRender: function(e) {
	   //      	this.$el.find('img.lazy').lazyload({
				//     effect : "fadeIn"
				// });
	        }
	    });
	}
);
