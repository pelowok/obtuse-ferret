/**
 * Created by pelowok on 10/30/15.
 */


app.directive('discretebar1', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="discretebar1"><svg></svg></div>',
        link: function (scope, element, attrs) {

            var data = JSON.parse(attrs.discreteBarChartData);

            console.log('discreteBarChartData : ' + discreteBarChartData);


            nv.addGraph(function() {
                var chart = nv.models.discreteBarChart()
                    .x(function(d) { return d.label })
                    .y(function(d) { return d.value })
                    .staggerLabels(false)
                    .tooltips(true)
                    .showValues(true)


                d3.select('#discretebar1 svg')
                    .datum(data)
                    .transition().duration(500)
                    .call(chart)
                ;

                nv.utils.windowResize(chart.update);

                return chart;
            });
        }
    };
});