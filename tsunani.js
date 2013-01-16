if (Meteor.isClient) {


  Template.signUp.events({
    'click #submit' : function () {
      // template data, if any, is available in 'this'
      var phoneNumber = document.getElementById('phoneNumber').value;
      var password = document.getElementById('password').value
        Accounts.createUser({'username':phoneNumber, 'password':password})
        console.log(phoneNumber)
        console.log(password);
        ;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    // console.log(Meteor.users.find({}) );
  });
}
