var Backbone = require('backbone');

var userContainer = Backbone.Model.exports({
  intitialize: function() {
  },
  defaults: {
    username: null,
    email: null,
    password: null,
    profile: {
        gender: null,
        age: null
 		}
 	},	
  Model: userContainer,
  url: 'https://skill-match.herokuapp.com/api/users/create/'
});

module.exports = userContainer;