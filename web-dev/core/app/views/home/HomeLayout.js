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
                this.renderGuestbookPicks();
            },
            
            renderCalendar: function() {
                var spinner = new Spinner(Constants.SPINNER_TINY).spin();
                $(this.calendar.$el.selector).append(spinner.el);

                var fetchingGigs = GigsStore.getRecentUpcomingGigs();
                var that = this;

                $.when(fetchingGigs).done(function(fetchedGigs) {
                    that.calendar.show(new HomeCalendarView({
                        collection: fetchedGigs
                    }));
                });
            },

            renderShows: function() {
                this.shows.show(new ShowsListView({collection: App.shows}));
            },

            renderGuestbookPicks: function() {
                this.guestbook.show(new GuestbookPicksView());
            }
        });
    });
