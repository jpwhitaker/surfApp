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
  // console.log(grabDirections)

  var directionalWaveHeights = _.map(grabDirections, function(line){
  return {
    shore:
    line.match(/(north)/g) 
    || line.match(/(south)/g)
    || line.match(/(east)/g)
    || line.match(/(west)/g), 
    heights:
    line.match((/\d{1,2}( to )\d{1,2}/g))

  }
  }) ;

  var dir1 = {createdAt:Date.now()}
  var dir2 = {createdAt:Date.now()}
  var dir3 = {createdAt:Date.now()}
  var dir4 = {createdAt:Date.now()}
  dir1[directionalWaveHeights[0].shore[0]] = directionalWaveHeights[0].heights[0];
  dir2[directionalWaveHeights[1].shore[0]] = directionalWaveHeights[0].heights[1];
  dir3[directionalWaveHeights[2].shore[0]] = directionalWaveHeights[0].heights[2];
  dir4[directionalWaveHeights[3].shore[0]] = directionalWaveHeights[0].heights[3];

  SurfHeights.insert(dir1);
  SurfHeights.insert(dir2);
  SurfHeights.insert(dir3);
  SurfHeights.insert(dir4);
  



  console.log( dir1, dir2, dir3, dir4)

  }
}

  

