"use strict";

define(
    ['libs/dummylib'],
    function(dummyLib) {
        
        var run = function() {
            asyncTest('dummyLib should return the two strings combined together.', function() {
                setTimeout(function(){
                    equal(dummyLib('a','b'), 'ab', 'The return should be "ab".');
                    start();
                }, 300)
            });
        };
        
        return {run: run}
    }
);
