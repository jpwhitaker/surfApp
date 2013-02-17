var signUp = function () {
  var phoneNumber = $(".phoneNumber").val();
  console.log(phoneNumber)
  var verifyPin = Math.floor(Math.random()*9000)+1000;
    Accounts.createUser({
    'username':phoneNumber,
    'password':verifyPin,
    'profile' : {
      'verifyPin'       : verifyPin,
      'verified'        : false,
      'notifyHeight'    : [3,5],
      'notifyShores'    : {'north':false, 'south':false, 'east':false, 'west':false},
      'notifyDays'      : {'mon':false, 'tue':false, 'wed':false, 'thu':false, 'fri':false, 'sat':false, 'sun':false},
      'todayOrTomorrow' : 'today',
      'notifyTime'      : {'hours':6, 'minutes':00, 'amPm':'AM'},
      'notifyText'      : false,
      'notifyEmail'     : false,
      'email'           : '',
      'notifications'   : true
      }
    },
    function(error){
      if(error && error.error === 403){
      Session.set('signUpError', 403)
    }
  })
}


Template.signUp.events({
  'click #submit' : function(){
    Session.set('phoneNumber', $(".phoneNumber").val())
  }
})

Template.signUp.validNumber = function(){

  if(Session.get('phoneNumber')){
    var phoneNumber = Session.get('phoneNumber');
    if(phoneNumber.match(/\d{3}(-)\d{3}(-)\d{4}/)){
      signUp();
      } else {
      return "Please enter a valid number!";
    }
  }
}
