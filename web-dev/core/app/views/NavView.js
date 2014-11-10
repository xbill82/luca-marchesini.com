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
                _paq.push(['trackEvent', 'Menu', 'NavLink']);
            	this._hideMenuCollapse();
            },

            _hideMenuCollapse: function() {
                this.$el.find('.navbar-collapse').collapse('hide');
            }
	    });
	}
);
