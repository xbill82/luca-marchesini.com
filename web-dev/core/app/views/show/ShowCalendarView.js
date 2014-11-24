define(['underscore' ,'marionette', 'handlebars', 'App', 'text!templates/show.html', 'collections/Gigs', 
	'views/show/ShowGigView', 'views/calendar/NoGigsView'],
	function (_, Marionette, Handlebars, App, template, Gigs, HomeGigView, NoGigsView) {
	    return Marionette.CompositeView.extend({
	        template: Handlebars.compile($(template).filter('#t-calendar-show').html()),
	        childView: HomeGigView,
            childViewContainer: 'tbody',
            tagName: 'div',
            emptyView: NoGigsView,

            initialize: function(options) {
            	this.options = _.defaults(options, {});
            },
	    });
	}
);
