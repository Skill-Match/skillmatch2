var Backbone = require('backbone');
var login = require('./templates/login.html');
var main = require('./templates/main.html');
var match = require('./templates/match.html');
var profile = require('./templates/profile.html');
var createMatch = require('./templates/createMatch.html');
var feedback = require('./templates/feedback.html');


var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "feedback":"feedback",
    "match":"match",
    "main/:username":"main",
    "profile":"profile",
    "createMatch":"createMatch",
    "":"index"
  },
  index: function () {
    var html = login;
        $("#container").html(html);
        $('#loginSubmit').on('click', function(){
        var username = $("#username").val();
        var password = $("#password").val();
        $.ajax({
      url:"https://skill-match.herokuapp.com/api/api-token-auth/",
      method:'POST',
      data: {username: username, password:password}
    }).then(function(resp){
      console.log(resp);
      setToken(resp.token);
      router.navigate('/main/'+username, {trigger: true});
    });
    function setToken(token) {
  var backboneSync = Backbone.sync;
  Backbone.sync = function(method,model,options) {
    options.headers = {
      'Authorization': 'Token' + token
    };
    backboneSync(method,model,options);
    };
  }
     });
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

router.on('route:feedback', function(){
  var html = feedback;
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