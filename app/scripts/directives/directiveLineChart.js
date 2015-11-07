//app.directive('lnLineChart', function () {
app.directive('linechart', function () {

    console.log('linechart directive fired');

    return {
        restrict: 'E',
        replace: true,
        //template: '<div id="lnLineChart"><svg></svg></div>',
        template: '<div id="linechart"><svg></svg></div>',
        link: function (scope, element, attrs) {

            var data = JSON.parse(attrs.lineChartData);

            console.log('lineChartData : ' + data);

            nv.addGraph(function () {
                var chart = nv.models.lineChart()
                        .useInteractiveGuideline(true)
                        .height(300)
                    ;

                chart.xAxis
                    .axisLabel('Time (ms)')

                ;

                chart.yAxis
                    .axisLabel('y axis value')
                    .tickFormat(d3.format(''))
                ;

                d3.select('#linechart svg')
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
