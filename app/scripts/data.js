/**
 * Created by pelowok on 10/13/15.
 */

var testdata = [];

var randomdata = function(){

    for(var i = (Math.random()*50 + 10); i > 0; i--) {

        testdata.push( Math.round( Math.random() * 100 ) );

    }

    console.log('testdata : ' + testdata);

    return testdata;

}();
