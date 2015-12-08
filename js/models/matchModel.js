var Backbone = require('backbone');

var matchContainer = Backbone.Model.extend({
  initialize: function() {
  },
  defaults: {
    title: null,
    description: null,
    park: null,
    sport: null,
    skill_level: null,
    date: null,
    time: null
    },
    Model: matchContainer,
    url: 'https://skill-match.herokuapp.com/api/matches/'
  });
 module.exports = matchContainer;