if (Meteor.isClient){

  Template.signUp.events({
    'click #submit' : function () {
      // template data, if any, is available in 'this'

      var phoneNumber = document.getElementById('phoneNumber').value;
      var verifyPin = Math.floor(Math.random()*9000)+1000;
        Accounts.createUser({
        'username':phoneNumber,
        'password':phoneNumber,
        'profile' : {
          'verifyPin'    : verifyPin,
          'verified'     : false,
          'notifyHeight' : [3,5],
          'notifyShores' : ['n','s','e','w'],
          'notifyTime'   : 600,
          'notifyText'   : true,
          'notifyEmail'  : false,
          'email'        : '',
          'notifications': true
        },

      }, function(error){console.log(error)})
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    var verifyNumber = function(user, options){
      //SMS Meteor!!
      Meteor.http.post('https://api.twilio.com/2010-04-01/Accounts/AC247cdc55daacf786ddd9c6ea0e51534f/SMS/Messages.json',
      {
        params:{From:'+12408216248', To:user.username, Body: 'Verify your account by entering the following: ' + options.profile.verifyPin},
        auth: 'AC247cdc55daacf786ddd9c6ea0e51534f:b08d5f3880e3e3783e565d978031f72d',
        headers: {'content-type':'application/x-www-form-urlencoded'}
      }, function () {
          console.log(arguments, 'Log')
        }
      );
      console.log(user.username)

    }


  Accounts.onCreateUser(function(options,user){
    console.log(options, user)
    verifyNumber(user, options);
    user.password = options.password;
      if (options.profile)
        user.profile = options.profile;
      return user;
    })
  });
}
