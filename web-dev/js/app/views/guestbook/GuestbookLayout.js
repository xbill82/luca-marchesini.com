define([ 'marionette', 'handlebars', 'App', 'views/guestbook/ClaimsView', 'views/guestbook/SubmitClaimView', 'text!templates/guestbook.html'],
	function (Marionette, Handlebars, App, ClaimsView, SubmitClaimView, template) {
	    return Marionette.LayoutView.extend({
	        template: Handlebars.compile(template),

	        events: {
	        	// 'click .new-claim-btn': '_showNewClaimForm'
	        },

	        regions: {
	        	claims: '.claims',
	        	submit: '#submit-claim'
            },

            onShow: function(e) {
            	this.claims.show(new ClaimsView());
            	this.submit.show(new SubmitClaimView());
            },

            _showNewClaimForm: function(e) {
            }
	    });
	}
);
