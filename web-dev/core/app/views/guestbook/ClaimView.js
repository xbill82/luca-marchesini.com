define([ 'marionette', 'handlebars', 'App', 'models/Claim', 'text!./templates/item-claim.html'],
	function (Marionette, Handlebars, App, Claim, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile(template),
	        model: new Claim(),
	        tagName: 'div',
	        className: 'claim'
	    });
	}
);