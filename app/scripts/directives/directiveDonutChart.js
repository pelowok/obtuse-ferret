
app.directive('donutchart', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="donutchart"><svg></svg></div>',
        link: function (scope, element, attrs) {

            var data = JSON.parse(attrs.donutChartData);

            console.log('donutChartData : ' + data);

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
                        .donut(true)
                        .donutRatio(0.5)
                        .height(400)
                    ;

                d3.select("#donutchart svg")
                    .datum(data)
                    .transition().duration(350)
                    .call(chart);

                return chart;

            });
        }
    };
})
