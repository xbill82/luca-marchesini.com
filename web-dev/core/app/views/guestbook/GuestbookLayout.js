define([ 'marionette', 'handlebars', 'App','./ClaimsView',
	'text!./templates/guestbook.html'],
	function (Marionette, Handlebars, App, ClaimsView, template) {
	    return Marionette.LayoutView.extend({
	        template: Handlebars.compile(template),

	        events: {
	        },

	        regions: {
	        	claims: '.claims',
	        	submit: '#submit-claim'
            },

            onShow: function(e) {
            	this.claims.show(new ClaimsView());
            },

            _showNewClaimForm: function(e) {
            }
	    });
	}
);
