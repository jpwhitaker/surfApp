if (Meteor.isServer) {
  Meteor.startup(function () {

    var verifyNumber = function(user, options){
      //SMS Meteor!!
      Meteor.http.post(
        'https://api.twilio.com/2010-04-01/Accounts/AC247cdc55daacf786ddd9c6ea0e51534f/SMS/Messages.json',
        {
          params:{From:'+12408216248', To:user.username, Body: 'Thanks for signing up with Tsunani.com!  Verify your account by entering the following: ' + options.profile.verifyPin},
          auth: 'AC247cdc55daacf786ddd9c6ea0e51534f:b08d5f3880e3e3783e565d978031f72d',
          headers: {'content-type':'application/x-www-form-urlencoded'}
        }, function () {
          console.log(arguments, 'Log')
        }
      );
    }
    
    Meteor.methods({sendText : function(user, SMS){
      //SMS Meteor!!
      Meteor.http.post(
        'https://api.twilio.com/2010-04-01/Accounts/AC247cdc55daacf786ddd9c6ea0e51534f/SMS/Messages.json',
        {
          params:{From:'+12408216248', To:user.username, Body: SMS},
          auth: 'AC247cdc55daacf786ddd9c6ea0e51534f:b08d5f3880e3e3783e565d978031f72d',
          headers: {'content-type':'application/x-www-form-urlencoded'}
        }, function () {
          console.log(arguments, 'Log')
        }
      );
    }
    })

    Accounts.onCreateUser(function(options,user){
      var userExists = function(user){
        if(Meteor.users.findOne({username:user.username})){
          console.log('ALREADY EXISTS');
          return true;
        } else {
          console.log("NEW USER")
          return false;
        }
      }

      if(!userExists(user)){
      verifyNumber(user, options);
      }

      user.password = options.password;
      if (options.profile){
        user.profile = options.profile;
        return user;
      } 
    });
  });
}

