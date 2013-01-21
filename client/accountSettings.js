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

  Template.userSettings.maxHeight = function(){
    return Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.notifyHeight[1] 
  }

  Template.userSettings.northActive = function(){
    if(Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.notifyShores.north === true){
      return "active";
    }
  }
  Template.userSettings.southActive = function(){
    if(Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.notifyShores.south === true){
      return "active";
    }
  }
  Template.userSettings.eastActive = function(){
    if(Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.notifyShores.east === true){
      return "active";
    }
  }
  Template.userSettings.westActive = function(){
    if(Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.notifyShores.west === true){
      return "active";
    }
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

//Switch statement sending direction button clicks to DB //
  Template.userSettings.events({
    'click .dir': function (e) {
       console.log(e.target.id) 
       switch (e.target.id) {
   case "north":
        if (Meteor.users.findOne(
          {_id:Meteor.userId()},
          {fields: {profile:1}}).profile.notifyShores.north === false) {
           
          Meteor.users.update(
          {_id:Meteor.userId()},
          {
            $set: {"profile.notifyShores.north" : true}
          });
       } else {
           Meteor.users.update(
          {_id:Meteor.userId()},
          {
            $set: {"profile.notifyShores.north" : false}
          });
       }
      break;
   case "south":
          if (Meteor.users.findOne(
          {_id:Meteor.userId()},
          {fields: {profile:1}}).profile.notifyShores.south === false) {
           
          Meteor.users.update(
          {_id:Meteor.userId()},
          {
            $set: {"profile.notifyShores.south" : true}
          });
       } else {
           Meteor.users.update(
          {_id:Meteor.userId()},
          {
            $set: {"profile.notifyShores.south" : false}
          });
       }
      break;
   case "east":
      if (Meteor.users.findOne(
              {_id:Meteor.userId()},
              {fields: {profile:1}}).profile.notifyShores.east === false) {
               
              Meteor.users.update(
              {_id:Meteor.userId()},
              {
                $set: {"profile.notifyShores.east" : true}
              });
           } else {
               Meteor.users.update(
              {_id:Meteor.userId()},
              {
                $set: {"profile.notifyShores.east" : false}
              });
           }
      break;
   case "west":
    if (Meteor.users.findOne(
            {_id:Meteor.userId()},
            {fields: {profile:1}}).profile.notifyShores.west === false) {
             
            Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyShores.west" : true}
            });
         } else {
             Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyShores.west" : false}
            });
         }
      break;
    }       
    }
  })


  Template.userSettings.events({
    'click .save': function () {
       Meteor.users.update(
        {_id:Meteor.userId()},
        {$set: {"profile.notifyHeight" : 
        [+document.querySelector('.minHeight').value,+document.querySelector('.maxHeight').value] }
        });       
    }
  })

});




