define([ 'marionette', 'handlebars', 'App', 'views/calendar/GigsListReduced', 'views/guestbook/PicksView',
	'collections/Gigs', 'collections/Claims', 'text!./templates/show.html', "handlebars-helpers-my"],
	function (Marionette, Handlebars, App, CalendarView, ClaimsView, Gigs, Claims, template) {
		return Marionette.LayoutView.extend({
			template: Handlebars.compile(template),

			events: {
				'click .contact-btn': 'onContactBtnClicked'
			},

			regions: {
				calendar: 'section.calendar-show',
				guestbook: 'section.claims-show'
			},

			onContactBtnClicked: function(e) {
				App.execute('show:contact');
			},

			onShow: function(e) {
				var that = this;
				var gigs = new Gigs({
					filter: 'some',
					showName: this.model.get('name')
				});

				gigs.fetch({
					success: function(collection, response, options) {
						that.onGigsFetched(collection);
					}
				});

				var claims = new Claims({
					filter: 'featured',
					showName: this.model.get('name')
				});

				claims.fetch({
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
				if (claims.length > 0) {
					this.guestbook.show(new ClaimsView({
						collection: claims
					}));
				}
			}
		});
	}
);
