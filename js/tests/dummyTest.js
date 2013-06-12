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
            
            test('dummyLib should return the sum of the two supplied numbers.', function() {
                stop();
                setTimeout(function(){
                    equal(dummyLib(1,1), 2, 'The return should be 2.');
                    equal(dummyLib(-2,1), -1, 'The return should be -1.');
                    start();
                }, 400)

            });
            test('dummyLib should return the sum of the two supplied numbers.', function() {
                stop();
                setTimeout(function(){
                    equal(dummyLib(1,1), 2, 'The return should be 2.');
                    equal(dummyLib(-2,1), -1, 'The return should be -1.');
                    start();
                }, 400)

            });

        };
        
        return {run: run}
    }
);
