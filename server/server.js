if (Meteor.isServer) {
  Meteor.startup(function () {

  Meteor.methods({
    test:function(){
      console.log('i want to eat pizza')
        Meteor.users.update(
          {_id:'d8ed59de-fabb-4a40-9ae0-70cb6d5dabdc'}, 
          {
            $set: {"profile.notifyShores.north" : true}
          });
    }
  })



    console.log(this.userID, 'yo')

    var verifyNumber = function(user, options){
      //SMS Meteor!!
      Meteor.http.post('https://api.twilio.com/2010-04-01/Accounts/AC247cdc55daacf786ddd9c6ea0e51534f/SMS/Messages.json',
      {
        params:{From:'+12408216248', To:user.username+'take out to text', Body: 'Thanks for signing up with Tsunani.com!  Verify your account by entering the following: ' + options.profile.verifyPin},
        auth: 'AC247cdc55daacf786ddd9c6ea0e51534f:b08d5f3880e3e3783e565d978031f72d',
        headers: {'content-type':'application/x-www-form-urlencoded'}
      }, function () {
          console.log(arguments, 'Log')
        }
      );
    }
    Accounts.onCreateUser(function(options,user){
      console.log(options, user)
      verifyNumber(user, options);
      user.password = options.password;
      if (options.profile){
        user.profile = options.profile;
        return user;
      } 
    })
  console.log(Meteor.users.find().fetch())
  })
}