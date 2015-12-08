var Backbone = require('backbone');
var matchContainer = require('../models/matchModel');

var matchContainers = Backbone.Collection.extend({
  Model:matchContainer
});

var matchCollection = new matchContainer();

matchCollection.fetch ({
  success: function(resp) {
    console.log('success', resp);
  },
  error: function(err) {
    console.log('error', err);
  }
});