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
                _paq.push(['trackEvent', 'Menu', 'Contact']);
            },

            _onLinkClicked: function(event) {
            	App.vent.trigger('navlink:clicked');
                _paq.push(['trackEvent', 'Menu', 'NavLink']);
            	this._hideMenuCollapse();
            },

            _hideMenuCollapse: function() {
            	this.$el.find('.navbar-toggle').click();
            }
	    });
	}
);
