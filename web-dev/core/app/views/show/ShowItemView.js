define([ 'marionette', 'handlebars', 'App', 'models/Show', 'text!./templates/show-item.html', 'lazyloader'],
	function (Marionette, Handlebars, App, Show, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile(template),
	        model: new Show(),
	        tagName: 'div',
	        className: 'show col-lg-4 col-md-4 col-md-offset-0 col-sm-5 col-sm-offset-1 col-xs-12',

	        ui: {
				learnMoreBtn: '.learn-more'
	        },

	        onRender: function(e) {
				var that = this;
				this.ui.learnMoreBtn.on('click', function(e) {
					App.execute('trackEvent', 'Home', 'LearnMoreShow');
				});
	        }
	    });
	}
);
