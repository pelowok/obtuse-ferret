/**
 * Created by pelowok on 10/20/15.
 */

app.directive('bubblescatterchart', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="bubblescatterchart"><svg></svg></div>',
        link: function (scope, element, attrs) {

            var data = JSON.parse(attrs.bubbleScatterChartData);

            console.log('bubbleScatterChartData : ' + data);

            nv.addGraph(function () {
                var chart = nv.models.scatterChart()
                    .showDistX(true)
                    .showDistY(true)
                    .color(d3.scale.category10().range());

                chart.xAxis.tickFormat(d3.format('.f'));
                chart.yAxis.tickFormat(d3.format('f'));

                d3.select('#bubblescatterchart svg')
                    .datum(data)
                    .transition().duration(500)
                    .call(chart);

                console.log('appdirective bubblescatterchart catches data = ' + data);

                return chart;

            });
        }
    };
});

