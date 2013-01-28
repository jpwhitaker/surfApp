Meteor.startup(function () {

  if (Meteor.isClient){
    
    Template.adminPage.northMin = function(){
    var northHeight = SurfHeights.findOne({north:{$exists:true}}, {sort:{createdAt:-1}})
      return northHeight.north[0];
    }
    Template.adminPage.northMax = function(){
    var northHeight = SurfHeights.findOne({north:{$exists:true}}, {sort:{createdAt:-1}})
      return northHeight.north[1];
    }

    Template.adminPage.southMin = function(){
    var southHeight = SurfHeights.findOne({south:{$exists:true}}, {sort:{createdAt:-1}})
      return southHeight.south[0];
    }
    Template.adminPage.southMax = function(){
    var southHeight = SurfHeights.findOne({south:{$exists:true}}, {sort:{createdAt:-1}})
      return southHeight.south[1];
    }

    Template.adminPage.eastMin = function(){
    var eastHeight = SurfHeights.findOne({east:{$exists:true}}, {sort:{createdAt:-1}})
      return eastHeight.east[0];
    }
    Template.adminPage.eastMax = function(){
    var eastHeight = SurfHeights.findOne({east:{$exists:true}}, {sort:{createdAt:-1}})
      return eastHeight.east[1];
    }

    Template.adminPage.westMin = function(){
    var westHeight = SurfHeights.findOne({west:{$exists:true}}, {sort:{createdAt:-1}})
      return westHeight.west[0];
    }
    Template.adminPage.westMax = function(){
    var westHeight = SurfHeights.findOne({west:{$exists:true}}, {sort:{createdAt:-1}})
      return westHeight.west[1];
    }



  }

})