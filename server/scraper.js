Meteor.methods({scrapeData:scrapeData})

function scrapeData(abc) {
  Meteor.http.call("GET", 'http://www.prh.noaa.gov/hnl/xml/Surf.xml', function (err,res){
    console.log(res.content)

  });
}

setInterval(scrapeData(),3600000);

