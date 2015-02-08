define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars'],
    function ($, Backbone, Marionette, _, Handlebars) {
        var App = new Backbone.Marionette.Application();

        App.addRegions({
            navRegion:"nav",
            headerRegion:"header",
            loaderRegion: "#the-loader",
            mainRegion:"#the-content",
            footerRegion:"footer",
            contactRegion:"#contact-modal",
            gigRegion:"#gig-modal"
        });

        function isMobile() {
            var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
            return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        App.mobile = isMobile();

        App.addInitializer(function (options) {
            Backbone.history.start();
        });

        return App;
    });
