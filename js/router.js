var Backbone = require('backbone');
var login = require('./templates/login.html');
var main = require('./templates/main.html');
var match = require('./templates/match.html');
var profile = require('./templates/profile.html')
var createMatch = require('./templates/createMatch.html')


var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "main":"main",
    "match":"match",
    "profile":"profile",
    "createMatch":"createMatch",
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

router.on('route:match', function() {
  var html = match;
  $("#container").html(html);
});

router.on('route:profile', function() {
  var html = profile;
  $("#container").html(html);
});

router.on('route:createMatch', function() {
  var html = createMatch;
  $("#container").html(html);
});

$('body').on('click', 'button', function (e){
  e.preventDefault();
  var href = $(this).attr('href').substr(1);
  router.navigate(href, {trigger:true});
});

$('body').on('click', 'a', function (e){
  e.preventDefault();
  var href = $(this).attr('href').substr(1);
  router.navigate(href, {trigger:true});
});

module.exports = router;