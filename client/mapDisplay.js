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

