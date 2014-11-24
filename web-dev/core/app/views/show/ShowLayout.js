define([ 'marionette', 'handlebars', 'App', 'views/show/ShowCalendarView', 'collections/Gigs',
	'collections/Claims', 'text!templates/show.html', "handlebars-helpers-my"],
	function (Marionette, Handlebars, App, CalendarView, Gigs, Claims, template) {
		return Marionette.LayoutView.extend({
			template: Handlebars.compile(template),

			events: {
				'click .contact-btn': 'onContactBtnClicked'
			},

			regions: {
				calendar: 'section.calendar-show',
				claims: 'section.claims-show'
			},

			onContactBtnClicked: function(e) {
				App.execute('show:contact');
			},

			onShow: function(e) {
				var that = this;
				this.gigs = new Gigs({
					filter: 'some',
					showName: this.model.get('name')
				});

				this.gigs.fetch({
					success: function(collection, response, options) {
						that.onGigsFetched(collection);
					}
				});

				this.claims = new Claims({
					filter: 'featured',
					showName: this.model.get('name')
				});

				this.claims.fetch({
					success: function(collection, response, options) {
						that.onClaimsFetched(collection);
					}
				});
			},

			onGigsFetched: function(gigs) {
				if (gigs.length > 0) {
					this.calendar.show(new CalendarView({
						collection: gigs
					}));
				}
			},

			onClaimsFetched: function(claims) {
			}
		});
	}
);
