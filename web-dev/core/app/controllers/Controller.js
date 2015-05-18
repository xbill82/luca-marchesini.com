define(['require', 'jquery', 'backbone', 'marionette', 'App',
	'views/NavView',
	'views/FooterView',
	'views/ContactModalView',
	'collections/Shows',
	'controllers/GigsStore',
	'controllers/ClaimsStore'],
	function (require) {

	var $ = require('jquery'),
		Backbone = require('backbone'),
		Marionette = require('marionette'),
        App = require('App'),
        NavView = require('views/NavView'),
        FooterView = require('views/FooterView'),
        ContactModalView = require('views/ContactModalView'),
        Shows = require('collections/Shows'),
        GigsStore = require('controllers/GigsStore'),
        ClaimsStore = require('controllers/ClaimsStore');

	return Backbone.Marionette.Controller.extend({
		deferredElementsLoaded: false,

		initialize: function(options) {
			App.commands.setHandler('show:contact', function(options) {
				App.contactRegion.$el.modal();
				App.execute('trackPageView', 'Contact');
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
			App.loaderRegion.$el.show();
			var that = this;
			require(['views/home/HomeLayout'], 
				function(Home) {
					App.mainRegion.show(new Home(section));
					that.loadDeferredElements();
					$(window).scrollTop(0);
					App.loaderRegion.$el.hide();

					App.execute('trackPageView', 'Home');
				});
		},

		show: function(showName) {
			App.loaderRegion.$el.show();
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
					$(window).scrollTop(0);
					App.loaderRegion.$el.hide();

					App.execute('trackPageView', 'Show / ' + show.get('title'));
				});
		},

		calendar: function() {
			App.loaderRegion.$el.show();
			var that = this;
			require(['views/calendar/CalendarLayout'], 
			function(Calendar) {
				App.mainRegion.show(new Calendar());
				that.loadDeferredElements();
				$(window).scrollTop(0);
				App.loaderRegion.$el.hide();

				App.execute('trackPageView', 'Calendar');
			});
		},
		
		guestbook: function() {
			App.loaderRegion.$el.show();
			var that = this;
			require(['views/guestbook/GuestbookLayout'], 
				function(Guestbook) {
					App.mainRegion.show(new Guestbook());
					that.loadDeferredElements();
					$(window).scrollTop(0);
					App.loaderRegion.$el.hide();

					App.execute('trackPageView', 'Guestbook');
				});
		},

		notFound: function(routeName) {
			App.loaderRegion.$el.show();
			var that = this;
			require(['views/404'], 
				function(View404) {
					App.mainRegion.show(new View404({
						routeName: routeName
					}));
					that.loadDeferredElements();
					App.loaderRegion.$el.hide();

					App.execute('trackPageView', '404');
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

		_onNavLinkClicked: function(e) {}
	});
});
