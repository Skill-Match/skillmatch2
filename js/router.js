var Backbone = require('backbone');
var login = require('./templates/login.html');
var main = require('./templates/main.html');
var match = require('./templates/match.html');
var feedback = require('./templates/feedback.html');


var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "feedback":"feedback",
    "match":"match",
    "main":"main",
    "":"index"
  },
  index: function () {
    var html = login;
        $("#container").html(html);
      
  }
});

var router = new Router();

router.on('route:main', function(){
  var html = main;
  $("#container").html(html);
});
router.on('route:match', function(){
  var html = match;
  $("#container").html(html);
});
router.on('route:feedback', function(){
  var html = feedback;
  $("#container").html(html);
});

$('body').on('click', 'button', 'a', function (e){
  e.preventDefault();
  var href = $(this).attr('href').substr(1);
  router.navigate(href, {trigger:true});
});

module.exports = router;