Meteor.setInterval(function(){console.log('hey')}
  ,60000);

var checkUser = function(){
  var currentHour = moment.utc().subtract('hours',10).format('h')
  var allUsers = Meteor.users.find().fetch()

  _.each(allUsers, function(user){
    if(user.profile.notifyTime.hours == currentHour){
      console.log('hours match')
    } else {
      console.log('hours dont match')
    }
    console.log(user.profile.notifyTime.hours, currentHour)})
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


