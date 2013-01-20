Meteor.startup(function () {
  Template.userSettings.profile = function(){  
    if(! Meteor.loggingIn()){
      console.log(Meteor.user().profile.notifyTime);
    }
  }
});



