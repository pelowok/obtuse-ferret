/**
 * Created by pelowok on 10/14/15.
 */



var data = [];
var category = ticket.details.software_category;
var counts = ticket.details.software_counts;
var i;
for ( i=0; i< category.length; i++){
    data.push({'label': category[i], 'value': counts[i]})
}

nv.addGraph(function() {
    var chart = nv.models.pieChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .showLabels(true);

    d3.select("#chart svg")
        .datum(data)
        .transition().duration(100)
        .call(chart);

    return chart;
});
