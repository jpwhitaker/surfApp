Meteor.startup(function () {

  if (Meteor.isClient){
    
    Meteor.subscribe("SurfHeights");

    var dirs = ['North', 'South', 'East', 'West'];
    var ranges = ['Min','Max'];


    _.each(dirs, function(dir){
      _.each(ranges, function(range){
        Template.adminPage[dir.toLowerCase() + range] = function(){
          var height = SurfHeights.findOne({today:{$exists:true}}, {sort:{today:-1}})
          return height && height[dir.toLowerCase()][range.toLowerCase()];
        }
      })
    })

  //tomorrow's unverified heights

    _.each(dirs, function(dir){
      _.each(ranges, function(range){
        Template.adminPage['tomorrow'+ dir + range] = function(){
          var height = SurfHeights.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
          return height && height[dir.toLowerCase()][range.toLowerCase()];
        }
      })
    })

  
  var todayVerified = {today:Date.now()};
  var tomorrowVerified = {tomorrow:Date.now()};

  Template.adminPage.events({
    'click .verifyData' : function() {
      //refactor:
      //       _each(['north','south','east','west'], function (dir) {
      //   todayVerified[dir] = {
      //   min:document.querySelector('.todayMin' + dir).value,
      //    max:document.querySelector('.todayMax' + dir).value
      //  }
      // })

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