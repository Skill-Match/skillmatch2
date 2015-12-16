var Backbone = require('backbone');
var Mustache = require('mustache');
var Cookie = require('js-cookie');
var BackbonePagination = require('backbone.paginator')
var login = require('./templates/login.html');
var signup = require('./templates/signup.html');
var main = require('./templates/main.html');
var parkList = require('./templates/parkList.html');
var match = require('./templates/match.html');
var updatematch = require('./templates/updatematch.html');
var history = require('./templates/history.html');
var profile = require('./templates/profile.html');
var createMatch = require('./templates/createMatch.html');
var feedback = require('./templates/feedback.html');
var home = require('./templates/home.html');
var matchModel = require('./models/matchModel.js')
var parks = require('./templates/parks.html');

var counter = 1;

var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "feedback/:id":"feedback",
    "match/:id":"match",
    "updatematch/:id":"updatematch",
    "login":"login",
    "signup":"signup",
    "profile/:creator":"profile",
    "createMatch":"createMatch",
    "home/:username":"home",
    "parks":"parks",
    "":"index"
  },
  index: function (username) {
    var Match = Backbone.Model.extend({
  initialize: function () {
  },
  defaults: {
    creator: null,
    creator_name: null,
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
   $("#createMatchButton").on('click', function() {
    router.navigate('/createMatch', {trigger: true});
  });
 },
 error: function(err) {
   console.log("nope")
 }
});

$("#nextPage").on('click', function() {
  window.scrollTo(0, 450);
  counter++;
  var nextMatches = Backbone.PageableCollection.extend({
    model: Match,
    url: 'https://skill-match.herokuapp.com/api/matches/',
    state:{
     firstPage: 1,
     currentPage: counter
   }

  });

  var nextMatch = new nextMatches();
  nextMatch.fetch({
    success: function(resp) {
    console.log("success", resp);
    var html = main({'data': resp.toJSON()[0].results});
    var mainTemplate = $("#mainTemplate").text();
    var mainHTML = Mustache.render(mainTemplate, 'data');
    $("#upComing").html(mainHTML);
    $("#container").html(html);
    },
    error: function(err) {
      console.log("error", err);
    }
  });
});
  $("#previousPage").on('click', function() {
    window.scrollTo(0, 450);
    counter--;
    var previousMatches = BackbonePagination.extend({
      model: Match,
      url: 'https://skill-match.herokuapp.com/api/matches/',
      state: {
        firstPage: 1,
        currentPage: counter
      }
    });
    var previousMatch = new previousMatches();
    previousMatch.fetch({
    success: function(resp) {
    console.log("success", resp);
    var html = main({'data': resp.toJSON()[0].results});
    var mainTemplate = $("#mainTemplate").text();
    var mainHTML = Mustache.render(mainTemplate, 'data');
    $("#upComing").html(mainHTML);
    $("#container").html(html);
    },
    error: function(err) {
      console.log("error", err);
    }
  });
})
  }
});

var router = new Router();
router.on('route:signup', function(){
  var html = signup;
        $("#container").html(html);
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

$(".register").on('click', function() {
   user = new User();
   user.set({
     username: $("#ruser").val(),
     email: $("#remail").val(),
     password:$("#rpass").val(),
     profile:{
     gender: $(".rgen").val(),
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
});

router.on('route:home', function(username){
  console.log(Cookie.get('uid'));
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
    var homeTemplate = $("#homeTemplate").text();
    var homeHTML = Mustache.render(homeTemplate, 'data');
    $("#yourMatches").html(homeHTML);
    $("#container").html(html);
   console.log("success: ",resp);


    var profileContainer = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
      id: null,
      username: null,
      profile: {
        gender: null,
        age: null,
        skill: null,
        sportsmanship: null
      }
    },
    Model: profileContainer,
    url: 'https://skill-match.herokuapp.com/api/users/'+Cookie.get('uid')+'/'
  });
  var Profiles = Backbone.Collection.extend({
    Model: profileContainer,
    url: 'https://skill-match.herokuapp.com/api/users/'+Cookie.get('uid')+'/'
  });
  var userProfile = new Profiles();
  userProfile.fetch({
    success: function(resp) {
      var userhtml =home({'user': resp.toJSON()});
      var userTemplate = $("#userTemplate").text();
      var userHTML = Mustache.render(userTemplate, 'user');
      $("#userprofile").html(userhtml);
      console.log('success', resp.toJSON());

      $('#createMatch').on('click', function(){
          router.navigate('/createMatch', {trigger: true});
        })
    },
    error: function(err) {
      console.log('error', err);
    }
  })
 },
 error: function(err) {
   console.log("nope")
 }
});

});


router.on('route:match', function(id, username) {
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
        $('#homeBtn').on('click', function(){
          router.navigate('/home/' + player, {trigger: true});
        })
        $('#cancel').on('click', function(){
        matchDetail.destroy({
          success: function(resp) {
        console.log("success", resp);
      },
      error: function(err) {
        console.log("error", err);
      }
        })
         })
        var Join = Backbone.Model.extend({
      initialize: function () {
      },
      defaults: {},

      url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/join/'
    });

      var Joins = Backbone.Collection.extend({
      model: Join,
      url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/join/'
    });
      $("#join").on('click', function() {
        console.log(id)
        var join = new Join();
        join.set({id:id})
          join.save(null, {
      success: function(resp) {
        console.log("success", resp);
        router.navigate('/match/' + id, {trigger: true});
      },
      error: function(err) {
        console.log("error", err);
      }
  });
    });
      var Confirm = Backbone.Model.extend({
        defaults: {},
        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/confirm/'
      });

      var Confirms = Backbone.Collection.extend ({
        model: Confirm,
        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/confirm/'
      });
      $("#confirm").on('click', function() {
        var confirm = new Confirm();
        confirm.set({id:id})
        confirm.save(null, {
          success: function(resp) {
            console.log("success", resp);
          },
          error: function(err) {
            console.log("error", err);
          }
        });
      });
      var Decline = Backbone.Model.extend({
        defaults: {},
        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/decline/'
      });
      var Declines = Backbone.Collection.extend({
        model: Decline,
        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/decline/'
      });
      $("#decline").on('click', function(){
        var decline = new Decline();
        decline.set({id:id})
        decline.save(null, {
          success: function(resp) {
            console.log("success", resp);
          },
          error: function(err) {
            console.log("error", err);
          }
        })
      });
      },
      error: function(err) {
        console.log("error", err);
      }
      })

    });

router.on('route:profile', function(creator, username) {
  var profileContainer = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
      id: null,
      username: null,
      profile: {
        gender: null,
        age: null,
        skill: null,
        sportsmanship: null
      }
    },
    Model: profileContainer,
    url: 'https://skill-match.herokuapp.com/api/users/' + creator +'/'
  });
  var Profiles = Backbone.Collection.extend({
    Model: profileContainer,
    url: 'https://skill-match.herokuapp.com/api/users/' + creator +'/'
  });
  var userProfile = new Profiles();
  userProfile.fetch({
    success: function(resp) {
      var html = profile({'data': resp.toJSON()});
      var profileTemplate = $("#profileTemplate").text();
      var profileHTML = Mustache.render(profileTemplate, 'data');
      var username = resp.toJSON()[0].username;
      $("#profileContainer").html(profileHTML);
      $("#container").html(html);
      console.log('success', resp.toJSON());
      var Match = Backbone.Model.extend({
  initialize: function () {
  },
  defaults: {
    description: null,
    park_name: null,
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
      var userMatches = new Match();
  userMatches.fetch({
    success: function(resp) {
      var historyhtml = history({'history': resp.toJSON().results});
      var historyTemplate = $("#historyTemplate").text();
      var historyHTML = Mustache.render(historyTemplate, 'history');
      $("#historyContainer").html(historyhtml);
      console.log('success', resp.toJSON());
      console.log(historyhtml);
    },
    error: function(err) {
      console.log('error', err);
    }
  })
    },
    error: function(err) {
      console.log('error', err);
    }
  })
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
var Matches = Backbone.Collection.extend({
  model: matchContainer,
  url: 'https://skill-match.herokuapp.com/api/matches/'
});

router.on('route:updatematch', function(id){
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
    url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/"
  });
var Matches = Backbone.Collection.extend({
  model: matchContainer,
  url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/"
});
var matchDetail = new matchContainer();
    matchDetail.fetch({
      success: function(resp) {
        var html = updatematch({"data": resp.toJSON()});
        console.log("success", resp);
        var updatematchTemplate = $("#updatematchTemplate").text();
        var updatematchHTML = Mustache.render(updatematchTemplate, 'data');
        $("#updatematch").html(updatematchHTML);
        $("#container").html(html);

  var Park = Backbone.Model.extend({
  initialize: function () {
  },
  defaults: {
    id: null,
    name: null
      },
  url: 'https://skill-match.herokuapp.com/api/parks/'
});
  var Parks = Backbone.Collection.extend({
  model: Park,
  url: 'https://skill-match.herokuapp.com/api/parks/'
});
  var park = new Parks();
    park.fetch({
 success: function(resp) {
    var parks = parkList({'park': resp.toJSON()[0].results});
    var parksTemplate = $("#parksTemplate").text();
    var parksHTML = Mustache.render(parksTemplate, 'park');
    $("#addPark").html(parks);
     },
 error: function(err) {
   console.log("nope")
 }
 })
    $("#updateMatch").on('click', function(e) {
    e.preventDefault();
    matchDetail = new matchContainer();
    matchDetail.set({
    park: $("#addPark").val(),
    description: $("#addDescription").val(),
    sport: $("#addSport").val(),
    skill_level:$("#addSkill").val(),
    date: $("#addDate").val(),
    time: $("#addTime").val()
  });
    matchDetail.fetch({id})
  matchDetail.save(null, {
    url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/",
      success: function(resp) {
        console.log("success", resp);
      },
      error: function(err) {
        console.log("error", err);
      }
  });
      $("#addPark").val("");
      $("#addDescription").val("");
      $("#addSport").val("");
      $("#addSkill").val("");
      $("#addDate").val("");
      $("#addTime").val("");
  });

      },
      error: function(err) {
        console.log("error", err);
      }
        })

})

router.on('route:createMatch', function(id, username) {
  var Park = Backbone.Model.extend({
  initialize: function () {
  },
  defaults: {
    id: null,
    name: null
      },
  url: 'https://skill-match.herokuapp.com/api/parks/'
});
  var Parks = Backbone.Collection.extend({
  model: Park,
  url: 'https://skill-match.herokuapp.com/api/parks/'
});
    var park = new Parks();
    park.fetch({
 success: function(resp) {
    var html = createMatch({'park': resp.toJSON()[0].results});
    var createMatchTemplate = $("#mainTemplate").text();
    var createMatchHTML = Mustache.render(createMatchTemplate, 'park');
    $("#create").html(createMatchHTML);
    $("#container").html(html);

   console.log("success: ",resp)
  $("#createMatch").on('click', function(e) {
    e.preventDefault();
    update = new matchContainer();
    update.set({
    park: $("#addPark").val(),
    description: $("#addDescription").val(),
    sport: $("#addSport").val(),
    skill_level:$("#addSkill").val(),
    date: $("#addDate").val(),
    time: $("#addTime").val()
  });
  update.save(null, {
    url: 'https://skill-match.herokuapp.com/api/matches/',
      success: function(resp) {
        console.log("success", resp);
        var id = resp.toJSON().id;
        router.navigate('/match/' + id, {trigger: true});
      },
      error: function(err) {
        console.log("error", err);
      }
  });
      $("#addPark").val("");
      $("#addDescription").val("");
      $("#addSport").val("");
      $("#addSkill").val("");
      $("#addDate").val("");
      $("#addTime").val("");
  });
 },
 error: function(err) {
   console.log("nope")
 }

});
});

var feedbackContainer = Backbone.Model.extend({
  initialize: function() {
  },
  defaults: {
    skill: null,
    sportsmanship: null,
    punctuality: null,
    availability: null
  },
  Model: feedbackContainer,
  url: 'https://skill-match.herokuapp.com/api/feedbacks/create/'
});

router.on('route:feedback', function(id, username){
  var html = feedback;
  $("#container").html(html);
  $("#submitFeedback").on('click', function() {
    console.log("test");
    var html = feedback;
    feedbackAdd = new feedbackContainer();
    feedbackAdd.set({
      match: id,
      skill: $("#addSkillFeedback").val(),
      sportsmanship: $("#addFunFeedback").val(),
      availability: $("#addCrowdFeedback").val(),
      punctuality: $("#addPunctualityFeedback").val()
    });
    feedbackAdd.save(null, {
      url: 'https://skill-match.herokuapp.com/api/feedbacks/create/',
      success: function(resp) {
        console.log("success", resp);
        router.navigate('/match/' + id, {trigger: true});
      },
      error: function(err) {
        console.log("error", err);
      }
    });
    $("#addSkillFeedback").val("");
    $("#addFunFeedback").val("");
    $("#addCrowdFeedback").val("");
    $("#addPunctualityFeedback").val("");
  });
});

router.on('route:parks', function() {
  var Park = Backbone.Model.extend({
    initialize: function () {
    },
    defaults: {
    id: null,
    name: null
    },
  url: 'https://skill-match.herokuapp.com/api/parks/'
});
  var Parks = Backbone.Collection.extend({
    model: Park,
    url: 'https://skill-match.herokuapp.com/api/parks/'
});
  var park = new Park();
  park.fetch ({
    success: function(resp) {
      var html = parks({'data': resp.toJSON().results});
      var parkTemplate = $("#parkTemplate").text();
      var parkHTML = Mustache.render(parkTemplate, "data");
      $("#parksContainer").html(parkHTML);
      $("#container").html(html);
      console.log("success", resp);
      console.log(parkHTML);
    },
    error: function(err) {
      console.log("error", err);
    }
  });
  $("body").on('click', "#nextPark", function() {
    window.scrollTo(0, 0);
    counter++;
    var nextParks = Backbone.PageableCollection.extend({
      model: Park,
      url: 'https://skill-match.herokuapp.com/api/parks/',
      state: {
        firstPage: 1,
        currentPage: counter
      }
    });
    var nextPark = new nextParks();
    nextPark.fetch({
     success: function(resp) {
      var html = parks({'data': resp.toJSON()[0].results});
      var parkTemplate = $("#parkTemplate").text();
      var parkHTML = Mustache.render(parkTemplate, "data");
      $("#parksContainer").html(parkHTML);
      $("#container").html(html);
      console.log("success", resp);
      console.log(parkHTML);
    },
    error: function(err) {
      console.log("error", err);
    }
    })
  })
    $("body").on('click', "#backPark", function(e) {
      e.preventDefault();
      counter--;
      var nextParks = Backbone.PageableCollection.extend({
        model: Park,
        url: 'https://skill-match.herokuapp.com/api/parks/',
        state: {
          firstPage: 1,
          currentPage: counter
        }
      });
      var nextPark = new nextParks();
      nextPark.fetch({
       success: function(resp) {
        var html = parks({'data': resp.toJSON()[0].results});
        var parkTemplate = $("#parkTemplate").text();
        var parkHTML = Mustache.render(parkTemplate, "data");
        $("#parksContainer").html(parkHTML);
        $("#container").html(html);
        console.log("success", resp);
        console.log(parkHTML);
      },
      error: function(err) {
        console.log("error", err);
      }
    });
  });
});

$('body').on('click', 'a', function (e){
  e.preventDefault();
  var href = $(this).attr('href').substr(1);
  router.navigate(href, {trigger:true});
});

module.exports = router;