define( [ 'App', 'marionette', 'handlebars', 'views/calendar/RecentUpcomingGigsView', 
    'views/show/ShowsListView', "views/guestbook/PicksView", 'text!templates/home.html',
    "handlebars-helpers-my"],
    function( App, Marionette, Handlebars, HomeCalendarView,
        ShowsListView, GuestbookPicksView, template) {
        return Marionette.LayoutView.extend( {
            template: Handlebars.compile(template),

            regions: {
                calendar: '.calendar .table-responsive',
                shows: '.shows .row',
                guestbook: '.guestbook-picks'
            },

            events: {
            },

            initialize: function(options) {
            },

            onRender: function(e) {
                this.renderCalendar();
                this.renderShows();
                this.renderGuestbookPicks();
            },
            
            renderCalendar: function() {
                this.calendar.show(new HomeCalendarView());
            },

            renderShows: function() {
                this.shows.show(new ShowsListView({collection: App.shows}));
            },

            renderGuestbookPicks: function() {
                this.guestbook.show(new GuestbookPicksView());
            }
        });
    });
