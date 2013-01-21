SurfHeights = new Meteor.Collection("surfheights");


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

var northshore = directionalWaveHeights[0].shore[0];
var northshore2 = directionalWaveHeights[0].heights[0]
SurfHeights.insert({shore:northshore, heights:northshore2})
console.log(northshore, northshore2)

}




