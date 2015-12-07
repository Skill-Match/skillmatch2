var Backbone = require('backbone');
var login = require('./templates/login.html');


var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "":"index"
  },
  index: function () {
        $("#container").html(login);
      
  }
});

var router = new Router();

$('body').on('click', 'a', function (e){
  e.preventDefault();
  var href = $(this).attr('href').substr(1);
  router.navigate(href, {trigger:true});
});

module.exports = router;