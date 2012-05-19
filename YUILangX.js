// [Keep Lint happy.  #yp ]
"use strict";

// [YUIPort, porting Yahoo's YUI code to a standalone base:
// https://github.com/gso/YUIPort  #yp ]

// Additional functions extending the 'Lang' module.

// Adapted from YUI test/js/DateAssert.js, date comparision is not as
// simple as an equality operator in JavaScript, hence opportunistically
// provided for here.

// [Create namespace.  #yp ]
var YUILangX = {};

/**
 * The '.Lang' object provides functions to test JavaScript Date objects
 * for a variety of cases.
 * @namespace Lang
 * @static
 */
   
/**
 * Tests a date's month, day, and year are equal to another date's.
 * @param {Date} expected The expected date.
 * @param {Date} actual The actual date to test.
 * @param {String} message (Optional) The message to display if the assertion fails.
 * @method datesAreEqual
 * @returns {Boolean}
 * @static
 */
YUILangX.datesAreEqual = function(expected, actual) {
    var equal = true;
    if (expected instanceof Date && actual instanceof Date) {
        if (expected.getFullYear() != actual.getFullYear()){
            equal = false;
        } else if (expected.getMonth() != actual.getMonth()){
            equal = false;
        } else if (expected.getDate() != actual.getDate()){
            equal = false;
        }
    } else {
        throw new TypeError("YUILangX.datesAreEqual(): Expected and actual values must be Date objects.");
    }
    return equal;
};
 
/**
 * Tests a date's hour, minutes, and seconds are equal to another date's.
 * @param {Date} expected The expected date.
 * @param {Date} actual The actual date to test.
 * @param {String} message (Optional) The message to display if the assertion fails.
 * @method timesAreEqual
 * @returns {Boolean}
 * @static
 */
YUILangX.timesAreEqual = function(expected, actual) {
    var equal = true;
    if (expected instanceof Date && actual instanceof Date) {
        if (expected.getHours() != actual.getHours()){
            equal = false;
        } else if (expected.getMinutes() != actual.getMinutes()){
            equal = false;
        } else if (expected.getSeconds() != actual.getSeconds()){
            equal = false;
        }          
    } else {
        throw new TypeError("YUILangX.timesAreEqual(): Expected and actual values must be Date objects.");
    }
    return equal;
};
