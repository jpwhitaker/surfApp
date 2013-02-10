Meteor.setInterval(function(){console.log('checking Users')}
  ,60000);
var sendSurfReport= function(){
  checkUser();
}

var checkUser = function(){

  var currentHour = moment.utc().subtract('hours',10).format('h')
  var currentMinute = moment.utc().subtract('hours',10).format('m')
  var currentDay = moment.utc().subtract('hours',10).format('dddd');

  var allUsers = Meteor.users.find().fetch()

  //check if day and time matches
  var matchingTimes = _.filter(allUsers, function(user){
    //making user test cases match for testing purposes
    user.profile.notifyTime.hours = currentHour;
    user.profile.notifyTime.minutes = currentMinute;
    var checkDay = function(currentDay){
      switch (currentDay) {
     case "Monday":
        if(user.profile.notifyDays.mon === true){
          return true;
        } else {
          return false;
        }
        break;
     case "Tuesday":
          if(user.profile.notifyDays.tue === true){
          return true;
        } else {
          return false;
        } 
        break;
     case "Wednesday":
        if(user.profile.notifyDays.wed === true){
          return true;
        } else {
          return false;
        }
        break;
     case "Thursday":
        if(user.profile.notifyDays.thu === true){
          return true;
        } else {
          return false;
        }
        break;
     case "Friday":
        if(user.profile.notifyDays.fri === true){
          return true;
        } else {
          return false;
        }
        break;
     case "Saturday":
        if(user.profile.notifyDays.sat === true){
          return true;
        } else {
          return false;
        }
        break;
     case "Sunday":
        if(user.profile.notifyDays.sun === true){
          return true;
        } else {
          return false;
        }
        break;
      }       
    };

    if(+user.profile.notifyTime.hours == currentHour && +user.profile.notifyTime.minutes == currentMinute && checkDay(currentDay) === true){
      return user;
    }
  })


  //check if they want to be notified
  var notificationsOn = _.filter(matchingTimes, function(user){
    if(user.profile.notifyText=== true){
      return user;
    }
  })

  //check if the wave heights (today or tomorrow) match their settings for each shore
  var heights = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  var tomorrowsHeights = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})

  var matchWaveSettings = _.filter(notificationsOn, function(user){
    var shore = user.profile.notifyShores;
    var userHeight = user.profile.notifyHeight;

    if(shore.north === true && userHeight[0] >= heights.north.min && userHeight[1]<= heights.north.max){
      console.log('called');
    } else if (shore.south === true && userHeight[0] >= heights.south.min && userHeight[1]<= heights.south.max){
      console.log('called');
    } else if (shore.east === true && userHeight[0] >= heights.east.min && userHeight[1]<= heights.east.max){
      console.log('called');
    } else if (shore.west === true && userHeight[0] >= heights.west.min && userHeight[1]<= heights.west.max){
      console.log('called');
    }

  });




  // matchWaveSettings();

  var callUser = function(){

    _.each(notificationsOn, function(user){

      console.log(user.username);
      console.log(matchingTimes);
      console.log(notificationsOn);
      Meteor.call('sendText', user + 'remove to send text','Surfs up!  North is 10, 15 ft today!')
    })
  }
  callUser();
}
