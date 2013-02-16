Meteor.subscribe("verifiedData");

Template.map.north = function(){
var northHeight = SurfHeights.findOne({north:{$exists:true}}, {sort:{createdAt:-1}})
  return northHeight && northHeight.north;
}
Template.map.south = function(){
var southHeight = SurfHeights.findOne({south:{$exists:true}}, {sort:{createdAt:-1}})
  return southHeight && southHeight.south;
}
Template.map.east = function(){
var eastHeight = SurfHeights.findOne({east:{$exists:true}}, {sort:{createdAt:-1}})
  return eastHeight && eastHeight.east;
}
Template.map.west = function(){
var westHeight = SurfHeights.findOne({west:{$exists:true}}, {sort:{createdAt:-1}})
  return westHeight && westHeight.west;
}

//Returns Today's verified Minimum Heights
Template.heightTable.northMin = function(){

var northHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return northHeight && northHeight.north.min;
}
Template.heightTable.southMin = function(){
var southHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return southHeight && southHeight.south.min;
}
Template.heightTable.eastMin = function(){
var eastHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return eastHeight && eastHeight.east.min;
}
Template.heightTable.westMin = function(){
var westHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return westHeight && westHeight.west.min;
}

//Returns Today's verified maximum Heights
Template.heightTable.northMax = function(){
var northHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  
  return northHeight && northHeight.north.max;
}
Template.heightTable.southMax = function(){
var southHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return southHeight && southHeight.south.max;
}
Template.heightTable.eastMax = function(){
var eastHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return eastHeight && eastHeight.east.max;
}
Template.heightTable.westMax = function(){
var westHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return westHeight && westHeight.west.max;
}


//Returns Tomorrow's verified Minimum Heights
Template.heightTable.tomorrowNorthMin = function(){

var northHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})

  return northHeight && northHeight.north.min;
}
Template.heightTable.tomorrowSouthMin = function(){
var southHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return southHeight && southHeight.south.min;
}
Template.heightTable.tomorrowEastMin = function(){
var eastHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return eastHeight && eastHeight.east.min;
}
Template.heightTable.tomorrowWestMin = function(){
var westHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return westHeight && westHeight.west.min;
}

//Returns Tomorrow's verified maximum Heights
Template.heightTable.tomorrowNorthMax = function(){
var northHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  
  return northHeight && northHeight.north.max;
}
Template.heightTable.tomorrowSouthMax = function(){
var southHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return southHeight && southHeight.south.max;
}
Template.heightTable.tomorrowEastMax = function(){
var eastHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return eastHeight && eastHeight.east.max;
}
Template.heightTable.tomorrowWestMax = function(){
var westHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return westHeight && westHeight.west.max;
}
