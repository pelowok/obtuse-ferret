
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
