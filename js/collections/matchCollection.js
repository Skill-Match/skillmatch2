var Backbone = require('backbone');
var matchContainer = require('../models/matchModel');

var matchContainers = Backbone.Collection.extend({
  Model: matchContainer
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

$("#setMatch").on('click', function() {
  matchAdd = new matchContainer();
  matchAdd.set({
    title: $("#").val(),
    description: $("#").val(),
    park: $("#").val(),
    sport: $("#").val(),
    skill_level: $("#").val(),
    date_time: $("#").val(),
    players: $("#").val()
  })
  matchAdd.save(null, {
    url: 'https://skill-match.herokuapp.com/api/matches/',
    success: function(resp) {
      console.log("success", resp);
    },
    error: function(err) {
      concole.log("error", err);
    }
  });
      $("#").val("");
      $("#").val("");
      $("#").val("");
      $("#").val("");
      $("#").val("");
      $("#").val("");
})