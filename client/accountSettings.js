Meteor.startup(function () {
  Template.userSettings.profile = function(){  
    if(! Meteor.loggingIn()){
      //necessary to load template before getting user data.  ask CJ about ui-bootstrap
      // console.log(Meteor.user().profile.notifyShores.north)
      //toggle directions
      
    }
  }
 //Display functions//
  Template.userSettings.verified = function(){
    return Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.verified
  }

  Template.userSettings.notifyTextTrue = function(){
    if(Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.notifyText === true){
      return "active";
    }
  }

  Template.userSettings.notifyTextFalse = function(){
    if(Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.notifyText === false){
      return "active";
    }
  }

  Template.userSettings.minHeight = function(){
    return Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.notifyHeight[0] 
    
  }


  //Events//
  //Sets profile.verified to true if the pin matches
  Template.userSettings.events({
  'click .verifyButton' : function() {
    if(Meteor.users.findOne({_id:Meteor.userId()},{fields: {profile:1}}).profile.verifyPin 
      === +document.getElementById('pin').value)
      {
        Meteor.users.update(
        {_id:Meteor.userId()},
        {$set: {"profile.verified" : true}
        });
      console.log('yes')
    } 
    else {console.log('no')}}
  });

  Template.userSettings.events({
    'click .notifyTextTrue' : function() {
      Meteor.users.update(
        {_id:Meteor.userId()},
        {$set: {"profile.notifyText" : true}
        })
    }
  })

    Template.userSettings.events({
    'click .notifyTextFalse' : function() {
      Meteor.users.update(
        {_id:Meteor.userId()},
        {$set: {"profile.notifyText" : false}
        })
    }
  })
 
  Template.userSettings.events({
  'click .verifiedTrue' : function () {
      console.log ('clicked true')
      Meteor.users.update(
        {_id:Meteor.userId()},
        {
          $set: {"profile.verified" : true}
        });
    }
  })

  Template.userSettings.events({
  'click .verifiedFalse' : function () {
      console.log ('clicked false')
        Meteor.users.update(
        {_id:Meteor.userId()},
        {
          $set: {"profile.verified" : false}
        });
    }
  })

  Template.userSettings.events({
    'keyup .minHeight': function (e) {
       Meteor.users.update(
        {_id:Meteor.userId()},
        {$set: {"profile.notifyHeight.0" : +e.target.value}
        });
       
    }
  })

});




