define(['jquery', 'backbone', 'marionette', 'App',
	'views/NavView',
	'views/FooterView',
	'views/ContactModalView',
	'collections/Shows'],
	function ($, Backbone, Marionette, App, NavView, FooterView, ContactModalView, Shows) {
	return Backbone.Marionette.Controller.extend({
		deferredElementsLoaded: false,

		initialize: function(options) {
			App.commands.setHandler('show:contact', function(options) {
				App.contactRegion.$el.modal();
			});

			App.commands.setHandler('show:gig', function(options) {
				var that = this;

				require(['views/calendar/GigDetailsView'], 
				function(Gig) {
					var gigView = new Gig({model:options.model});
					App.gigRegion.show(gigView);
					App.gigRegion.$el.on('shown.bs.modal', function(e){gigView.onModalOpen();});
					App.gigRegion.$el.modal();
				});
			});

			App.commands.setHandler('gig:close', function(options) {
				App.gigRegion.$el.modal('hide');
			});

			App.shows = new Shows();

			App.vent.on('navlink:clicked', this._onNavLinkClicked, this);
		},

		home: function(section) {
			var that = this;
			require(['views/home/HomeLayout'], 
				function(Home) {
					App.mainRegion.show(new Home(section));
					that.loadDeferredElements();
				});
		},

		show: function(showName) {
			var that = this;
			 require(['views/show/ShowLayout'], 
				function(Show) {
					App.mainRegion.show(
						new Show(
							{ model: App.shows.showsHash[showName] }
						)
					);
					that.loadDeferredElements();
				});
		},

		calendar: function() {
			var that = this;
			require(['views/calendar/CalendarLayout'], 
			function(Calendar) {
				App.mainRegion.show(new Calendar());
				that.loadDeferredElements();
			});
		},
		
		guestbook: function() {
			var that = this;
			require(['views/guestbook/GuestbookLayout'], 
				function(Guestbook) {
					App.mainRegion.show(new Guestbook());
					that.loadDeferredElements();
				});
		},

		notFound: function(routeName) {
			var that = this;
			require(['views/404'], 
				function(View404) {
					App.mainRegion.show(new View404({
						routeName: routeName
					}));
					that.loadDeferredElements();
				});
		},

		loadDeferredElements: function() {
			if (this.chromeElementsLoaded)
				return;

			this.chromeElementsLoaded = true;

			App.navRegion.show(new NavView());
			App.footerRegion.show(new FooterView());
			App.contactRegion.show(new ContactModalView());
		},

		_onNavLinkClicked: function(e) {
			$(window).scrollTop(0);
		}
	});
});
