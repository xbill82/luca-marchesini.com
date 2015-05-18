define([ 'marionette', 'handlebars', 'App', 'collections/Claims', 'views/guestbook/ClaimView'],
	function (Marionette, Handlebars, App, Claims, ClaimView) {
	    return Marionette.CollectionView.extend({
	        childView: ClaimView,
            tagName: 'div',
	    });
	}
);
