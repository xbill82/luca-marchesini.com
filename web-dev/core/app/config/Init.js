require.config({
    baseUrl:"./js/app",
    paths:{
        // Core Libraries
        "jquery":"../../lib/js/jquery/jquery",
        "underscore":"../../lib/js/lodash/lodash.min",
        "lodash":"../../lib/js/lodash/lodash.min",
        "backbone":"../../lib/js/backbone/backbone",
        "backbone.wreqr":"../../lib/js/backbone.wreqr/backbone.wreqr",
        "backbone.babysitter":"../../lib/js/backbone.babysitter/backbone.babysitter",
        "marionette":"../../lib/js/backbone.marionette/backbone.marionette",
        "handlebars":"../../lib/js/handlebars/handlebars",

        // Plugins
        "bootstrap":"../../lib/js/bootstrap/bootstrap.min",
        "bs-button":"../../lib/js/bootstrap/button",
        "bs-collapse":"../../lib/js/bootstrap/collapse",
        "bs-dropdown":"../../lib/js/bootstrap/dropdown",
        "bs-modal":"../../lib/js/bootstrap/modal",
        "bs-transition":"../../lib/js/bootstrap/transition",

        "text":"../../lib/js/text/text",
        "async": '../../lib/js/requirejs-plugins/async',
        "font": '../../lib/js/requirejs-plugins/font',
        "goog": '../../lib/js/requirejs-plugins/goog',
        "image": '../../lib/js/requirejs-plugins/image',
        "json": '../../lib/js/requirejs-plugins/json',
        "noext": '../../lib/js/requirejs-plugins/noext',
        "mdown": '../../lib/js/requirejs-plugins/mdown',
        "propertyParser" : '../../lib/js/requirejs-plugins/propertyParser',
        "lazyloader" : '../../lib/js/jquery.lazyload/jquery.lazyload',
        "moment": "../../lib/js/momentjs/moment.min",
        "moment-fr": "../../lib/js/momentjs/fr",

        // Customizations
        "handlebars-helpers-my": "../lib/handlebars-helpers"
    },

    shim:{
        "bootstrap":["jquery"],
        "bs-button":["jquery"],
        "bs-collapse":["jquery"],
        "bs-dropdown":["jquery"],
        "bs-modal":["jquery"],
        "bs-transition":["jquery"],
        "handlebars":{
            "exports":"Handlebars"
        },
        "lazyloader":["jquery"]
    }
});
