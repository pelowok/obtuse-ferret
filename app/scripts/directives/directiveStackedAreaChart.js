app.directive('stackedarea1', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="stackedarea1"><svg></svg></div>',
        link: function (scope, element, attrs) {

            var data = JSON.parse(attrs.stackedAreaChartData);

            console.log('stackedAreaChartData : ' + data);

            nv.addGraph(function () {
                var chart = nv.models.stackedAreaChart()
                        .x(function (d) {
                            return d[0]
                        })
                        .y(function (d) {
                            return d[1]
                        })
                        // NVD3 Stacked Area Chart defaults
                        //  .margin = {top: 30, right: 25, bottom: 50, left: 60}
                        //  .width = null
                        //  .height = null
                        //  .color = nv.utils.defaultColor()
                        //  .showControls = true
                        //  .showLegend = true
                        //  .showXAxis = true
                        //  .showYAxis = true
                        //  .rightAlignYAxis = false
                        //  .useInteractiveGuideline = false
                        //  .showTotalInTooltip = true
                        //  .totalLabel = 'TOTAL'
                        //  .x //can be accessed via chart.xScale()
                        //  .y //can be accessed via chart.yScale()
                        //  .state = nv.utils.state()
                        //  .defaultState = null
                        //  .noData = null
                        //  .dispatch = d3.dispatch('stateChange', 'changeState','renderEnd')
                        //  .controlWidth = 250
                        //  .controlOptions = ['Stacked','Stream','Expanded']
                        //  .controlLabels = {}
                        //  .duration = 250
                        .clipEdge(true)
                        .useInteractiveGuideline(true)
                        .showLegend(false)
                        .showControls(false)
                    ;

                chart.xAxis
                    .showMaxMin(false)
                    .tickFormat(d3.format(''));

                chart.yAxis
                    .tickFormat(d3.format(',.f'));

                d3.select('#stackedarea1 svg')
                    .datum(data)
                    .transition().duration(500).call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });
        }
    };
});