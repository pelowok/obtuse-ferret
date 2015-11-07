/**
 * Created by pelowok on 10/30/15.
 */
app.directive('stackedbar1', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="stackedbar1"><svg></svg></div>',
        link: function (scope, element, attrs) {

            var stackedBarChartData = JSON.parse(attrs.data);

            console.log('stackedBarChartData : ' + stackedBarChartData);


            nv.addGraph(function() {
                var chart = nv.models.multiBarChart();

                chart.xAxis
                    .tickFormat(d3.format(',f'));

                chart.yAxis
                    .tickFormat(d3.format(',.1f'));

                chart.multibar.stacked(true);
                chart.showControls(false);

                d3.select('#stackedbar1 svg')
                    .datum(stackedBarChartData())

                    .transition().duration(500)
                    .call(chart)
                ;

                nv.utils.windowResize(chart.update);

                return chart;
            });
        }
    };
});