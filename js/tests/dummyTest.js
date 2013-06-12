"use strict";

define(
    ['libs/dummylib'],
    function(dummyLib) {
        
        var run = function() {
    module('List', {
        setup: function(){
            console.log('setup');
        },
        teardown: function(){
            console.log('teardown');
        }
    })
    
    asyncTest('dummyLib should return the sum of the two supplied numbers.', function() {
        setTimeout(function(){
            equal(2, 2, 'The return should be 2.');
            equal(-1, -1, 'The return should be -1.');
            start();
        }, 400)
    });

    asyncTest('dummyLib should return the sum of the two supplied numbers.', function() {
        setTimeout(function(){
            equal(2, 2, 'The return should be 2.');
            equal(-1, -1, 'The return should be -1.');
            start();
        }, 400)

    });

        };
        
        return {run: run}
    }
);
