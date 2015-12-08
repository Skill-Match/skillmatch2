var Backbone = require('backbone');

var feedbackContainer = Backbone.Model.exports({
  intitialize: function() {
  },
  defaults: {
    skill: null,
    sportsmanship: null,
    availability: null
  }
  Model: feedbackContainer,
  url: 'https://skill-match.herokuapp.com/api/feedbacks/create/'
});

module.exports = feedbackContainer;