define( [ 'require', 'App', 'marionette', 'handlebars', 'views/calendar/RecentUpcomingGigsView',
    'views/show/ShowsListView', "views/guestbook/PicksView", 'text!./templates/home.html',
    "handlebars-helpers-my", 'controllers/GigsStore', 'Constants'],
    function(require) {

        var Marionette = require('marionette'),
            App = require('App'),
            Handlebars = require('handlebars'),
            HomeCalendarView = require('views/calendar/RecentUpcomingGigsView'),
            ShowsListView = require('views/show/ShowsListView'),
            GuestbookPicksView = require("views/guestbook/PicksView"),
            GigsStore = require('controllers/GigsStore'),
            Constants = require('Constants'),
            template = require('text!./templates/home.html');

        return Marionette.LayoutView.extend( {
            template: Handlebars.compile(template),

            regions: {
                calendar: '.calendar .table-responsive',
                shows: '.shows .row',
                guestbook: '.guestbook-picks'
            },

            onShow: function(e) {
                this.renderCalendar();
                this.renderShows();
                this.renderFeaturedClaims();
            },
            
            renderCalendar: function() {
                var spinner = new Spinner(Constants.SPINNER_TINY).spin();
                $(this.calendar.$el.selector).append(spinner.el);

                var fetchingGigs = App.reqres.request('store:gigs:getRecentUpcoming');
                var that = this;

                $.when(fetchingGigs)
                    .done(function(fetchedGigs) {
                        that.calendar.show(new HomeCalendarView({
                            collection: fetchedGigs
                        }));
                    })
                    .fail(function() {
                        require(['views/calendar/FetchFailView'], function(FetchFail) {
                            that.calendar.show(new FetchFail());
                        });
                    });
            },

            renderShows: function() {
                this.shows.show(new ShowsListView({collection: App.shows}));
            },

            renderFeaturedClaims: function() {
                var spinner = new Spinner(Constants.SPINNER_TINY).spin();
                $(this.guestbook.$el.selector).append(spinner.el);

                var fetchingPicks = App.reqres.request('store:claims:getOneFeatured');
                var that = this;

                $.when(fetchingPicks)
                    .done(function(fetchedPicks) {
                        that.guestbook.show(new GuestbookPicksView({
                            collection: fetchedPicks
                        }));
                    })
                    .fail(function() {
                        console.log('Whoops, unable to fetch homepage featured claim. Please, take a look when you get a sec...');
                    });
            }
        });
    });
