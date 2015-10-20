/**
 * Created by pelowok on 10/16/15.
 */

app.directive('linechart', function ($parse) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="linechart"><svg></svg></div>',
        link: function (scope, element, attrs) {

            var data = JSON.parse(attrs.data);

            nv.addGraph(function() {
                var chart = nv.models.lineChart()
                        .useInteractiveGuideline(true)
                        .height(300)
                    ;

                chart.xAxis
                    .axisLabel('Time (ms)')
                    .tickFormat(d3.format(',r'))
                ;

                chart.yAxis
                    .axisLabel('Voltage (v)')
                    .tickFormat(d3.format('.02f'))
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

app.directive('donutpiechart', function ($parse) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="donutpiechart"><svg></svg></div>',
        link: function (scope, element, attrs) {

            var data = JSON.parse(attrs.data);

            nv.addGraph(function() {
                var chart = nv.models.pieChart()
                        .x(function(d) { return d.label })
                        .y(function(d) { return d.value })
                        .showLabels(true)
                        .labelThreshold(.05)
                        .labelType("percent")
                        .donut(true)
                        .donutRatio(0.35)
                        .height(400)
                    ;

                d3.select("#donutpiechart svg")
                    .datum(data)
                    .transition().duration(350)
                    .call(chart);

                return chart;

            });
        }
    };
});

app.directive('bubblescatterchart', function ($parse) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="bubblescatterchart"><svg></svg></div>',
        link: function (scope, element, attrs) {

            // var data = attrs.data;
            var data = JSON.parse(bubblescatterdata);

            console.log('appdirective bubble scatter chart catches data = ' + data);

            nv.addGraph(function() {
                var chart = nv.models.scatterChart()
                    .showDistX(true)
                    .showDistY(true)
                    .color(d3.scale.category10().range());

                chart.xAxis.tickFormat(d3.format('.02f'));
                chart.yAxis.tickFormat(d3.format('.02f'));

                d3.select('#bubblescatterchart svg')
                    .datum(data())
                    .transition().duration(500)
                    .call(chart);

                return chart;

            });
        }
    };
});

//
//
//app.directive('barchart', function ($parse) {
//    return {
//        restrict: 'E',
//        replace: true,
//        template: '<div id="barchart"><svg></svg></div>',
//        link: function (scope, element, attrs) {
//
//            var data = JSON.parse(attrs.data);
//            var width = 300,
//                height = 200;
//
//            var x = d3.scale.linear().range([width, 0]);
//            x.domain([0, d3.max(data, function(d) { return d.close; })]);
//
//            var y = d3.scale.linear().range([height, 0]);
//            y.domain([0, d3.max(data, function(d) { return d.close; })]);
//
//            var chart = d3.select('#barchart svg')
//                .append("div").attr("class", "chart")
//                .selectAll('div')
//                .data(data).enter()
//                .append("div")
//                .transition().ease("elastic")
//                .style("width", function (d) {
//                    return ( d ) + "%";
//                })
//                .text(function (d) {
//                    return d + "%";
//                });
//            return chart;
//        }
//    };
//});




//app.directive('foo', function ($parse) {
//    return {
//        restrict: 'E',
//        replace: true,
//        template: '<div id="bar-chart"></div>',
//        link: function (scope, element, attrs) {
//            var data = attrs.data.split(','),
//                chart = d3.select('#bar-chart')
//                    .append("div").attr("class", "chart")
//                    .selectAll('div')
//                    .data(data).enter()
//                    .append("div")
//                    .transition().ease("elastic")
//                    .style("width", function (d) {
//                        return ( d ) + "%";
//                    })
//                    .text(function (d) {
//                        return d + "%";
//                    });
//        }
//    };
//});