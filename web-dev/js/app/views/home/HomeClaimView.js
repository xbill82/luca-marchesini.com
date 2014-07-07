define([ 'marionette', 'handlebars', 'App', 'models/Claim', 'text!templates/home.html',],
	function (Marionette, Handlebars, App, Claim, template) {
	    return Marionette.ItemView.extend({
	        template: Handlebars.compile($(template).filter("#t-claim").html()),
	        model: new Claim(),
	        tagName: 'div',
			className: 'claim'
	    });
	}
);
