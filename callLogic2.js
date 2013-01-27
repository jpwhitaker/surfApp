Meteor.setInterval(function(){console.log('checking Users')}
  ,60000);
var sendSurfReport= function(){
  checkUser();
}

var checkUser = function(){
  var currentHour = moment.utc().subtract('hours',10).format('h')
  var currentMinute = moment.utc().subtract('hours',10).format('m')

  var allUsers = Meteor.users.find().fetch()

  //check if time matches
  var matchingTimes = _.filter(allUsers, function(user){
    //making user test cases match for testing purposes
    user.profile.notifyTime.hours = currentHour;
    user.profile.notifyTime.minutes = currentMinute;
    if(+user.profile.notifyTime.hours == currentHour && +user.profile.notifyTime.minutes == currentMinute){
      return user;
    }
  })
  
  var callUser = function(){
    console.log('calledCallUser')
    _.each(matchingTimes, function(user){
      console.log(user.username);
      Meteor.call('sendText', user,'Surfs up!  North is 10, 15 ft today!')
    })
  }
  callUser();
}