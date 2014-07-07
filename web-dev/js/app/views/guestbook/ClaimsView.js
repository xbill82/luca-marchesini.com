define([ 'marionette', 'handlebars', 'App', 'collections/Claims', 'views/guestbook/ClaimView'],
	function (Marionette, Handlebars, App, Claims, ClaimView) {
	    return Marionette.CollectionView.extend({
	        childView: ClaimView,
	        collection: new Claims(),
            tagName: 'div',

	        ui: {
	        },

            events: {
            },

            initialize: function() {
            	
            },

            onShow: function() {
            	this.collection.fetch();
            },

	        onRender: function() {
	        },
	    });
	}
);
