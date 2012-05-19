"use strict";

// [YUIPort, porting Yahoo's YUI code to a standalone base:
// https://github.com/gso/YUIPort  #yp ]

// Reimplements and adds to YUI Test.Assert Class (test/js/Assert.js) using 
// functions from the Lang Class (yui/js/yui-lang.js - some of the functions 
// from which have advantages over their Test.Assert counterparts):
//
// YUIAssertX.isArray(actual, message) - provides more support for older 
// browsers
//
// YUIAssertX.isNumber(actual, message) - does not allow infinite or NaN 
// values to pass as numbers
//
// YUIAssertX.isDate(actual, message) - provides for a date assert.
//

var YUIAssertX = {};
    
YUIAssertX.isArray = function(actual, message) { 
    var shouldFail = false;
    if (YUILang.isArray(actual)) {
        shouldFail = !Array.isArray(actual);
    } else {
        shouldFail = Object.prototype.toString.call(actual) != "[object Array]";
    }
    if (shouldFail) {
        throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should be an array."), actual);
    }    
};

YUIAssertX.isNumber = function(actual, message) { 
    if (!YUILang.isNumber(actual)) {
        throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should be a number."), actual);
    }    
};

YUIAssertX.isDate = function(actual, message) { 
    if (!YUILang.isDate(actual)) {
        throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should be a date."), actual);
    }    
};
