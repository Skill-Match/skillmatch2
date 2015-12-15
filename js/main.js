require("../css/index.css");
require("../css/normal.css");
require("../css/main.css");
require("../css/login.css");
require("../css/signup.css");
require("../css/createMatch.css");
require("../css/match.css");
require("../css/home.css");
require("../css/profile.css");
require("../css/feedback.css");


$(document).ready(function(){
  var Router = require('./router.js');
          $('#loginSubmit').on('click', function(){
          var username = $("#username").val();
          var password = $("#password").val();
          var homeBtn = document.createElement('a');
          var link = document.createTextNode(username);
          homeBtn.appendChild(link);
			  homeBtn.setAttribute('href', '/home/'+username);
          $.ajax({
        url:"https://skill-match.herokuapp.com/api/api-token-auth/",
        method:'POST',
        data: {username: username, password:password}
      }).then(function(resp){
        setToken(resp.token);
        console.log(resp.token);
        $('#nav').html(homeBtn);
        console.log(username)
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