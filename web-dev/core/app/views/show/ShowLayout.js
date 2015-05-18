define([ 'require', 'marionette', 'handlebars', 'App', 'views/calendar/GigsListReduced', 'views/guestbook/PicksView',
	'text!./templates/show.html', "handlebars-helpers-my", 'Constants'],
	function (require) {

		var Marionette = require('marionette'),
            App = require('App'),
            Handlebars = require('handlebars'),
            CalendarView = require('views/calendar/GigsListReduced'),
            Constants = require('Constants'),
            ClaimsView = require('views/guestbook/PicksView'),
            template = require('text!./templates/show.html');

		return Marionette.LayoutView.extend({
			template: Handlebars.compile(template),

			events: {
				'click .contact-btn': 'onContactBtnClicked'
			},

			regions: {
				calendar: 'section.calendar-show',
				guestbook: 'section.claims-show'
			},

			onContactBtnClicked: function(e) {
				App.execute('show:contact');
			},

			onShow: function(e) {
				this.renderCalendar();
				this.renderFeaturedClaims();
			},

			renderCalendar: function() {
                var spinner = new Spinner(Constants.SPINNER_TINY).spin();
                $(this.calendar.$el.selector).append(spinner.el);

                var fetchingGigs = App.reqres.request('store:gigs:getRecentUpcoming');
                var that = this;

                $.when(fetchingGigs)
                    .done(function(fetchedGigs) {
                        that.calendar.show(new CalendarView({
                            collection: fetchedGigs
                        }));
                    })
                    .fail(function() {
                        require(['views/calendar/FetchFailView'], function(FetchFail) {
                            that.calendar.show(new FetchFail());
                        });
                    });
            },

            renderFeaturedClaims: function() {
                var spinner = new Spinner(Constants.SPINNER_TINY).spin();
                $(this.guestbook.$el.selector).append(spinner.el);

                var fetchingClaims = App.reqres.request('store:claims:getFeaturedForShow', this.model.get('name'));
                var that = this;

                $.when(fetchingClaims)
                    .done(function(fetchedClaims) {
                        that.guestbook.show(new ClaimsView({
                            collection: fetchedClaims
                        }));
                    })
                    .fail(function() {
                        console.log('Whoops, unable to fetch featured claim. Please, take a look when you get a sec...');
                    });
            }
		});
	}
);
