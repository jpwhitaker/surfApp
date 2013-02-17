Meteor.methods({
  insertVerifiedData: function(todayVerified, tomorrowVerified){
    verifiedData.insert(todayVerified);
    verifiedData.insert(tomorrowVerified);
  }
})
