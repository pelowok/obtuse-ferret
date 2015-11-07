/**
 * Created by pelowok on 11/5/15.
 */

app.directive('piechart', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="piechart"><svg></svg></div>',
        link: function (scope, element, attrs) {

            var data = JSON.parse(attrs.pieChartData);

            console.log('pieChartData : ' + data);

            nv.addGraph(function () {
                var chart = nv.models.pieChart()
                        .x(function (d) {
                            return d.label
                        })
                        .y(function (d) {
                            return d.value
                        })
                        .showLabels(true)
                        .labelThreshold(.05)
                        .labelType("percent")
                        .donut(false)
                        .donutRatio(0.5)
                        .height(400)
                    ;

                d3.select("#piechart svg")
                    .datum(data)
                    .transition().duration(350)
                    .call(chart);

                return chart;

            });
        }
    };
})
