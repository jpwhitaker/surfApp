//map svg
Meteor.startup(function () {
  var svg = d3.select(".circleSVG").append('svg')


  svg.append("circle")
      .attr("class", "north")
      .attr("cx", + 115)
      .attr("cy", + 30)
      .attr("r", 10)
      .attr('fill', '#0099bb');
  setInterval(function() {
    svg.append("circle")
        .attr("class", "northRing")
        .attr("transform", "translate(115,30)")
        .attr("r", 6)
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
        .attr("r", 31)
        .style("opacity", 1e-6)
        .remove();
  }, 2000);

    svg.append("circle")
      .attr("class", "west")
      .attr("cx", + 50)
      .attr("cy", + 170)
      .attr("r", 10)
      .attr('fill', '#0099bb');
  setInterval(function() {
    svg.append("circle")
        .attr("class", "westRing")
        .attr("transform", "translate(50,170)")
        .attr("r", 6)
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
        .attr("r", 31)
        .style("opacity", 1e-6)
        .remove();
  }, 2000);

      svg.append("circle")
      .attr("class", "south")
      .attr("cx", + 185)
      .attr("cy", + 220)
      .attr("r", 10)
      .attr('fill', '#0099bb');
  setInterval(function() {
    svg.append("circle")
        .attr("class", "southRing")
        .attr("transform", "translate(185,220)")
        .attr("r", 6)
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
        .attr("r", 31)
        .style("opacity", 1e-6)
        .remove();
  }, 2000);

        svg.append("circle")
      .attr("class", "east")
      .attr("cx", + 245)
      .attr("cy", + 185)
      .attr("r", 10)
      .attr('fill', '#0099bb')
      .attr('opacity', 50);

  setInterval(function() {
    svg.append("circle")
        .attr("class", "eastRing")
        .attr("transform", "translate(245,185)")
        .attr("r", 6)
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
        .attr("r", 31)
        .style("opacity", 1e-6)
        .remove();
  }, 2000);


  // svg.append("svg:text")
  //     .attr("class", "text1")
  //     .attr("x", 215)
  //     .attr("y", 185)
  //     .attr('fill', 'white')
  //     .text('12-16');


})
