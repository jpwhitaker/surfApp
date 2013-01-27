SurfHeights = new Meteor.Collection("surfheights");

if (Meteor.isServer) {
  Meteor.methods({scrapeData:scrapeData})

  function scrapeData(abc) {
    Meteor.http.call("GET", 'http://www.prh.noaa.gov/hnl/pages/SRF.php', function (err,res){
    parseData(res.content)});
  }

  setInterval(scrapeData(),3600000);


  function parseData(xml) {
    var splitLines = xml.split(/(<p>)/g)
    var grabDirections = _.filter(splitLines, function(line){ 
      return line.match(/(along north)/g) == "along north" 
      || line.match(/(along south)/g) == "along south"
      || line.match(/(along east)/g) == "along east"
      || line.match(/(along west)/g) == "along west"

    }) 

    var dirWaveHeight = _.map(grabDirections, function(line){
      return [
        line.match(/(north)/g) 
        || line.match(/(south)/g)
        || line.match(/(east)/g)
        || line.match(/(west)/g),
        line.match((/\d{1,2}( to )\d{1,2}/g))
        || line.match(/\d{1,2}( feet through )/g)
      ] 
    });

      

    
    var dirWaveHeightValues = _.map(dirWaveHeight, function(array){
      var heights = _.map(array[1], function(heights){
        var numHeights = heights.match(/\d{1,2}/g)
          var toNum = _.map(numHeights, function(nums){
            return +nums
          })
          return toNum
        })
      return [array[0], heights]
    })
    
    var dir1 = {createdAt:Date.now()}
    var dir2 = {createdAt:Date.now()}
    var dir3 = {createdAt:Date.now()}
    var dir4 = {createdAt:Date.now()}

    dir1[dirWaveHeightValues[0][0]] = dirWaveHeightValues[0][1][0];
    dir2[dirWaveHeightValues[1][0]] = dirWaveHeightValues[1][1][0];
    dir3[dirWaveHeightValues[2][0]] = dirWaveHeightValues[2][1][0];
    dir4[dirWaveHeightValues[3][0]] = dirWaveHeightValues[3][1][0];
      console.log(dir1)

    SurfHeights.insert(dir1);
    SurfHeights.insert(dir2);
    SurfHeights.insert(dir3);
    SurfHeights.insert(dir4);
  }
}

  

