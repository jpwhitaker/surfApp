Meteor.startup(function () {
 
  Template.userSettings.isAdmin = function(){  
    var currentUser = Meteor.user();

    if( currentUser.username === 'admin'){
      return true;
    } else {
      return false;
    }
  }



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



  Template.unverified.verified = function(){
    if (Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.verified === false){
      return "Verify your account to receive updates!"
    }
    else{
      return true;
    }
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

  Template.userSettings.today = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.todayOrTomorrow === 'today'){
      return "active";
    }
  }

  Template.userSettings.tomorrow = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.todayOrTomorrow === 'tomorrow'){
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

  //changing the state of the 'day of the week buttons'
  Template.userSettings.monActive = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.notifyDays.mon === true){
      return "active";
    }
  }
  Template.userSettings.tueActive = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.notifyDays.tue === true){
      return "active";
    }
  }
  Template.userSettings.wedActive = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.notifyDays.wed === true){
      return "active";
    }
  }
  Template.userSettings.thuActive = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.notifyDays.thu === true){
      return "active";
    }
  }
  Template.userSettings.friActive = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.notifyDays.fri === true){
      return "active";
    }
  }
  Template.userSettings.satActive = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.notifyDays.sat === true){
      return "active";
    }
  }
  Template.userSettings.sunActive = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.notifyDays.sun === true){
      return "active";
    }
  }

  Template.userSettings.userHours = function(){
    return _.range(1,13).map(function(n){
      var hour = {number:n};
      if(+Meteor.users.findOne(
        {_id:Meteor.userId()},
        {fields: {profile:1}}).profile.notifyTime.hours === n){
        hour.selected = 'selected';
      }
      return hour;
    })
  }

  Template.userSettings.userMins = function(){
    return _.range(0,60,5).map(function(n){    
      var min = {number:n};
        if(+Meteor.users.findOne(
          {_id:Meteor.userId()},
          {fields: {profile:1}}).profile.notifyTime.minutes === n){
          min.selected = 'selected';
        }
        if(n<10){min.number = "0"+n}
      return min;
    })
  }

  Template.userSettings.amSelected = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.notifyTime.amPm === 'AM'){
      return 'selected';
    }; 
  };

    Template.userSettings.pmSelected = function(){
    if(Meteor.users.findOne(
      {_id:Meteor.userId()},
      {fields: {profile:1}}).profile.notifyTime.amPm === 'PM'){
      return 'selected';
    }; 
  };

  //some meteor magic going on here
  Template.userSettings.showTime = function(){
    Session.get('time')
    return moment.utc().subtract('hours',10).format('h:mm:ss a')
  }
  Meteor.setInterval(function(){Session.set('time',Math.random())},1000)

  //Events//
  //Sets profile.verified to true if the pin matches
  Template.unverified.events({
    'click .verifyButton' : function() {
      console.log(Meteor.users.findOne({_id:Meteor.userId()},{fields: {profile:1}}).profile.verifyPin, +document.getElementById('pin').value)
      if (Meteor.users.findOne({_id:Meteor.userId()},{fields: {profile:1}}).profile.verifyPin 
      === +document.getElementById('pin').value){
        Meteor.users.update(
        {_id:Meteor.userId()},
        {$set: {"profile.verified" : true}});
      }
    }   
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
    'click .todaysHeights' : function() {
      Meteor.users.update(
        {_id:Meteor.userId()},
        {$set: {"profile.todayOrTomorrow" : 'today'}
      })
    }
  })

  Template.userSettings.events({
    'click .tomorrowsHeights' : function() {
      Meteor.users.update(
        {_id:Meteor.userId()},
        {$set: {"profile.todayOrTomorrow" : 'tomorrow'}
      })
    }
  })

 
  Template.userSettings.events({
    'click .verifiedTrue' : function () {
      console.log ('clicked true')
      Meteor.users.update(
        {_id:Meteor.userId()},
        {
        $set: {"profile.todayOrTomorrow" : true}
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

  //Switch statement sending day of the week button clicks to DB //
  Template.userSettings.events({
    'click .day': function (e) {
       console.log(e.target.id) 
       switch (e.target.id) {
   case "mon":
        if (Meteor.users.findOne(
          {_id:Meteor.userId()},
          {fields: {profile:1}}).profile.notifyDays.mon === false) {
           
          Meteor.users.update(
          {_id:Meteor.userId()},
          {
            $set: {"profile.notifyDays.mon" : true}
          });
       } else {
           Meteor.users.update(
          {_id:Meteor.userId()},
          {
            $set: {"profile.notifyDays.mon" : false}
          });
       }
      break;
   case "tue":
          if (Meteor.users.findOne(
          {_id:Meteor.userId()},
          {fields: {profile:1}}).profile.notifyDays.tue === false) {
           
          Meteor.users.update(
          {_id:Meteor.userId()},
          {
            $set: {"profile.notifyDays.tue" : true}
          });
       } else {
           Meteor.users.update(
          {_id:Meteor.userId()},
          {
            $set: {"profile.notifyDays.tue" : false}
          });
       }
      break;
   case "wed":
      if (Meteor.users.findOne(
              {_id:Meteor.userId()},
              {fields: {profile:1}}).profile.notifyDays.wed === false) {
               
              Meteor.users.update(
              {_id:Meteor.userId()},
              {
                $set: {"profile.notifyDays.wed" : true}
              });
           } else {
               Meteor.users.update(
              {_id:Meteor.userId()},
              {
                $set: {"profile.notifyDays.wed" : false}
              });
           }
      break;
   case "thu":
    if (Meteor.users.findOne(
            {_id:Meteor.userId()},
            {fields: {profile:1}}).profile.notifyDays.thu === false) {
             
            Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyDays.thu" : true}
            });
         } else {
             Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyDays.thu" : false}
            });
         }
      break;
   case "fri":
    if (Meteor.users.findOne(
            {_id:Meteor.userId()},
            {fields: {profile:1}}).profile.notifyDays.fri === false) {
             
            Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyDays.fri" : true}
            });
         } else {
             Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyDays.fri" : false}
            });
         }
      break;
   case "sat":
    if (Meteor.users.findOne(
            {_id:Meteor.userId()},
            {fields: {profile:1}}).profile.notifyDays.sat === false) {
             
            Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyDays.sat" : true}
            });
         } else {
             Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyDays.sat" : false}
            });
         }
      break;
   case "sun":
    if (Meteor.users.findOne(
            {_id:Meteor.userId()},
            {fields: {profile:1}}).profile.notifyDays.sun === false) {
             
            Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyDays.sun" : true}
            });
         } else {
             Meteor.users.update(
            {_id:Meteor.userId()},
            {
              $set: {"profile.notifyDays.sun" : false}
            });
         }
      break;
    }       
    }
  })

  //save values of inputs that arent toggles as they lose focus
  Template.userSettings.events({
    'blur .minHeight': function(){
      console.log('saved min')
      if(document.querySelector('.minHeight').value !== ''){
        Meteor.users.update(
          {_id:Meteor.userId()},
          {$set: {"profile.notifyHeight.0" : 
          +document.querySelector('.minHeight').value }
        });
      }
    }
  })

    Template.userSettings.events({
    'blur .maxHeight': function(){
      console.log('saved max')
      if(document.querySelector('.maxHeight').value !== ''){
        Meteor.users.update(
          {_id:Meteor.userId()},
          {$set: {"profile.notifyHeight.1" : 
          +document.querySelector('.maxHeight').value }
        });
      }
    }
  })

      Template.userSettings.events({
  'focus .maxHeight': function(){
    console.log('focus max')
    $('.maxHeight').focus()
  }
})

  //save button for saving values that arent toggles
  Template.userSettings.events({
    'click .save': function () {
      //save notifyHeight
      if(document.querySelector('.minHeight').value !== ''){
        Meteor.users.update(
          {_id:Meteor.userId()},
          {$set: {"profile.notifyHeight.0" : 
          +document.querySelector('.minHeight').value }
        });
      }
      if(document.querySelector('.maxHeight').value !== ''){
        Meteor.users.update(
          {_id:Meteor.userId()},
          {$set: {"profile.notifyHeight.1" : 
          +document.querySelector('.maxHeight').value }
        });
      }
    //save notifyTime   
      Meteor.users.update(
        {_id:Meteor.userId()},
        {$set: {"profile.notifyTime" : {
          'hours':document.querySelector('#hours').value,
          'minutes':document.querySelector('#mins').value,
          'amPm':document.querySelector('#amPm').value}
        }
      }); 
    } 
  })
});
