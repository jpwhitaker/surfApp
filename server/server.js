if (Meteor.isServer) {
  Meteor.startup(function () {

    Meteor.methods({
      test:function(){
  // console logs the value of profile.verified
        console.log(Meteor.users.findOne(
          {_id:Meteor.userId()},
          {fields: {profile:1}}).profile.verified)
          // Meteor.users.update(
          //   {_id:Meteor.userId()},
          //   {
          //     $set: {"profile.notifyShores.north" : true}
          //   });
      }
    });

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
      console.log(user.username, "CALLLEEED")
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
      console.log(options, user)
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

