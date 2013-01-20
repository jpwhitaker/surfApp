Meteor.startup(function () {
  Template.userSettings.profile = function(){  
    if(! Meteor.loggingIn()){
      //necessary to load template before getting user data.  ask CJ about ui-bootstrap
      // console.log(Meteor.user().profile.notifyShores.north)
      //toggle directions
      if(Meteor.user().profile.notifyShores.north === false){
        
        $('.north').addClass('active');
        console.log('north') 
      }
    }
  }
  Template.userSettings.northIsActive = function(){
    if(Meteor.user().profile.notifyShores.north === false){
      return "active";
    } else {
      return "";
    }
  }

  Template.userSettings.events({
    'click .north' : function () {
    Meteor.user().profile.notifyShores.north = true;
    console.log('touched')
    }
  })

    Template.userSettings.events({
    'click .verfied' : function () {
    Meteor.user().profile.notifyShores.north = true;
    console.log('touched')
    }
  })


});




