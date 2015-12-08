var Backbone = require('backbone');
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
    "match":"match",
    "login":"login",
    "profile":"profile",
    "createMatch":"createMatch",
    "home/:username":"home",
    "":"index"
  },
  index: function () {
    var html = main;
  $("#container").html(main);
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
        console.log(resp);
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

router.on('route:home', function(){
  var html = home;
  $("#container").html(html);
  var Match = Backbone.Model.extend({
  initialize: function () {
  },
  defaults: {
    title: null,
    description: null,
    park: null,
    sport: null,
    skill_level: null,
    date_time: null,
    players: null
    },
  url: 'https://skill-match.herokuapp.com/api/matches/'
});
  var Matches = Backbone.Collection.extend({
  model: Match,
  url: 'https://skill-match.herokuapp.com/api/matches/'
});
 var MatchCollection = new Matches();
    MatchCollection.fetch({
        success: function(resp) {
          console.log("success: ", resp);
        },error: function (err) {
          console.log("error: ", err);
        }
  });
});

router.on('route:match', function() {
  var html = match;
  $("#container").html(html);
});

router.on('route:profile', function() {
  var html = profile;
  $("#container").html(html);
});

var matchContainer = Backbone.Model.extend({
  initialize: function() {
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

router.on('route:createMatch', function() {
  var html = createMatch;
  $("#container").html(html);
  $("#createMatch").on('click', function() {
  console.log("test");
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
        console.log("testtest");
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