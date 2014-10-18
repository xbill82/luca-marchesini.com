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

					_paq.push(['setDocumentTitle', 'Home']);
					_paq.push(['trackPageView']);
				});
		},

		show: function(showName) {
			var that = this;
			 require(['views/show/ShowLayout'], 
				function(Show) {
					var show = App.shows.showsHash[showName];
					App.mainRegion.show(
						new Show(
							{ model: show }
						)
					);
					that.loadDeferredElements();

					_paq.push(['setDocumentTitle', 'Show / ' + show.get('title')]);
					_paq.push(['trackPageView']);
				});
		},

		calendar: function() {
			var that = this;
			require(['views/calendar/CalendarLayout'], 
			function(Calendar) {
				App.mainRegion.show(new Calendar());
				that.loadDeferredElements();

				_paq.push(['setDocumentTitle', 'Calendar']);
				_paq.push(['trackPageView']);
			});
		},
		
		guestbook: function() {
			var that = this;
			require(['views/guestbook/GuestbookLayout'], 
				function(Guestbook) {
					App.mainRegion.show(new Guestbook());
					that.loadDeferredElements();

					_paq.push(['setDocumentTitle', 'Guestbook']);
					_paq.push(['trackPageView']);
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

					_paq.push(['setDocumentTitle', '404']);
					_paq.push(['trackPageView']);
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
