Template.logOut.events({
  'click .logOut' : function(e) {
    if(e.target.id === "logOut"){
      Meteor.logout();
      Meteor.setTimeout(drawCircles, 1000)
    }
  }
})

Template.logIn.events({
  'click .logInButton' : function(e) {
    console.log('clickedLogin',document.querySelector('#login').value,document.querySelector('#password').value)
    Meteor.loginWithPassword(document.querySelector('#login').value,
    +document.querySelector('#password').value, function(error){
      console.log(error)
    })
  },

 'click .logInLink' : function(e) {
    Session.set("showLogin",true)
  }
})

Template.logIn.show = function(){
  return Session.get("showLogin")
}



