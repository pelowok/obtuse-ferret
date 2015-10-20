/**
 * Created by pelowok on 10/16/15.
 */

app.controller('DataController', ['$scope',function($scope) {

    $scope.lineChartData = function() {

            var sin = [],
                cos = [];

            var rnd1 = Math.round( Math.random() * 1000),
                rnd2 = Math.round( Math.random() * 100),
                rnd3 = Math.round( Math.random() * 100),
                rnd4 = Math.round( Math.random() * 10 );

            for (var i = 0; i < rnd1; i++) {
                sin.push({x: i, y: Math.sin(i/rnd2)});
                cos.push({x: i, y: rnd4 * Math.cos(i/rnd3)});
            }

            var data = [
                {
                    values: sin,
                    key: 'Sine Wave',
                    color: '#ff7f0e'
                },
                {
                    values: cos,
                    key: 'Cosine Wave',
                    color: '#2ca02c'
                }
            ];

        return data;

    };

    $scope.donutPieChartData = function() {

        var data = [
            {
                "label": "Lorem",
                "value" : Math.round( Math.random() * 1000 )
            } ,
            {
                "label": "Ipsum",
                "value" : Math.round( Math.random() * 1000 )
            } ,
            {
                "label": "Dolor",
                "value" : Math.round( Math.random() * 1000 )
            } ,
            {
                "label": "Et",
                "value" : Math.round( Math.random() * 1000 )
            } ,
            {
                "label": "Surod",
                "value" : Math.round( Math.random() * 1000 )
            } ,
            {
                "label": "Dret",
                "value" : Math.round( Math.random() * 1000 )
            } ,
            {
                "label": "Clumis",
                "value" : Math.round( Math.random() * 1000 )
            } ,
            {
                "label": "Zero-Value",
                "value" : 0
            }
        ];

        return data;

    };

    $scope.bubbleScatterChartData = function() {

        var groups = 4,
            points = 20;

        var data = [],
            shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
            random = d3.random.normal();

        for (var i = 0; i < groups; i++) {
            data.push({
                key: 'Group ' + i,
                values: []
            });

            for (var j = 0; j < points; j++) {
                data[i].values.push({
                    x: (5 + j)
                    , y: (50 - (j*2))
                    , size: Math.random()
                    //, shape: shapes[j % 6]
                });
            }

            console.log(data);

        }

        return data;

    };

}]);