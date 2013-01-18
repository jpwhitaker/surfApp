if (Meteor.isClient){

  Template.signUp.events({
    'click #submit' : function () {
      // template data, if any, is available in 'this'

      var phoneNumber = document.getElementById('phoneNumber').value;
      var password = document.getElementById('password').value
        Accounts.createUser({
        'username':phoneNumber,
        'password':password,
        'profile' : {
          'notifyHeight' : [3,5],
          'notifyShores' : ['n','s','e','w'],
          'notifyTime'   : 600,
          'notifyText'   : true,
          'notifyEmail'  : false,
          'email'        : '',
          'notifications': true
        },
      })
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    var verifyNumber = function(user){

      Meteor.http.post('https://api.twilio.com/2010-04-01/Accounts/AC247cdc55daacf786ddd9c6ea0e51534f/SMS/Messages.json',
      {
        params:{From:'+12408216248', To:'+18082256917', Body: user.name},
        auth: 'AC247cdc55daacf786ddd9c6ea0e51534f:b08d5f3880e3e3783e565d978031f72d',
        headers: {'content-type':'application/x-www-form-urlencoded'}
      }, function () {
          console.log(arguments, 'Log')
        }
      );
    }
    // code to run on server at startup
    // console.log(Meteor.users.find({}) );

  Accounts.onCreateUser(function(options,user){
    verifyNumber(user);
    user.password = options.password;
      if (options.profile)
        user.profile = options.profile;
      return user;
    })
  });
}
