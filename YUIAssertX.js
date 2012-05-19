"use strict";

// [YUIPort, porting Yahoo's YUI code to a standalone base:
// https://github.com/gso/YUIPort  #yp ]

// Reimplements YUIAssert functions using YUILang methods which have various
// advantages over their YUIAssert counterparts:
//
// YUIAssertX.isArray(actual, message) - provides more support for older 
// browsers
//
// YUIAssertX.isNumber(actual, message) - does not allow infinite or NaN 
// values to pass as numbers
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
