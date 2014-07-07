define([ 'marionette', 'handlebars', 'App'],
	function (Marionette, Handlebars, App) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile($("#t-nav").html()),

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
            	App.vent.trigger('navlink:clicked');
            	this._hideMenuCollapse();
            },

            _hideMenuCollapse: function() {
            	this.$el.find('.navbar-toggle').click();
            }
	    });
	}
);
