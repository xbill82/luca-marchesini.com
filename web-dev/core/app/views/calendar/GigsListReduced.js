define(['underscore' ,'marionette', 'handlebars', 'App',
	'text!./templates/gigs-list-reduced.html', 'collections/Gigs', 
	'./ItemGigReduced', './NoGigsView'],
	function (_, Marionette, Handlebars, App, template, Gigs, HomeGigView, NoGigsView) {
	    return Marionette.CompositeView.extend({
	        template: Handlebars.compile(template),
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
