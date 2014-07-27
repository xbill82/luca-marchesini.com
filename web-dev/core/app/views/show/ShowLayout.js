define([ 'marionette', 'handlebars', 'App', 'views/show/ShowCalendarView', 'text!templates/show.html',
	"handlebars-helpers-my"],
	function (Marionette, Handlebars, App, CalendarView, template) {
	    return Marionette.LayoutView.extend({
	        template: Handlebars.compile(template),

	        events: {
	        	'click .contact-btn': 'onContactBtnClicked'
	        },

	        regions: {
                calendar: '.calendar-show .table-responsive'
            },

	        onContactBtnClicked: function(e) {
	        	App.execute('show:contact');
	        },

	        onShow: function(e) {
	        	this.calendar.show(new CalendarView({showName: this.model.get('name')}));
	        }
	    });
	}
);
