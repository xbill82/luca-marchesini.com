define([ 'marionette', 'handlebars', 'App', 'models/Gig', 'text!./templates/item-gig.html', 'handlebars-helpers-my'],
	function (Marionette, Handlebars, App, Gig, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile(template),
	        model: new Gig(),
	        tagName: 'tr',
	        className: 'gig-list-item',
	        
	        events: {
	        	'click':'_onClick'
	        },

	        _onClick: function(e) {
	        	App.execute('show:gig', {model: this.model});
	        }
	    });
	}
);
