if (Meteor.isClient){




  Template.signUp.events({
    'click #submit' : function () {

      var phoneNumber = document.getElementById('phoneNumber').value;
      var verifyPin = Math.floor(Math.random()*9000)+1000;
        Accounts.createUser({
        'username':phoneNumber,
        'password':verifyPin,
        'profile' : {
          'verifyPin'    : verifyPin,
          'verified'     : false,
          'notifyHeight' : [3,5],
          'notifyShores' : {'north':false, 'south':false, 'east':false, 'west':false},
          'notifyTime'   : {'hours':6, 'minutes':00, 'amPm':'AM'},
          'notifyText'   : false,
          'notifyEmail'  : false,
          'email'        : '',
          'notifications': true
        },
      }, 
      function(error){console.log(error)})
    }
  });
};


