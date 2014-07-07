define([ 'marionette', 'handlebars', 'App', 'models/Gig', 'text!templates/show.html'],
	function (Marionette, Handlebars, App, Gig, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile($(template).filter("#t-calendar-gig-show").html()),
	        model: new Gig(),
	        tagName: 'tr',
	        
	        events: {
	        	'click':'_onClick'
	        },

	        _onClick: function(e) {
	        	App.execute('show:gig', {model: this.model});
	        }
	    });
	}
);
