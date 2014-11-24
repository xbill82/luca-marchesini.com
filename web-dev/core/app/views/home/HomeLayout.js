define( [ 'App', 'marionette', 'handlebars', './HomeCalendarView', 
    './HomeShowsView', "./HomeClaimsView", 'text!templates/home.html',
    "handlebars-helpers-my"], //, 'lazyloader'
    function( App, Marionette, Handlebars, HomeCalendarView,
        HomeShowsView, HomeClaimsView, template) {
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
                this.renderGuestbookClaims();
            },
            
            renderCalendar: function() {
                this.calendar.show(new HomeCalendarView());
            },

            renderShows: function() {
                this.shows.show(new HomeShowsView({collection: App.shows}));
            },

            renderGuestbookClaims: function() {
                this.guestbook.show(new HomeClaimsView());
            }
        });
    });
