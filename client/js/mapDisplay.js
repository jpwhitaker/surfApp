Meteor.subscribe("verifiedData");

Template.map.north = function(){
var northHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return northHeight && northHeight.north.min;
}
Template.map.south = function(){
var southHeight = SurfHeights.findOne({south:{$exists:true}}, {sort:{createdAt:-1}})
  return southHeight && southHeight.south;
}
Template.map.east = function(){
var eastHeight = SurfHeights.findOne({east:{$exists:true}}, {sort:{createdAt:-1}})
  return eastHeight && eastHeight.east;
}
Template.map.west = function(){
var westHeight = SurfHeights.findOne({west:{$exists:true}}, {sort:{createdAt:-1}})
  return westHeight && westHeight.west;
}

//map svg
Meteor.startup(function () {
  var svg = d3.select(".circleSVG").append('svg')


  svg.append("circle")
      .attr("class", "dot")
      .attr("cx", + 115)
      .attr("cy", + 30)
      .attr("r", 10)
      .attr('fill', '#0099bb');
  setInterval(function() {
    svg.append("circle")
        .attr("class", "ring")
        .attr("transform", "translate(115,30)")
        .attr("r", 30)
        .style("stroke-width", 3)
        .style("stroke", "#0099bb")
        .style("stroke-opacity", 1e-6)
        .attr('fill', 'none')
      .transition()
        .ease("linear")
        .duration(6000)
        .style("stroke-opacity", 1)
        .style("stroke-width", 1)
        .style("stroke", "#0099bb")
        .attr("r", 6)
        .attr('fill', 'none')
        .remove();
  }, 2000);

    svg.append("circle")
      .attr("class", "dot")
      .attr("cx", + 50)
      .attr("cy", + 170)
      .attr("r", 10)
      .attr('fill', '#0099bb');
  setInterval(function() {
    svg.append("circle")
        .attr("class", "ring")
        .attr("transform", "translate(50,170)")
        .attr("r", 30)
        .style("stroke-width", 3)
        .style("stroke", "#0099bb")
        .style("stroke-opacity", 1e-6)
        .attr('fill', 'none')
      .transition()
        .ease("linear")
        .duration(6000)
        .style("stroke-opacity", 1)
        .style("stroke-width", 1)
        .style("stroke", "#0099bb")
        .attr("r", 6)
        .attr('fill', 'none')
        .remove();
  }, 2000);

      svg.append("circle")
      .attr("class", "dot")
      .attr("cx", + 185)
      .attr("cy", + 220)
      .attr("r", 10)
      .attr('fill', '#0099bb');
  setInterval(function() {
    svg.append("circle")
        .attr("class", "ring")
        .attr("transform", "translate(185,220)")
        .attr("r", 30)
        .style("stroke-width", 3)
        .style("stroke", "#0099bb")
        .style("stroke-opacity", 1e-6)
        .attr('fill', 'none')
      .transition()
        .ease("linear")
        .duration(6000)
        .style("stroke-opacity", 1)
        .style("stroke-width", 1)
        .style("stroke", "#0099bb")
        .attr("r", 6)
        .attr('fill', 'none')
        .remove();
  }, 2000);

        svg.append("circle")
      .attr("class", "dot")
      .attr("cx", + 245)
      .attr("cy", + 185)
      .attr("r", 10)
      .attr('fill', '#0099bb')
      .attr('opacity', 50);

  setInterval(function() {
    svg.append("circle")
        .attr("class", "ring")
        .attr("transform", "translate(245,185)")
        .attr("r", 30)
        .style("stroke-width", 3)
        .style("stroke", "#0099bb")
        .style("stroke-opacity", 1e-6)
        .attr('fill', 'none')
      .transition()
        .ease("linear")
        .duration(6000)
        .style("stroke-opacity", 1)
        .style("stroke-width", 1)
        .style("stroke", "#0099bb")
        .attr("r", 6)
        .attr('fill', 'none')
        .remove();
  }, 2000);


  // svg.append("svg:text")
  //     .attr("class", "text1")
  //     .attr("x", 215)
  //     .attr("y", 185)
  //     .attr('fill', 'white')
  //     .text('12-16');


})


//Returns Today's verified Minimum Heights
Template.heightTable.northMin = function(){

var northHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return northHeight && northHeight.north.min;
}
Template.heightTable.southMin = function(){
var southHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return southHeight && southHeight.south.min;
}
Template.heightTable.eastMin = function(){
var eastHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return eastHeight && eastHeight.east.min;
}
Template.heightTable.westMin = function(){
var westHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return westHeight && westHeight.west.min;
}

//Returns Today's verified maximum Heights
Template.heightTable.northMax = function(){
var northHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  
  return northHeight && northHeight.north.max;
}
Template.heightTable.southMax = function(){
var southHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return southHeight && southHeight.south.max;
}
Template.heightTable.eastMax = function(){
var eastHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return eastHeight && eastHeight.east.max;
}
Template.heightTable.westMax = function(){
var westHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  return westHeight && westHeight.west.max;
}


//Returns Tomorrow's verified Minimum Heights
Template.heightTable.tomorrowNorthMin = function(){

var northHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})

  return northHeight && northHeight.north.min;
}
Template.heightTable.tomorrowSouthMin = function(){
var southHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return southHeight && southHeight.south.min;
}
Template.heightTable.tomorrowEastMin = function(){
var eastHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return eastHeight && eastHeight.east.min;
}
Template.heightTable.tomorrowWestMin = function(){
var westHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return westHeight && westHeight.west.min;
}

//Returns Tomorrow's verified maximum Heights
Template.heightTable.tomorrowNorthMax = function(){
var northHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  
  return northHeight && northHeight.north.max;
}
Template.heightTable.tomorrowSouthMax = function(){
var southHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return southHeight && southHeight.south.max;
}
Template.heightTable.tomorrowEastMax = function(){
var eastHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return eastHeight && eastHeight.east.max;
}
Template.heightTable.tomorrowWestMax = function(){
var westHeight = verifiedData.findOne({tomorrow:{$exists:true}}, {sort:{tomorrow:-1}})
  return westHeight && westHeight.west.max;
}
