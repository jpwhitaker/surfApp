Meteor.startup(function () {
  Template.userSettings.profile = function(){  
    if(! Meteor.loggingIn()){
      //necessary to load template before getting user data.  ask CJ about ui-bootstrap
      // console.log(Meteor.user().profile.notifyShores.north)
      //toggle directions
      if(Meteor.user().profile.notifyShores.north === false){
        
        $('.north').addClass('active');
        console.log() 




      }
    }
  }
 
  Template.userSettings.verified = function(){
    return Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.verified
  }


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
      })

  // if(Meteor.users.findOne(
  //           {_id:Meteor.userId()},
  //           {fields: {profile:1}}).profile.verifyPin === document.getElementById('pin').value){
  //           console.log('yay')
  //         }


    // Template.userSettings.events({
    // 'click .verifyButton' : function () {
    //     console.log ('clicked true')
    //   }
    // })


  
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
    'click .north' : function () {
    console.log('touched')
    }
  })


});




