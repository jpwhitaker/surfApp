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

//Returns Today's Unconfirmed Minimum Heights
Template.heightTable.northMin = function(){

var northHeight = SurfHeights.findOne({north:{$exists:true}}, {sort:{createdAt:-1}})
    console.log(northHeight,"LOGGING")

  return northHeight && northHeight.north.min;
}
Template.heightTable.southMin = function(){
var southHeight = SurfHeights.findOne({south:{$exists:true}}, {sort:{createdAt:-1}})
  return southHeight && southHeight.south.min;
}
Template.heightTable.eastMin = function(){
var eastHeight = SurfHeights.findOne({east:{$exists:true}}, {sort:{createdAt:-1}})
  return eastHeight && eastHeight.east.min;
}
Template.heightTable.westMin = function(){
var westHeight = SurfHeights.findOne({west:{$exists:true}}, {sort:{createdAt:-1}})
  return westHeight && westHeight.west.min;
}

//Returns Today's Unconfirmed maximum Heights
Template.heightTable.northMax = function(){
var northHeight = SurfHeights.findOne({north:{$exists:true}}, {sort:{createdAt:1}})
  
  return northHeight && northHeight.north.max;
}
Template.heightTable.southMax = function(){
var southHeight = SurfHeights.findOne({south:{$exists:true}}, {sort:{createdAt:-1}})
  return southHeight && southHeight.south.max;
}
Template.heightTable.eastMax = function(){
var eastHeight = SurfHeights.findOne({east:{$exists:true}}, {sort:{createdAt:-1}})
  return eastHeight && eastHeight.east.max;
}
Template.heightTable.westMax = function(){
var westHeight = SurfHeights.findOne({west:{$exists:true}}, {sort:{createdAt:-1}})
  return westHeight && westHeight.west.max;
}
