Meteor.subscribe("verifiedData");
 
//map svg USING TIMEOUT

Meteor.setTimeout(function () {
  var svg = d3.select(".circleSVG").append('svg')
  var surfHeight = verifiedData.findOne({today:{$exists:true}}, {sort:{today:-1}})
  var northMax = surfHeight && surfHeight.north.max;
  var southMax = surfHeight && surfHeight.south.max;
  var eastMax =surfHeight &&surfHeight.east.max;
  var westMax =surfHeight &&surfHeight.west.max;
  var dirSum = (Number(northMax)+Number(southMax)+Number(eastMax)+Number(westMax))
  console.log(dirSum);

  var largestHeight = Math.max(northMax,southMax,eastMax,westMax)

  var dotMax = 6;
  var ringMax = 19;

  var northDot = +northMax / largestHeight * dotMax + 2;
  var southDot = +southMax / largestHeight * dotMax +2;
  var eastDot = +eastMax / largestHeight *dotMax +2;
  var westDot = +westMax / largestHeight *dotMax +2;

  var northRing = +northMax / largestHeight * ringMax +10;
  var southRing = +southMax / largestHeight * ringMax +10;
  var eastRing = +eastMax / largestHeight * ringMax +10;
  var westRing = +westMax / largestHeight * ringMax +10;

  console.log(northDot, southDot, eastDot, westDot, largestHeight)
  console.log(northRing, southRing, eastRing, westRing, largestHeight)

  svg.append("circle")
      .attr("class", "north")
      .attr("cx", + 115)
      .attr("cy", + 30)
      .attr("r", northDot)
      .attr('fill', '#0099bb')
  setInterval(function() {
    svg.append("circle")
        .attr("class", "northRing")
        .attr("transform", "translate(115,30)")
        .attr("r", northDot)
        .style("stroke-width", 3)
        .style("stroke", "#0099bb")
        .style("stroke-opacity", 1e-6)
        .attr('fill', '#0099bb')
        .style("opacity", 1)

      .transition()
        .ease("linear")
        .duration(6000)
        .style("stroke-opacity", 1)
        .style("stroke-width", 1)
        .style("stroke", "#0099bb")
        .attr('fill', '#0099bb')
        .attr("r", northRing)
        .style("opacity", 1e-6)
        .remove();
  }, 2000);

    svg.append("circle")
      .attr("class", "west")
      .attr("cx", + 50)
      .attr("cy", + 170)
      .attr("r", westDot)
      .attr('fill', '#0099bb');
  setInterval(function() {
    svg.append("circle")
        .attr("class", "westRing")
        .attr("transform", "translate(50,170)")
        .attr("r", westDot)
        .style("stroke-width", 3)
        .style("stroke", "#0099bb")
        .style("stroke-opacity", 1e-6)
        .attr('fill', '#0099bb')
        .style("opacity", 1)
      .transition()
        .ease("linear")
        .duration(6000)
        .style("stroke-opacity", 1)
        .style("stroke-width", 1)
        .style("stroke", "#0099bb")
        .attr('fill', '#0099bb')
        .attr("r", westRing)
        .style("opacity", 1e-6)
        .remove();
  }, 2000);

      svg.append("circle")
      .attr("class", "south")
      .attr("cx", + 185)
      .attr("cy", + 220)
      .attr("r", southDot)
      .attr('fill', '#0099bb');
  setInterval(function() {
    svg.append("circle")
        .attr("class", "southRing")
        .attr("transform", "translate(185,220)")
        .attr("r", southDot)
        .style("stroke-width", 3)
        .style("stroke", "#0099bb")
        .style("stroke-opacity", 1e-6)
        .attr('fill', '#0099bb')
        .style("opacity", 1)
      .transition()
        .ease("linear")
        .duration(6000)
        .style("stroke-opacity", 1)
        .style("stroke-width", 1)
        .style("stroke", "#0099bb")
        .attr('fill', '#0099bb')
        .attr("r", southRing)
        .style("opacity", 1e-6)
        .remove();
  }, 2000);

        svg.append("circle")
      .attr("class", "east")
      .attr("cx", + 245)
      .attr("cy", + 185)
      .attr("r", eastDot)
      .attr('fill', '#0099bb')
      .attr('opacity', 50);

  setInterval(function() {
    svg.append("circle")
        .attr("class", "eastRing")
        .attr("transform", "translate(245,185)")
        .attr("r", eastDot)
        .style("stroke-width", 3)
        .style("stroke", "#0099bb")
        .style("stroke-opacity", 1e-6)
        .attr('fill', '#0099bb')
        .style("opacity", 1)
      .transition()
        .ease("linear")
        .duration(6000)
        .style("stroke-opacity", 1)
        .style("stroke-width", 1)
        .style("stroke", "#0099bb")
        .attr('fill', '#0099bb')
        .attr("r", eastRing)
        .style("opacity", 1e-6)
        .remove();
  }, 2000);


  // svg.append("svg:text")
  //     .attr("class", "text1")
  //     .attr("x", 215)
  //     .attr("y", 185)
  //     .attr('fill', 'white')
  //     .text('12-16');


},1000)
