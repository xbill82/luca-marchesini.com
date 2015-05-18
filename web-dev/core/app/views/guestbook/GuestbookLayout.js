define([ 'require', 'marionette', 'handlebars', 'App','./ClaimsView',
	'text!./templates/guestbook.html', 'Constants'],
	function (require) {

		var Marionette = require('marionette'),
            App = require('App'),
            Constants = require('Constants'),
            Handlebars = require('handlebars'),
            ClaimsView = require('./ClaimsView'),
            template = require('text!./templates/guestbook.html');

	    return Marionette.LayoutView.extend({
	        template: Handlebars.compile(template),

	        events: {
	        },

	        regions: {
	        	claims: '.claims',
	        	submit: '#submit-claim'
            },

            onShow: function(e) {
				var spinner = new Spinner(Constants.SPINNER_TINY).spin();
                $(this.claims.$el.selector).append(spinner.el);

                var fetchingClaims = App.reqres.request('store:claims:getAll');
                var that = this;

                $.when(fetchingClaims)
                    .done(function(fetchedClaims) {
                        that.claims.show(new ClaimsView({
                            collection: fetchedClaims
                        }));
                    })
                    .fail(function() {
                        console.log('Whoops, unable to fetch the claims. Please, take a look when you get a sec...');
                    });
            },

            _showNewClaimForm: function(e) {
            }
	    });
	}
);
