define([ 'marionette', 'handlebars', 'App', 'text!templates/nav.html'],
	function (Marionette, Handlebars, App, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile(template),

	        ui: {
	        	'contact': '#contact-btn'
	        },

            events: {
                "click #contact-btn": "_showContactModal",
                "click .navlink": "_onLinkClicked"
            },

	        onRender: function() {
	        },

            _showContactModal: function(event) {
                App.execute('show:contact');
                this._hideMenuCollapse();
            },

            _onLinkClicked: function(event) {
                App.execute('trackEvent', 'Menu', 'NavLink');
            	this._hideMenuCollapse();
            },

            _hideMenuCollapse: function() {
                this.$el.find('.navbar-collapse').collapse('hide');
            }
	    });
	}
);
