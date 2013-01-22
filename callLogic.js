Meteor.setInterval(function(){console.log('hey')}
  ,60000);

var checkUser = function(){
  var currentHour = moment.utc().subtract('hours',10).format('h')
  var currentMinute = moment.utc().subtract('hours',10).format('m')

  var allUsers = Meteor.users.find().fetch()

  //check if time matches
  var matchingTimes = _.filter(allUsers, function(user){
    if(+user.profile.notifyTime.hours == currentHour && +user.profile.notifyTime.minutes == currentMinute){
      console.log('Match', user)
      return user;
    } else {
      console.log ('no match')
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


