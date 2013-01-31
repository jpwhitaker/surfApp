Meteor.startup(function () {

  if (Meteor.isClient){
    
    Template.adminPage.northMin = function(){
    var northHeight = SurfHeights.findOne({north:{$exists:true}}, {sort:{createdAt:-1}})
    console.log(northHeight)
      return northHeight && northHeight.north.min;
    }
    Template.adminPage.northMax = function(){
    var northHeight = SurfHeights.findOne({north:{$exists:true}}, {sort:{createdAt:-1}})
      return northHeight && northHeight.north.max;
    }

    Template.adminPage.southMin = function(){
    var southHeight = SurfHeights.findOne({south:{$exists:true}}, {sort:{createdAt:-1}})
      return southHeight && southHeight.south.min;
    }
    Template.adminPage.southMax = function(){
    var southHeight = SurfHeights.findOne({south:{$exists:true}}, {sort:{createdAt:-1}})
      return southHeight && southHeight.south.max;
    }

    Template.adminPage.eastMin = function(){
    var eastHeight = SurfHeights.findOne({east:{$exists:true}}, {sort:{createdAt:-1}})
      return eastHeight && eastHeight.east.min;
    }
    Template.adminPage.eastMax = function(){
    var eastHeight = SurfHeights.findOne({east:{$exists:true}}, {sort:{createdAt:-1}})
      return eastHeight && eastHeight.east.max;
    }

    Template.adminPage.westMin = function(){
    var westHeight = SurfHeights.findOne({west:{$exists:true}}, {sort:{createdAt:-1}})
      return westHeight && westHeight.west.min;
    }
    Template.adminPage.westMax = function(){
    var westHeight = SurfHeights.findOne({west:{$exists:true}}, {sort:{createdAt:-1}})
      return westHeight && westHeight.west.max;
    }
  //tomorrow's unverified heights
    Template.adminPage.tomorrowNorthMin = function(){
    var northHeight = SurfHeights.findOne({tomorrowNorth:{$exists:true}}, {sort:{createdAt:-1}})
    console.log(northHeight.north,"YOOLLOOOO!")
      return northHeight && northHeight.north.tomorrowMin;
    }
    Template.adminPage.tomorrowNorthMax = function(){
    var northHeight = SurfHeights.findOne({tomorrowNorth:{$exists:true}}, {sort:{createdAt:-1}})
      return northHeight && northHeight.north.tomorrowMax;
    }

    Template.adminPage.tomorrowSouthMin = function(){
    var southHeight = SurfHeights.findOne({tomorrowSouth:{$exists:true}}, {sort:{createdAt:-1}})
      return southHeight && southHeight.south.tomorrowMin;
    }
    Template.adminPage.tomorrowSouthMax = function(){
    var southHeight = SurfHeights.findOne({tomorrowSouth:{$exists:true}}, {sort:{createdAt:-1}})
      return southHeight && southHeight.south.tomorrowMax;
    }

    Template.adminPage.tomorrowEastMin = function(){
    var eastHeight = SurfHeights.findOne({tomorrowEast:{$exists:true}}, {sort:{createdAt:-1}})
      return eastHeight && eastHeight.east.tomorrowMin;
    }
    Template.adminPage.tomorrowEastMax = function(){
    var eastHeight = SurfHeights.findOne({tomorrowEast:{$exists:true}}, {sort:{createdAt:-1}})
      return eastHeight && eastHeight.east.tomorrowMax;
    }

    Template.adminPage.tomorrowWestMin = function(){
    var westHeight = SurfHeights.findOne({tomorrowWest:{$exists:true}}, {sort:{createdAt:-1}})
      return westHeight && westHeight.west.tomorrowMin;
    }
    Template.adminPage.tomorrowWestMax = function(){
    var westHeight = SurfHeights.findOne({tomorrowWest:{$exists:true}}, {sort:{createdAt:-1}})
      return westHeight && westHeight.west.tomorrowMax;
    }

  }

})