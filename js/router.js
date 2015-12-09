var Backbone = require('backbone');
var Mustache = require('mustache');
var login = require('./templates/login.html');
var main = require('./templates/main.html');
var match = require('./templates/match.html');
var profile = require('./templates/profile.html');
var createMatch = require('./templates/createMatch.html');
var feedback = require('./templates/feedback.html');
var home = require('./templates/home.html');
var matchModel = require('./models/matchModel.js')


var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "feedback":"feedback",
    "match/:id":"match",
    "login":"login",
    "profile":"profile",
    "createMatch":"createMatch",
    "home/:username":"home",
    "":"index"
  },
  index: function () {
    var Match = Backbone.Model.extend({
  initialize: function () {
  },
  defaults: {
    description: null,
    park: null,
    sport: null,
    skill_level: null,
    date: null,
    time: null
      },
  url: 'https://skill-match.herokuapp.com/api/matches/'
});

  var Matches = Backbone.Collection.extend({
  model: Match,
  url: 'https://skill-match.herokuapp.com/api/matches/'
});
    var match = new Match();
    match.fetch({
 success: function(resp) {
    var html = main({'data': resp.toJSON().results});
    var mainTemplate = $("#mainTemplate").text();
    var mainHTML = Mustache.render(mainTemplate, 'data');
    $("#upComing").html(mainHTML);
    $("#container").html(html);
   console.log("success: ",resp)
 },
 error: function(err) {
   console.log("nope")
 }
});

  }
});

var router = new Router();
router.on('route:login', function(){
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
        setToken(resp.token);
        router.navigate('/home/' + username, {trigger: true});
      });
    });
    function setToken(token) {
  var backboneSync = Backbone.sync;
  Backbone.sync = function(method,model,options) {
    options.headers = {
      'Authorization': 'Token ' + token
    };
    backboneSync(method,model,options);
    };
  }
       var User = Backbone.Model.extend({
  initialize: function () {
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
  url: 'https://skill-match.herokuapp.com/api/users/create/'
});

$("#register").on('click', function() {
   user = new User();
   user.set({
     username: $("#ruser").val(),
     email: $("#remail").val(),
     password:$("#rpass").val(),
     profile:{
     gender: $("#rgen").val(),
     age: $("#rage").val()
  }
  })
   var Users = Backbone.Collection.extend({
  model: User,
  url: 'https://skill-match.herokuapp.com/api/users/create/'
});
var UserCollection = new Users();
user.save(null, {
 success: function(resp) {
   console.log("success: ",resp)
   console.log("New user added.");
 },
 error: function(err) {
   console.log("nope")
 }
});
 });
});

router.on('route:home', function(username){
  var Match = Backbone.Model.extend({
  initialize: function () {
  },
  defaults: {
    description: null,
    park: null,
    sport: null,
    skill_level: null,
    date: null,
    time: null
      },
  url: 'http://skill-match.herokuapp.com/api/matches/?username=' + username
});
  var Matches = Backbone.Collection.extend({
  model: Match,
  url: 'http://skill-match.herokuapp.com/api/matches/?username=' + username
});
    var match = new Match();
    match.fetch({
 success: function(resp) {
    var html = home({'data': resp.toJSON().results});
    var homeTemplate = $("#mainTemplate").text();
    var homeHTML = Mustache.render(homeTemplate, 'data');
    $("#yourMatches").html(homeHTML);
    $("#container").html(html);
   console.log("success: ",resp)
 },
 error: function(err) {
   console.log("nope")
 }
});

});


router.on('route:match', function(id) {
    var matchDetail = new matchContainer();
    matchDetail.fetch({
      url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/",
      success: function(resp) {
        var html = match({"data": resp.toJSON()});
        console.log("success", resp);
        var matchTemplate = $("#matchTemplate").text();
        var matchHTML = Mustache.render(matchTemplate, 'data');
        $("#matchDetailContainer").html(matchHTML);
        $("#container").html(html);
      },
      error: function(err) {
        console.log("error", err);
      }
      })
    });

router.on('route:profile', function() {
  var html = profile;
  $("#container").html(html);
  $("#goToFeedback").on('click', function() {
    router.navigate('/feedback', {trigger: true});
  })
});

var matchContainer = Backbone.Model.extend({
  initialize: function() {
    var park = $('option')
  },
  defaults: {
    park: null,
    sport: null,
    skill_level: null,
    date: null,
    time: null
    },
    Model: matchContainer,
    url: 'https://skill-match.herokuapp.com/api/matches/'
  });

router.on('route:createMatch', function(id) {
  var html = createMatch;
  $("#container").html(html);
  $("#createMatch").on('click', function(e) {
    e.preventDefault();
    matchAdd = new matchContainer();
    matchAdd.set({
    park: $("#addPark").val(),
    sport: $("#addSport").val(),
    skill_level:$("#addSkill").val(),
    date: $("#addDate").val(),
    time: $("#addTime").val()
  });
  matchAdd.save(null, {
    url: 'https://skill-match.herokuapp.com/api/matches/',
      success: function(resp) {
        console.log("success", resp);
        var id = resp.toJSON().id;
        console.log(id);
        router.navigate('/match/' + id, {trigger: true});
      },
      error: function(err) {
        console.log("error", err);
      }
  });
      $("#addPark").val("");
      $("#addSport").val("");
      $("#addSkill").val("");
      $("#addDate").val("");
      $("#addTime").val("");
  });
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