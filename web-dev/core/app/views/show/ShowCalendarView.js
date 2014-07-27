define(['underscore' ,'marionette', 'handlebars', 'App', 'text!templates/show.html', 'collections/Gigs', 
	'views/show/ShowGigView', 'views/calendar/NoGigsView'],
	function (_, Marionette, Handlebars, App, template, Gigs, HomeGigView, NoGigsView) {
	    return Marionette.CompositeView.extend({
	        template: Handlebars.compile($(template).filter('#t-calendar-show').html()),
	        childView: HomeGigView,
	        collection: new Gigs({
	        	filter: 'upcoming'
	        }),
            itemViewContainer: 'tbody',
            tagName: 'table',
            className: 'table table-hover',
            emptyView: NoGigsView,

	        ui: {
	        },

            events: {
            },

            initialize: function(options) {
            	this.options = _.defaults(options, {});
            },

            onShow: function() {
            	this.collection.setShowName(this.options.showName);
            	this.collection.fetch();
            },

	        onRender: function() {
	        },
	    });
	}
);
