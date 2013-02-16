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
      //checks to see if user exists; if it does return user (onCreate can only be called once)
      //else it modifies the new user and texts them
      if(Meteor.users.find({'username':user.username})){
        return user;
      }

      verifyNumber(user, options);
      user.password = options.password;
      if (options.profile){
        user.profile = options.profile;
        return user;
      } 
    });
    console.log(Meteor.users.find().fetch())
  });
}

