Meteor.setInterval(function(){console.log('hey')}
  ,60000);

var checkUser = function(){
  var currentHour = moment.utc().subtract('hours',10).format('h')
  var currentMinute = moment.utc().subtract('hours',10).format('m')

  var allUsers = Meteor.users.find().fetch()

  //check if time matches
  _.each(allUsers, function(user){
    
    //match hours
    if(+user.profile.notifyTime.hours == currentHour){
      console.log('hours match', +user.profile.notifyTime.hours, currentHour)
    } else {
      console.log('hours dont match', +user.profile.notifyTime.hours, currentHour)
    }

    //match mins
    if(+user.profile.notifyTime.minutes == currentMinute){
      console.log('mins match', +user.profile.notifyTime.minutes, currentMinute)
    } else {
      console.log('mins dont match', +user.profile.notifyTime.minutes, currentMinute)
    }

  })
}

//call to send text
var sendText = function(user, SMS){
  //SMS Meteor!!
  Meteor.http.post('https://api.twilio.com/2010-04-01/Accounts/AC247cdc55daacf786ddd9c6ea0e51534f/SMS/Messages.json',
  {
    params:{From:'+12408216248', To:user.username+'take out to text', Body: SMS},
    auth: 'AC247cdc55daacf786ddd9c6ea0e51534f:b08d5f3880e3e3783e565d978031f72d',
    headers: {'content-type':'application/x-www-form-urlencoded'}
  }, function () {
      console.log(arguments, 'Log')
    }
  );
}


