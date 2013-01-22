Meteor.setInterval(function(){console.log('hey')}
  ,60000);

var checkUser = function(){
  var currentHour = moment.utc().subtract('hours',10).format('h')
  var currentMinute = moment.utc().subtract('hours',10).format('m')

  var allUsers = Meteor.users.find().fetch()

  //check if time matches
  var matchingTimes = _.filter(allUsers, function(user){
    user.profile.notifyTime.hours = currentHour;
    user.profile.notifyTime.minutes = currentMinute;
    if(+user.profile.notifyTime.hours == currentHour && +user.profile.notifyTime.minutes == currentMinute){
      console.log('Match', user)
      return user;
    } else {
      console.log ('no match')
    }
  })
  //returns the height data for the shores the user wants
  var matchingSettings = _.map(matchingTimes, function(user){
    var northHeight = [];
    var southHeight = [];
    var eastHeight = [];
    var westHeight = [];
    var returnArray = [];
    if(user.profile.notifyShores.north === true){
      var north = SurfHeights.findOne({north:{$exists:true}}, {sort:{createdAt:1}});
      northHeight = north.north
      returnArray.push(north.north);
      // console.log(north.north)
    }
    if(user.profile.notifyShores.south === true){
      var south = SurfHeights.findOne({south:{$exists:true}}, {sort:{createdAt:1}});
      southHeight = south.south
      returnArray[1] = south.south;
    }
    if(user.profile.notifyShores.east === true){
      var east = SurfHeights.findOne({east:{$exists:true}}, {sort:{createdAt:1}});
      eastHeight = east.east
      returnArray[2] = east.east;
    }
    if(user.profile.notifyShores.west === true){
      var west = SurfHeights.findOne({west:{$exists:true}}, {sort:{createdAt:1}});
      westHeight = west.west
      returnArray[3] = west.west;
    }
    returnArray = [northHeight,southHeight,eastHeight,westHeight]
     return returnArray
  })

  console.log(matchingSettings, "sexy")








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


