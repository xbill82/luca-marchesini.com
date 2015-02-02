define( [ 'App', 'marionette', 'handlebars', 'views/calendar/OldGigsView', 'views/calendar/UpcomingGigsView',
    'text!./templates/calendar.html', "handlebars-helpers-my"],
function( App, Marionette, Handlebars, OldGigsView, UpcomingGigsView, template) {
    return Marionette.LayoutView.extend( {
        template: Handlebars.compile(template),

        regions: {
            upcoming: '.upcoming',
            old: '.old'
        },

        events: {
        },

        initialize: function(options) {
        },

        onShow:function() {
            this.upcoming.show(new UpcomingGigsView());
            this.old.show(new OldGigsView());
        }
    });
});