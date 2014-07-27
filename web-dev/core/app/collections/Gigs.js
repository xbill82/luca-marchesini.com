define(['jquery', 'underscore','backbone','models/Gig'],
  function($, _, Backbone, Gig) {
    'use strict';

    var Collection = Backbone.Collection.extend({
      model: Gig,
      options: {},

      url: function() {
        var u = 'API/gigs.php';

        u += '?' + $.param(this.options);

        return u;
      },

      initialize: function(options) {
        if (_.isUndefined(options)) options = {};
        this.options = _.defaults(options, {});
      },

      setUpcoming: function() {
        this.options.filter = 'upcoming';
      },

      setOld: function() {
        this.options.filter = 'old';
      },

      resetFilter: function() {
        this.options.filter = null;
      },

      setLimit: function(limit) {
        this.options.limit = limit;
      },
      
      resetLimit: function() {
        this.options.limit = null;
      },

      setShowName: function(name) {
        this.options.showName = name;
      },

      resetShowName: function() {
        this.options.showName = null;
      }
      
    });

    return Collection;
  });
