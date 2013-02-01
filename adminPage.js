verifiedData = new Meteor.Collection("verifiedData");
Meteor.startup(function () {

  if (Meteor.isClient){
    
    Template.adminPage.northMin = function(){
    var northHeight = SurfHeights.findOne({today:{$exists:true}}, {sort:{today:-1}})
    console.log(northHeight)
      return northHeight && northHeight.north.min;
    }
    Template.adminPage.northMax = function(){
    var northHeight = SurfHeights.findOne({today:{$exists:true}}, {sort:{today:-1}})
      return northHeight && northHeight.north.max;
    }

    Template.adminPage.southMin = function(){
    var southHeight = SurfHeights.findOne({today:{$exists:true}}, {sort:{today:-1}})
      return southHeight && southHeight.south.min;
    }
    Template.adminPage.southMax = function(){
    var southHeight = SurfHeights.findOne({today:{$exists:true}}, {sort:{today:-1}})
      return southHeight && southHeight.south.max;
    }

    Template.adminPage.eastMin = function(){
    var eastHeight = SurfHeights.findOne({today:{$exists:true}}, {sort:{today:-1}})
      return eastHeight && eastHeight.east.min;
    }
    Template.adminPage.eastMax = function(){
    var eastHeight = SurfHeights.findOne({today:{$exists:true}}, {sort:{today:-1}})
      return eastHeight && eastHeight.east.max;
    }

    Template.adminPage.westMin = function(){
    var westHeight = SurfHeights.findOne({today:{$exists:true}}, {sort:{today:-1}})
      return westHeight && westHeight.west.min;
    }
    Template.adminPage.westMax = function(){
    var westHeight = SurfHeights.findOne({today:{$exists:true}}, {sort:{today:-1}})
      return westHeight && westHeight.west.max;
    }
  //tomorrow's unverified heights
    Template.adminPage.tomorrowNorthMin = function(){
    var northHeight = SurfHeights.findOne({tomorrow:{$exists:true}}, {sort:{createdAt:-1}})
    console.log("Yooooloooo", 
      northHeight && northHeight.north.tomorrowMin,"YOOLLOOOO!")
      return northHeight && northHeight.north.min;
    }
    Template.adminPage.tomorrowNorthMax = function(){
    var northHeight = SurfHeights.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
      console.log(northHeight && northHeight)
      return northHeight && northHeight.north.max;
    }

    Template.adminPage.tomorrowSouthMin = function(){
    var southHeight = SurfHeights.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
      return southHeight && southHeight.south.min;
    }
    Template.adminPage.tomorrowSouthMax = function(){
    var southHeight = SurfHeights.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
      return southHeight && southHeight.south.max;
    }

    Template.adminPage.tomorrowEastMin = function(){
    var eastHeight = SurfHeights.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
      return eastHeight && eastHeight.east.min;
    }
    Template.adminPage.tomorrowEastMax = function(){
    var eastHeight = SurfHeights.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
      return eastHeight && eastHeight.east.max;
    }

    Template.adminPage.tomorrowWestMin = function(){
    var westHeight = SurfHeights.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
      return westHeight && westHeight.west.min;
    }
    Template.adminPage.tomorrowWestMax = function(){
    var westHeight = SurfHeights.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
      return westHeight && westHeight.west.max;
    }
  
  var todayVerified = {today:Date.now()};
  var tomorrowVerified = {tomorrow:Date.now()};

  Template.adminPage.events({
    'click .verifyData' : function() {
      //today
      todayVerified.north = 
        {min:document.querySelector('.todayMinNorth').value,
         max:document.querySelector('.todayMaxNorth').value}

      todayVerified.south = 
        {min:document.querySelector('.todayMinSouth').value,
         max:document.querySelector('.todayMaxSouth').value}

      todayVerified.east = 
        {min:document.querySelector('.todayMinEast').value,
         max:document.querySelector('.todayMaxEast').value}

      todayVerified.west = 
        {min:document.querySelector('.todayMinWest').value,
         max:document.querySelector('.todayMaxWest').value}

      //tomorrow
      tomorrowVerified.north = 
        {min:document.querySelector('.tomorrowMinNorth').value,
         max:document.querySelector('.tomorrowMaxNorth').value}

      tomorrowVerified.south = 
        {min:document.querySelector('.tomorrowMinSouth').value,
         max:document.querySelector('.tomorrowMaxSouth').value}

      tomorrowVerified.east = 
        {min:document.querySelector('.tomorrowMinEast').value,
         max:document.querySelector('.tomorrowMaxEast').value}

      tomorrowVerified.west = 
        {min:document.querySelector('.tomorrowMinWest').value,
         max:document.querySelector('.tomorrowMaxWest').value}
        

        console.log(todayVerified,tomorrowVerified)
  verifiedData.insert(todayVerified);
  verifiedData.insert(tomorrowVerified);





      }   
    });
  }


})