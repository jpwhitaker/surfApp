
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
      return line.match(/(Surf along north)/g) == "Surf along north" 
      || line.match(/(Surf along south)/g) == "Surf along south"
      || line.match(/(Surf along east)/g) == "Surf along east"
      || line.match(/(Surf along west)/g) == "Surf along west"

    })

    grabDirections = grabDirections.slice(0,4);

    var dirWaveHeight = _.map(grabDirections, function(line){
      return [
        line.match(/(north)/g) 
        || line.match(/(south)/g)
        || line.match(/(east)/g)
        || line.match(/(west)/g),
        line.match((/\d{1,2}( to )\d{1,2}/g))
        || line.match(/\d{1,2}( feet through )/g)
        || line.match(/\d{1,2}( ft or less )/g)
        || line.match(/\d{1,2}( feet or less )/g)
        || line.match(/( flat to )\d{1,2}/g)
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
    
    console.log(grabDirections, '!!!!!!!!!!!!');
    console.log(dirWaveHeightValues)
    console.log("------",dirWaveHeightValues[0][1][0],dirWaveHeightValues[0][1][0][0])
    var unconfirmedData = {
      today: {},
      tomorrow: {},
      todaySorted: function(){
        var that = this
        _.each(dirWaveHeightValues,function(value, index, arry){
          that.today[arry[index][0]] = {min:arry[index][1][0][0], max:arry[index][1][0][1]}
        })
      },
      tomorrowSorted: function(){
        var that = this
        _.each(dirWaveHeightValues,function(value, index, arry){
            if(arry[index][1][1]){
          that.tomorrow[arry[index][0]] = {min:arry[index][1][1][0], max:arry[index][1][1][1]}
          } else {
          that.tomorrow[arry[index][0]] = {min:arry[index][1][0][0], max:arry[index][1][0][1]}

          }

          
        })
        that.today.today = Date.now();
        that.tomorrow.tomorrow = Date.now();
      }

    }

    unconfirmedData.todaySorted();
    unconfirmedData.tomorrowSorted();
    console.log("today!",unconfirmedData.today,'---------')
    console.log(unconfirmedData.tomorrow)


    SurfHeights.insert(unconfirmedData.today)
    SurfHeights.insert(unconfirmedData.tomorrow)

  
  }
}

  

