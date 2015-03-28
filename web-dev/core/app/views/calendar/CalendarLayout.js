define(['require', 'App', 'marionette', 'handlebars', 'views/calendar/OldGigsView',
    'views/calendar/UpcomingGigsView', 'text!./templates/calendar.html', 'Constants',
    'controllers/GigsStore', "handlebars-helpers-my"],
function(require) {

    var Marionette = require('marionette'),
        App = require('App'),
        Handlebars = require('handlebars'),
        Constants = require('Constants'),
        GigsStore = require('controllers/GigsStore'),
        OldGigsView = require('views/calendar/OldGigsView'),
        UpcomingGigsView = require('views/calendar/UpcomingGigsView'),
        template = require('text!./templates/calendar.html');

    return Marionette.LayoutView.extend( {
        template: Handlebars.compile(template),

        regions: {
            upcoming: '.upcoming',
            old: '.old'
        },

        onShow:function() {
            this.showUpcoming();
            this.showOld();
        },

        showUpcoming: function() {
            var spinner = new Spinner(Constants.SPINNER_TINY).spin();
            $(this.upcoming.$el.selector).append(spinner.el);

            var fetchingGigs = App.reqres.request('store:gigs:getUpcoming');
            var that = this;

            $.when(fetchingGigs)
                .done(function(fetchedGigs) {
                    that.upcoming.show(new UpcomingGigsView({
                        collection: fetchedGigs
                    }));
                })
                .fail(function() {
                    require(['views/calendar/FetchFailView'], function(FetchFail) {
                        that.upcoming.show(new FetchFail());
                    });
                });
        },

        showOld: function() {
            var spinner = new Spinner(Constants.SPINNER_TINY).spin();
            $(this.old.$el.selector).append(spinner.el);

            var fetchingGigs =  App.reqres.request('store:gigs:getOld');
            var that = this;

            $.when(fetchingGigs)
                .done(function(fetchedGigs) {
                    that.old.show(new OldGigsView({
                        collection: fetchedGigs
                    }));
                })
                .fail(function() {
                    require(['views/calendar/FetchFailView'], function(FetchFail) {
                        that.old.show(new FetchFail());
                    });
                });
        },
    });
});