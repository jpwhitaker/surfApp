Meteor.methods({scrapeData:scrapeData})

function scrapeData(abc) {
  Meteor.http.call("GET", 'http://www.prh.noaa.gov/hnl/xml/Surf.xml', function (err,res){
    parseData(res.content)

  });
}

setInterval(scrapeData(),3600000);


function parseData(xml) {
var surf = xml.match((/\d{1,2}( to )\d{1,2}/g))
  console.log(surf)
}
