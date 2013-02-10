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

  var textUser = function(textMessage, user){
    Meteor.call('sendText', user,textMessage)
  }


  var matchWaveSettings = _.filter(notificationsOn, function(user){
    var shore = user.profile.notifyShores;
    var userHeight = user.profile.notifyHeight;

    var generateSurfReport = function(day){
      var whichDay = '';
      if(user.profile.todayOrTomorrow === 'today'){
        whichDay = "Today's"
      } else {
        whichDay = "Tomorrow's"
      };
      textMessage = "Surf's up! " + whichDay + " surf forecast: North is "
      + day.north.min + "'-" + day.north.max + "', South is "
      + day.south.min + "'-" + day.south.max + "', East is "
      + day.east.min + "'-" + day.east.max + "', West is "
      + day.west.min + "'-" + day.west.max + "'. Brought to you by Tsunani.com";

      textUser(textMessage, user);
    }


    var todayOrTomorrow = function(day){
      if(shore.north === true && userHeight[0] >= day.north.min && userHeight[1]<= day.north.max){
        generateSurfReport(day);
      } else if (shore.south === true && userHeight[0] >= day.south.min && userHeight[1]<= day.south.max){
        generateSurfReport(day);
      } else if (shore.east === true && userHeight[0] >= day.east.min && userHeight[1]<= day.east.max){
        generateSurfReport(day);
      } else if (shore.west === true && userHeight[0] >= day.west.min && userHeight[1]<= day.west.max){
        generateSurfReport(day);
      }
    }

    if(user.profile.todayOrTomorrow === 'today'){
      todayOrTomorrow(heights)
    } else {todayOrTomorrow(tomorrowsHeights)};
  


  });

    


  // matchWaveSettings();

}
