var Backbone = require('backbone');

var matchContainer = Backbone.Model.extend({
  initialize: function() {
  },
    defaults: {
      name: null,
      time: null,
      skill: null,
      park: null,
    },
    Model: matchContainer,
    url: 'https://skill-match.herokuapp.com/api/matches/'
  }
});
 module.exports = matchContainer;