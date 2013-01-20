if (Meteor.isClient){

  Template.signUp.events({
    'click #submit' : function () {

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
      }, 
      function(error){console.log(error)})
    }
  });
};


