Meteor.publish("verifiedData", function () {
  return verifiedData.find(); // everything
});

Meteor.publish("SurfHeights", function () {
  return SurfHeights.find(); // everything
});