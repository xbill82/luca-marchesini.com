define(['jquery', 'underscore', 'backbone','models/Claim'],
  function($, _, Backbone, Claim) {
    'use strict';

    var Collection = Backbone.Collection.extend({
      model: Claim,
      filter: false,
      claimLimit: false,

      url: function() {
        var u = 'API/claims.php';
        u += '?' + $.param(this.options);

        return u;
      },

      initialize: function(options) {
        if (_.isUndefined(options)) options = {};
        this.options = _.defaults(options, {});
      },

      setFeatured: function() {
        this.options.filter = 'featured';
      },

      setOneFeatured: function() {
        this.options.filter = 'one-featured';
      },

      resetFilter: function() {
        this.options.filter = false;
      },

      setLimit: function(limit) {
        this.options.claimLimit = limit;
      },
      
      resetLimit: function() {
        this.options.claimLimit = false;
      },
    });

    return Collection;
  });
