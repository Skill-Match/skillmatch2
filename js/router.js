////////////////////////////////////////////////////////////
// Requiring in all JS libraries
// Requiring in all templates
// Setting global variables
var Backbone = require('backbone');
var Mustache = require('mustache');
var Cookie = require('js-cookie');
var BackbonePagination = require('backbone.paginator')
var login = require('./templates/login.html');
var signup = require('./templates/signup.html');
var main = require('./templates/main.html');
var matchPage = require('./templates/match.html');
var updatematch = require('./templates/updatematch.html');
var userUpdate = require('./templates/userUpdate.html');
var history = require('./templates/history.html');
var profile = require('./templates/profile.html');
var createMatch = require('./templates/createMatch.html');
var feedback = require('./templates/feedback.html');
var home = require('./templates/home.html');
var parks = require('./templates/parks.html');
var parksDetail = require('./templates/parksDetail.html');
var parkCreateMatch = require('./templates/parkCreateMatch.html');
var parkCreatePage = require('./templates/parkCreatePage.html');
var counter = 1;
var jQuery = require("jquery");
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// Creating routers for navigation
var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "feedback/:id":"feedback",
    "match/:id":"match",
    "updatematch/:id":"updatematch",
    "signup":"signup",
    "userUpdate/:id":"userUpdate",
    "profile/:creator":"profile",
    "createMatch":"createMatch",
    "challenge/:id":"challenge",
    "home/:username":"home",
    "parks":"parks",
    "parkCreateMatch/:id":"parkCreateMatch",
    "parkCreatePage/:id":"parkCreatePage",
    "parksDetail/:id":"parksDetail",
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

  // Using Backbone fetch to GET the up coming matches
  var Matches = Backbone.Collection.extend({
    model: Match,
    url: 'https://skill-match.herokuapp.com/api/matches/'
  });

  $('#loginSubmit').on('click', function(e){
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
    var homeBtn = document.createElement('a');
    var link = document.createTextNode("Hello, " + username);
    homeBtn.appendChild(link);
    $.ajax({
      url:"https://skill-match.herokuapp.com/api/api-token-auth/",
      method:'POST',
      data: {username: username, password:password}
    }).then(function(resp){
      setToken(resp.token);
      console.log(resp);
      var user_id = resp.user_id;
      var user = resp.username;
      var token = resp.token;
      Cookie.set('token', token);
      Cookie.set('uid', user_id);
      Cookie.set('userName', user);
      $('#nav').html(homeBtn);
      $('#nav').append('<a id="logout"> (Logout) </a>');
      homeBtn.setAttribute('href', '/home/'+username);
      if (document.URL == 'http://localhost:8080/') {
      router.navigate('/home/' + username , {trigger:true})
      };
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

  function geoFindMe() {
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log('latitude '+latitude);
      console.log('longitude '+longitude);
      var match = new Match();
      match.fetch({
        url: 'https://skill-match.herokuapp.com/api/matches/?lat='+ latitude + '&long=' + longitude,
        success: function(resp) {
          var html = main({'data': resp.toJSON().results});
          var mainTemplate = $("#mainTemplate").text();
          var mainHTML = Mustache.render(mainTemplate, 'data');
          var next = resp.toJSON().next;
          var previous = resp.toJSON().previous;
          $("#upComing").html(mainHTML);
          $("#container").html(html);
          console.log("success: ",resp)
          $("#sport").on('change', function() {
            filterSport();
          });
          $('#next').on('click', function(){
            nextPage(next)
            window.scrollTo(0, 450);
          });
          $('#prev').on('click', function(){
            prevPage(prev)
            window.scrollTo(0, 450);
          });
          $("#createMatchButton").on('click', function() {
            router.navigate('/parks', {trigger: true});
          });
          $("#area").on('click', function() {
            geoFindMe();
          });
          $("#submitArea").on('click', function() {
            matchesAround();
          });
        },
        error: function(err) {
          console.log("nope")
        }
      });
    };
  function error() {
  };
  $('#areaInput').val("Locating…");
    navigator.geolocation.getCurrentPosition(success, error);
  }


  function matchesAround() {
    var match = new Match();
    match.fetch({
      url: 'http://skill-match.herokuapp.com/api/matches/?zip='+$('#areaInput').val(),
      success: function(resp) {
        var html = main({'data': resp.toJSON().results});
        var mainTemplate = $("#mainTemplate").text();
        var mainHTML = Mustache.render(mainTemplate, 'data');
        var next = resp.toJSON().next;
        var previous = resp.toJSON().previous;
        $("#upComing").html(mainHTML);
        $("#container").html(html);
        console.log("success: ",resp)
        $("#sport").on('change', function() {
          filterSport();
        });
        $('#next').on('click', function(){
          nextPage(next)
          window.scrollTo(0, 450);
        });
        $('#prev').on('click', function(){
          prevPage(prev)
          window.scrollTo(0, 450);
        });
        $("#createMatchButton").on('click', function() {
          router.navigate('/parks', {trigger: true});
        });
        $("#area").on('click', function() {
          geoFindMe();
        });
        $("#submitArea").on('click', function() {
          matchesAround();
        });
      },
      error: function(err) {
        console.log("nope")
      }
    });
    $('#areaInput').val("Locating…");
  };

  function filterSport() {
    var match = counter++
    var match = new Match();
    match.fetch({
      url: "http://skill-match.herokuapp.com/api/matches/?sport=" + $("#sport").val(),
        success: function(resp) {
          var html = main({'data': resp.toJSON().results});
          var mainTemplate = $("#mainTemplate").text();
          var mainHTML = Mustache.render(mainTemplate, 'data');
          var next = resp.toJSON().next;
          var previous = resp.toJSON().previous;
          $("#upComing").html(mainHTML);
          $("#container").html(html);
          $("#sport").on('change', function() {
            filterSport();
          });
          $('#next').on('click', function(){
            nextPage(next)
          });
          $('#prev').on('click', function(){
            prevPage(previous)
          });
          $("#createMatchButton").on('click', function() {
            router.navigate('/parks', {trigger: true});
          });
          $("#area").on('click', function() {
            geoFindMe();
          });
          $("#submitArea").on('click', function() {
            matchesAround();
          });
        },
        error: function(err) {
          console.log("nope")
        }
    });
  }

  function nextPage(next){
    var nextPages = new Match();
    nextPages.fetch({
      url: next,
      success: function(resp) {
        var html = main({'data': resp.toJSON().results});
        var mainTemplate = $("#mainTemplate").text();
        var mainHTML = Mustache.render(mainTemplate, 'data');
        var next = resp.toJSON().next;
        var previous = resp.toJSON().previous;
        console.log(next);
        console.log(previous);
        $("#upComing").html(mainHTML);
        $("#container").html(html);
        console.log("success: ",resp)
        $("#sport").on('change', function() {
          filterSport();
        });
        $('#prev').on('click', function(){
          prevPage(previous)
          window.scrollTo(0, 450);
        });
        $("#createMatchButton").on('click', function() {
          router.navigate('/parks', {trigger: true});
        });
        $("#area").on('click', function() {
          geoFindMe();
        });
        $("#submitArea").on('click', function() {
          matchesAround();
        });
      },
      error: function(err) {
        console.log("nope")
      }
    });
  }

  function prevPage(previous){
    var prevPages = new Match();
    prevPages.fetch({
      url: previous,
      success: function(resp) {
        var html = main({'data': resp.toJSON().results});
        var mainTemplate = $("#mainTemplate").text();
        var mainHTML = Mustache.render(mainTemplate, 'data');
        var next = resp.toJSON().next;
        var previous = resp.toJSON().previous;
        console.log(next);
        console.log(previous);
        $("#upComing").html(mainHTML);
        $("#container").html(html);
        console.log("success: ",resp)
        $("#sport").on('change', function() {
          filterSport();
        });
        $('#next').on('click', function(){
          nextPage(next)
          window.scrollTo(0, 450);
        });
        $('#prev').on('click', function(){
          prevPage(previous)
          window.scrollTo(0, 450);
        });
        $("#createMatchButton").on('click', function() {
          router.navigate('/parks', {trigger: true});
        });
        $("#area").on('click', function() {
          geoFindMe();
        });
        $("#submitArea").on('click', function() {
          matchesAround();
        })
      },
      error: function(err) {
        console.log("nope")
      }
    });
  }

    var match = new Match();
    match.fetch({
      success: function(resp) {
        var html = main({'data': resp.toJSON().results});
        var mainTemplate = $("#mainTemplate").text();
        var mainHTML = Mustache.render(mainTemplate, 'data');
        var next = resp.toJSON().next;
        var previous = resp.toJSON().previous;
        $("#upComing").html(mainHTML);
        $("#container").html(html);
        console.log("success: ",resp)
        $("#sport").on('change', function() {
          filterSport();
        });
        $('#next').on('click', function(){
          nextPage(next)
          window.scrollTo(0, 450);
        });
        $('#prev').on('click', function(){
          prevPage(prev)
          window.scrollTo(0, 450);
        });
        $("#createMatchButton").on('click', function() {
          router.navigate('/parks', {trigger: true});
        });
        $("#area").on('click', function() {
          geoFindMe();
        });
        $("#submitArea").on('click', function() {
          matchesAround();
        });
      },
      error: function(err) {
        console.log("nope")
      }
    });
  }
});
// End of backbone fetch for upcoming games
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// Creating the router for the sign up
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
        age: null,
        phone_number: null,
        wants_texts: false
      }
    },
    url: 'https://skill-match.herokuapp.com/api/users/create/'
  });
  $('#rtxt').prop('checked', true);
  $(".register").on('click', function(e) {
    e.preventDefault();
    user = new User();
    user.set({
      username: $("#ruser").val(),
      email: $("#remail").val(),
      password:$("#rpass").val(),
      profile: {
      gender: $(".rgen").val(),
      age: $("#rage").val(),
      phone_number: $("#rnumber").val(),
      wants_texts: $("#rtxt").is(':checked')
    }
  });
  var Users = Backbone.Collection.extend({
    model: User,
    url: 'https://skill-match.herokuapp.com/api/users/create/'
  });
  var UserCollection = new Users();
  if ($("#rpass").val() === ($("#rerpass").val())) {
    user.save(null, {
      success: function(resp) {
        console.log("success: ",resp)
        console.log("New user added.");
        router.navigate("/?home=home", {trigger: true})
      },
      error: function(err) {
        console.log("nope")
      }
    });
  } else {
      alert("Sorry, you entered the wrong password. Please try again.");
      router.navigate("/signup", {trigger: true});
    }
  });
});
// End of the sign up router
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// Creating the router for the home page
router.on('route:home', function(username, id) {
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
        $("#logout").on('click', function() {
          Cookie.remove('token');
          Cookie.remove('userName');
          Cookie.remove('uid');
          router.navigate('/?home=home');
          location.reload();
        });
        $('#createMatch').on('click', function(){
          function success(position) {
            var latitude  = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log('latitude '+latitude);
            console.log('longitude '+longitude);
          }
          router.navigate('/parks', {trigger: true});
          })
        },
        error: function(err) {
          console.log('error', err);
        }
      });
    },
    error: function(err) {
      console.log("nope");
    }
  });
});
// End of home router
////////////////////////////////////////////////////////////
router.on('route:userUpdate', function(id){
  var profileContainer = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
      id: null,
      username: null,
      password: null,
      profile: {
        gender: null,
        age: null,
        phone_number: null,
        wants_texts: null
      }
    },
    Model: profileContainer,
    url: 'https://skill-match.herokuapp.com/api/users/'+id+'/'
  });
  var Profiles = Backbone.Collection.extend({
    Model: profileContainer,
    url: 'https://skill-match.herokuapp.com/api/users/'+id+'/'
  });
  var userProfile = new Profiles(id);
    userProfile.fetch({
      success: function(resp) {
      var html = userUpdate({'update': resp.toJSON()});
      var updateTemplate = $("#updateTemplate").text();
      var updateHTML = Mustache.render(updateTemplate, 'update');
      $("#updatePage").html(updateHTML);
      $("#container").html(html);
      console.log('success', resp.toJSON());
      $('#rtxt').prop('checked', true)
      $(".register").on('click', function(e) {
        e.preventDefault();
        userProfile = new profileContainer({id:id});
        userProfile.set({
          username: $("#ruser").val(),
          email: $("#remail").val(),
          password:$("#rpass").val(),
          profile: {
            gender: $(".rgen").val(),
            age: $("#rage").val(),
            phone_number: $("#rnumber").val(),
            wants_texts: $("#rtxt").is(':checked')
          }
        });
        userProfile.save(null, {
          url: 'https://skill-match.herokuapp.com/api/users/'+id+'/',
          success: function(resp) {
            console.log("success", resp);
          },
          error: function(err) {
          console.log("error", err);
          }
        });
      });
    },
    error: function(err) {
      console.log("error", err);
    }
  });
});
// End of userUpdate router
//////////////////////////////////////////////////////////////////////////////////////
// Player Profile page
router.on('route:profile', function(creator, username) {
  if(Cookie.get('uid')==creator) {
    router.navigate('/home/' + Cookie.get('userName'), {trigger: true})
  }
  var profileContainer = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
      id: null,
      username: null,
      profile: {
        gender: null,
        age: null,
        sportsmanship: null
      },
      skill_set: {
        sport: null,
        skill: null,
        num_feedbacks: null
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
      var id = resp.toJSON()[0].id;
      var username = resp.toJSON()[0].username;
      $("#profileContainer").html(profileHTML);
      $("#container").html(html);
      console.log('success', resp.toJSON());
      $('#challenge').on('click', function(){
        router.navigate('/challenge/' + id, {trigger: true});
      });
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
        },
        error: function(err) {
          console.log('error', err);
        }
      });
    },
    error: function(err) {
      console.log('error', err);
    }
  });
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

//////////////////////////////////////////////////////////////////////////////////////
// Match Detail Page

router.on('route:match', function(id, username) {
    var matchDetail = new matchContainer();
    matchDetail.fetch({
      url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/",
      success: function(resp) {
        var park = resp.toJSON().park_name;
        var creator = resp.toJSON().creator;
        var confirm = resp.toJSON().is_confirmed;
        var completed = resp.toJSON().is_completed;
        var open = resp.toJSON().is_open;
        var html = matchPage({"data": resp.toJSON()});
        console.log("success", resp);
        var matchTemplate = $("#matchTemplate").text();
        var matchHTML = Mustache.render(matchTemplate, 'data');
        $("#matchDetailContainer").html(matchHTML);
        $("#container").html(html);
        $("#confirm").hide();
        $("#decline").hide();
        $("#update").hide();
        $("#cancel").hide();
        $("#leaveMatch").hide();
        if (Cookie.get('uid') == creator) {
          $("#join").hide();
          $("#update").show();
          $("#cancel").show();
        }
        if(open == true) {
          $("#update").show();
          $("#cancel").show();
        }
        if(confirm == true){
          $("#leaveMatch").show();
        }
         if(completed == true){
          $("#confirm").hide();
          $("#decline").hide();
          $("#leaveMatch").hide();
        }
        if(open == false){
          $("#join").hide();
        }
        if(Cookie.get('uid') !== creator) {
          $("#confirm").hide();
          $("#decline").hide();
          $("#update").hide();
          $("#cancel").hide();
          $("#leaveMatch").show();
        }
        $('#homeBtn').on('click', function(){
          router.navigate('/home/' + player, {trigger: true});
        })
        $('#cancel').on('click', function(){
          var matchDetail = new matchContainer({id:id});
          matchDetail.destroy({
            url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/",
            success: function(resp){
              console.log("success", resp);
            },
            error : function() {
                console.log("error")
            }
          });
        });
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
          var join = new Join();
          join.set({id:id})
          join.save(null, {
            success: function(resp) {
              console.log("success", resp);
              router.navigate('/home/' + Cookie.get('userName'), {trigger: true});
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
      var LeaveMatch = Backbone.Model.extend({
        defaults: {},
        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/leave/'
      });
      var LeaveMatches = Backbone.Collection.extend({
        model: LeaveMatch,
        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/leave/'
      });
      $("#leaveMatch").on('click', function() {
        var leaveMatch = new LeaveMatch();
        leaveMatch.set({id: id})
        leaveMatch.save(null, {
          success: function(resp) {
            console.log('success', resp);
          },
          error: function(err) {
            console.log('error', err);
          }
        })
      })
    },
    error: function(err) {
      console.log("error", err);
    }
  })
});
// End of match page
//////////////////////////////////////////////////////////////////////////////////////
// Match Creation Page
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
// End of create match
//////////////////////////////////////////////////////////////////////////////////////

router.on('route:parkCreateMatch', function(id, name) {
  var ParkMatch = Backbone.Model.extend({
    initialize: function () {
    },
    defaults: {
      id: null,
      name: null
    },
    url: 'https://skill-match.herokuapp.com/api/parks/'+id+"/"
  });
  var ParkMatches = Backbone.Collection.extend({
    model: ParkMatch,
    url: 'https://skill-match.herokuapp.com/api/parks/'+id+"/"
  });
  var parkMatch = new ParkMatch();
  parkMatch.fetch({
    success: function(resp) {
      var html = parkCreateMatch({'park': resp.toJSON()});
      var createParkTemplate = $("#createParkTemplate").text();
      var createParkHTML = Mustache.render(createParkTemplate, 'park');
      $("#parkMatchPage").html(createParkHTML);
      $("#container").html(html);
      console.log(html);
      $('#skillInfo').hover(function(){
      $('#hiddenMessage').toggleClass();
    });
    console.log('success',resp);
    $("#createParkMatches").on('click', function(e) {
      e.preventDefault();
      match = new matchContainer();
      match.set({
        park: $("#addParkCreate").val(),
        description: $("#addParkDescription").val(),
        sport: $("#addParkSport").val(),
        skill_level: $("#addParkSkill").val(),
        date: $("#addParkDate").val(),
        time: $("#addParkTime").val()
      });
      match.save(null, {
        url: 'https://skill-match.herokuapp.com/api/matches/',
        success: function(resp) {
          console.log("success", resp);
          var id = resp.toJSON().id;
          router.navigate('/match/' + id, {trigger: true});
        },
        error: function(error, xhr) {
          console.log(xhr.responseJSON.detail);
          }
        });
      });
    },
    error: function(err) {
      console.log('error', err);
    }
  });
});
// End of park create match page
//////////////////////////////////////////////////////////////////////////////////////
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
// End of feedback container
//////////////////////////////////////////////////////////////////////////////////////
router.on('route:challenge', function(id) {
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
      var challengeMatchTemplate = $("#mainTemplate").text();
      var challengeMatchHTML = Mustache.render(challengeMatchTemplate, 'park');
      $("#challenge").html(challengeMatchHTML);
      $("#container").html(html);
      console.log("success: ",resp)
      $("#createMatch").on('click', function(e) {
        e.preventDefault();
        challenge = new matchContainer();
        challenge.set({
          challenge: id,
          park: $("#addPark").val(),
          description: $("#addDescription").val(),
          sport: $("#addSport").val(),
          skill_level:$("#addSkill").val(),
          date: $("#addDate").val(),
          time: $("#addTime").val(),
        });
        challenge.save(null, {
          url: 'https://skill-match.herokuapp.com/api/matches/challenge/',
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

//////////////////////////////////////////////////////////////////////////////////////
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
  var matchDetail = new matchContainer(id);
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
      });
      $("#updateMatch").on('click', function(e) {
        e.preventDefault();
        matchDetail = new matchContainer({id:id});
        matchDetail.set({
        park: $("#addPark").val(),
        description: $("#addDescription").val(),
        sport: $("#addSport").val(),
        skill_level:$("#addSkill").val(),
        date: $("#addDate").val(),
        time: $("#addTime").val()
      });
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
  });
});
////////////////////////////////////////////////////////////////////////////////
// This page gives you the ability to leave Feedback on completed matches
router.on('route:feedback', function(id, username){
  var html = feedback;
  $("#container").html(html);
  $("#submitFeedback").on('click', function() {
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
  $('#skillLevel').hover(function(){
    $('#skillLevelinfo').toggleClass();
  });
  $('#Sportsmanship').hover(function(){
    $('#Sportsmanshipinfo').toggleClass();
  });
  $('#crowd').hover(function(){
    $('#crowdinfo').toggleClass();
  });
});

/////////////////////////////////////////////////////////////////////////////
// Routes to parks page where we fetch and display parks from Api
// BackbonePagination is used here to page through all parks in Api
// We used a counter to along with BackbonePagination get the next page of parks
router.on('route:parks', function(id, name) {
  function geoFindMe() {
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log('latitude '+latitude);
      console.log('longitude '+longitude);
      var nextPages = new Park()
      nextPages.fetch({
        url: 'https://skill-match.herokuapp.com/api/parks/?lat='+latitude+'&long='+longitude,
        success: function(resp) {
          var html = parks({'data': resp.toJSON().results});
          var parkTemplate = $("#parkTemplate").text();
          var parkHTML = Mustache.render(parkTemplate, "data");
          var next = resp.toJSON().next;
          var previous = resp.toJSON().previous;
          $("#parksContainer").html(parkHTML);
          $("#container").html(html);
          console.log("success", resp);
          console.log("success: ",resp)
          $('#nextPark').on('click', function(){
            nextPage(next)
            window.scrollTo(0, 450);
          });
          $('#backPark').on('click', function(){
            prevPage(previous)
            window.scrollTo(0, 450);
          });
          $('#locate').on('click', function(){
            geoFindMe()
          });
          $("#searchPark").on('click', function(e) {
            e.preventDefault();
            searchPark();
          });
          $(".yelpReview").on('click', function(e) {
            e.preventDefault();
            window.open($(this).attr('href'));
          });
     },
     error: function(err) {
       console.log("nope")
     }
    });
  };
  function error() {
  };
  $('#parkSearch').val("Locating…");
  navigator.geolocation.getCurrentPosition(success, error);
  }
  function nextPage(next){
    var nextPages = new Park()
    nextPages.fetch({
      url: next,
      success: function(resp) {
      var html = parks({'data': resp.toJSON().results});
      var parkTemplate = $("#parkTemplate").text();
      var parkHTML = Mustache.render(parkTemplate, "data");
      var next = resp.toJSON().next;
      var previous = resp.toJSON().previous;
      $("#parksContainer").html(parkHTML);
      $("#container").html(html);
      console.log("success", resp);
      console.log("success: ",resp)
      $('#nextPark').on('click', function(){
        nextPage(next)
        window.scrollTo(0, 450);
      });
      $('#backPark').on('click', function(){
        prevPage(previous)
        window.scrollTo(0, 450);
      });
      $('#locate').on('click', function(){
      geoFindMe()
      });
      $("#searchPark").on('click', function(e) {
        e.preventDefault();
        searchPark();
      });
      $(".yelpReview").on('click', function(e) {
        e.preventDefault();
        window.open($(this).attr('href'));
      });
     },
     error: function(err) {
       console.log("nope")
     }
    });
  }
  function prevPage(previous){
    var prevPages = new Park()
    prevPages.fetch({
      url: previous,
      success: function(resp) {
        var html = parks({'data': resp.toJSON().results});
        var parkTemplate = $("#parkTemplate").text();
        var parkHTML = Mustache.render(parkTemplate, "data");
        var next = resp.toJSON().next;
        var previous = resp.toJSON().previous;
        $("#parksContainer").html(parkHTML);
        $("#container").html(html);
        console.log("success", resp);
        console.log("success: ",resp)
        $('#nextPark').on('click', function(){
          nextPage(next)
          window.scrollTo(0, 450);
        });
        $('#backPark').on('click', function(){
          prevPage(previous)
          window.scrollTo(0, 450);
        });
        $('#locate').on('click', function(){
          geoFindMe()
        });
        $("#searchPark").on('click', function(e) {
          e.preventDefault();
          searchPark();
        });
        $(".yelpReview").on('click', function(e) {
          e.preventDefault();
          window.open($(this).attr('href'));
        });
      },
      error: function(err) {
        console.log("nope")
      }
    });
  }
  function searchPark() {
    var search = new Park()
    search.fetch({
      url: "http://skill-match.herokuapp.com/api/parks/?search=" + $("#parkSearch").val(),
      success: function(resp) {
        var html = parks({'data': resp.toJSON().results});
        var parkTemplate = $("#parkTemplate").text();
        var parkHTML = Mustache.render(parkTemplate, "data");
        $("#parksContainer").html(parkHTML);
        $("#container").html(html);
        console.log("success", resp);
        $("#searchPark").on('click', function(e) {
          e.preventDefault();
          searchPark();
        });
        $('#nextPark').on('click', function(){
          nextPage(next)
          window.scrollTo(0, 450);
        });
        $('#backPark').on('click', function(){
          prevPage(previous)
          window.scrollTo(0, 450);
        });
        $('#locate').on('click', function(){
          geoFindMe()
        });
        $(".yelpReview").on('click', function(e) {
          e.preventDefault();
          window.open($(this).attr('href'));
        });
      },
      error: function(err) {
        console.log("error", err);
      }
    })
  $('#parkSearch').val("Locating…");
  }
  $("#searchPark").on('click', function(e) {
    e.preventDefault();
    searchPark();
  });
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
      var next = resp.toJSON().next;
      var previous = resp.toJSON().previous;
      var zip = $('#zipcode').val();
      $("#parksContainer").html(parkHTML);
      $("#container").html(html);
      console.log("success", resp);
      $(".yelpReview").on('click', function() {
        window.open($(this).attr('href'));
      });
      $('#nextPark').on('click', function(){
        nextPage(next)
        window.scrollTo(0, 450);
      });
      $('#backPark').on('click', function(){
        prevPage(previous)
        window.scrollTo(0, 450);
      });
      $('#locate').on('click', function(){
        geoFindMe()
      });
      $("#searchPark").on('click', function(e) {
        e.preventDefault();
        searchPark();
      });
    },
    error: function(err) {
      console.log("error", err);
    }
  });
});
/////////////////////////////////////////////////////////////////////////////
// This page is a more indepth look at the park you have choosen and we display the parks match history.
// Soon it will include all a list of sports available at the park.
router.on('route:parksDetail', function(id, name){
  var Park = Backbone.Model.extend({
    initialize: function () {
    },
    defaults: {
    id: null,
    name: null
    },
    url: 'https://skill-match.herokuapp.com/api/parks/'+id+'/'
  });
  var Parks = Backbone.Collection.extend({
    model: Park,
    url: 'https://skill-match.herokuapp.com/api/parks/'+id+'/'
  });
  var park = new Park();
  park.fetch ({
    success: function(resp) {
      var html = parksDetail({'data': resp.toJSON()});
      var parksDetailTemplate = $("#parksDetailTemplate").text();
      var parksDetailHTML = Mustache.render(parksDetailTemplate, "data");
      $("#parksDetail").html(parksDetailHTML);
      $("#container").html(html);
      console.log("success", resp);
      $("#yelpReview").on('click', function() {
        window.open($("#yelpReview").attr('href'));
      });
      $('#createCourt').on('click', function(){
        $('dialog').toggleClass();
        var parkCreate = Backbone.Model.extend({
        initialize: function(){
        },
        defaults: {
          sport: null,
          other: null,
          num_courts: null,
          lat: null,
          long: null
        },
        url: "http://skill-match.herokuapp.com/api/courts/"
      });
      function geoFindMe() {
        function success(position) {
          var latitude  = position.coords.latitude;
          var longitude = position.coords.longitude;
          console.log('latitude '+latitude);
          console.log('longitude '+longitude);
          var newPark = new parkCreate();
          newPark.set ({
            park: id,
            sport: $(".addNewParkSport").val(),
            other: $(".addOtherParkSport").val(),
            num_courts: $(".addNumCourts").val(),
            lat: latitude,
            long: longitude
          });
          newPark.save (null, {
            success: function(resp) {
              console.log('success', resp);
              router.navigate("/parks", {trigger:true});
            },
            error: function(err) {
            console.log('error', err);
            }
          })
        }
        function error(err) {
          console.log("error", err);
        }
        navigator.geolocation.getCurrentPosition(success, error);
      }
      $(".createCourtButton").on('click', function() {
        geoFindMe();
      });
      $('.close').on('click', function(){
        $('dialog').toggleClass();
        $(".createCourtButton").on('click', function() {
          geoFindMe();
        });
        $('.close').on('click', function(){
          $('dialog').toggleClass();
        });
      });
      });
    },
    error: function(err) {
      console.log("error", err);
    }
  });
});
////////////////////////////////////////////////////////////////////////////////
$('body').on('click', 'a', function (e){
  e.preventDefault();
  if (!$(this).hasClass("external")) {
    var href = $(this).attr('href').substr(1);
    router.navigate(href, {trigger:true});
    window.scroll(0, 0);
  }
});
$('body').on('hover', 'span', function (e){
  e.preventDefault();
});