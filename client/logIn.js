Template.logOut.events({
  'click .logOut' : function(e) {
    if(e.target.id === "logOut"){
      Meteor.logout();
    }
  }
})

Template.logIn.events({
  'click .logInButton' : function(e) {
    Meteor.loginWithPassword(document.querySelector('#login').value,
    document.querySelector('#password').value)
    console.log('clicked')
  },

 'click .logInLink' : function(e) {
    Session.set("showLogin",true)
  }
})




  Template.logIn.show = function(){
    return Session.get("showLogin")
  }



