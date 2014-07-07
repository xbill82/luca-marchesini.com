define(['jquery', 'underscore', 'backbone','models/Claim'],
  function($, _, Backbone, Claim) {
    'use strict';

    var Collection = Backbone.Collection.extend({
      model: Claim,
      claimFilter: false,
      claimLimit: false,

      url: function() {
        var u = 'API/claims.php';

        if (this.claimFilter)
          u += '?filter=' + this.claimFilter;

        return u;
      },

      initialize: function(options) {
        this.options = _.defaults(options, {});
      },

      setFeatured: function() {
        this.claimFilter = 'featured';
      },

      setOneFeatured: function() {
        this.claimFilter = 'one-featured';
      },

      resetFilter: function() {
        this.claimFilter = false;
      },

      setLimit: function(limit) {
        this.claimLimit = limit;
      },
      
      resetLimit: function() {
        this.claimLimit = false;
      },
    });

    return Collection;
  });
