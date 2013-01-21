SurfHeights = new Meteor.Collection("surfheights");

  if (Meteor.isServer) {
  Meteor.methods({scrapeData:scrapeData})

  function scrapeData(abc) {
    Meteor.http.call("GET", 'http://www.prh.noaa.gov/hnl/xml/Surf.xml', function (err,res){
      parseData(res.content)

    });
  }

  setInterval(scrapeData(),3600000);


  function parseData(xml) {
  // var surf = xml.match((/\d{1,2}( to )\d{1,2}/g))
  // var surf2 = xml.match(/((NORTH)|(SOUTH)|(EAST)|(WEST))/g)
  var splitLines = xml.split(/\r\n|\r|\n/)
  var grabDirections = _.filter(splitLines, function(line){ 
    return line.match(/(north)/g) == "north" 
    || line.match(/(south)/g) == "south"
    || line.match(/(east)/g) == "east"
    || line.match(/(west)/g) == "west"
  }) 
  console.log(grabDirections)

  var dirWaveHeight = _.map(grabDirections, function(line){
  return [
    line.match(/(north)/g) 
    || line.match(/(south)/g)
    || line.match(/(east)/g)
    || line.match(/(west)/g),
    line.match((/\d{1,2}( to )\d{1,2}/g))
    || line.match(/\d{1,2}( feet or )/g)
    ] 
});

  // console.log(dirWaveHeight)

  var dirWaveHeightValues = _.map(dirWaveHeight, function(array){
    var heights = _.map(array[1], function(heights){
      var numHeights = heights.match(/\d{1,2}/g)
      var toNum = _.map(numHeights, function(nums){
        return +nums
      })
      // console.log(toNum)
     
      return toNum
    })
    // console.log(heights)
    return [array[0], heights]
  })
  
  console.log(dirWaveHeightValues[0])

  var dir1 = {createdAt:Date.now()}
  var dir2 = {createdAt:Date.now()}
  var dir3 = {createdAt:Date.now()}
  var dir4 = {createdAt:Date.now()}

  dir1[dirWaveHeightValues[0][0]] = dirWaveHeightValues[0][1][0];
  dir2[dirWaveHeightValues[1][0]] = dirWaveHeightValues[1][1][0];
  dir3[dirWaveHeightValues[2][0]] = dirWaveHeightValues[2][1][0];
  dir4[dirWaveHeightValues[3][0]] = dirWaveHeightValues[3][1][0];


  // console.log(dir1, dir2, dir3, dir4)
  SurfHeights.insert(dir1);
  SurfHeights.insert(dir2);
  SurfHeights.insert(dir3);
  SurfHeights.insert(dir4);
  



  // console.log( dir1, dir2, dir3, dir4)

  }
}

  

