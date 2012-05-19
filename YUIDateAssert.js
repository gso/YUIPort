// [Keep Lint happy.  #yp ]
"use strict";

// [YUIPort, porting Yahoo's YUI code to a standalone base:
// https://github.com/gso/YUIPort  #yp ]

// [Requires YUIAssert.js.  #yp ]

// [Port of YUI test/js/DateAssert.js.  #yp ]

/**
 * The DateTest object provides functions to test JavaScript Date objects
 * for a variety of cases.
 * @namespace DateTest
 * @module YUIDateTest
 * @class DateTest
 * @static
 */

// [Namespace.  #yp ]
//YUITest.DateAssert = {
var YUIDateAssert = {
 
    /**
     * Tests a date's month, day, and year are equal to another date's.
     * @param {Date} expected The expected date.
     * @param {Date} actual The actual date to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method datesAreEqual
     * @returns {Boolean}
     * @static
     */
    datesAreEqual : function (expected, actual, message) {

        // [Part of YUI test framework.  #yp ]
        //YUITest.Assert._increment();        
        if (expected instanceof Date && actual instanceof Date){
            var msg = "";
            
            //check years first
            if (expected.getFullYear() != actual.getFullYear()){
                msg = "Years should be equal.";
            }
            
            //now check months
            if (expected.getMonth() != actual.getMonth()){
                msg = "Months should be equal.";
            }                
            
            //last, check the day of the month
            if (expected.getDate() != actual.getDate()){
                msg = "Days of month should be equal.";
            }                
            
            if (msg.length){
                // [Namespace.  #yp ]
                //throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(message, msg), expected, actual);
                throw new YUIComparisonFailure(YUIAssert._formatMessage(message, msg), expected, actual);
            }
        } else {
            // [Namespace.  #yp ]
            //throw new TypeError("YUITest.DateAssert.datesAreEqual(): Expected and actual values must be Date objects.");
            throw new TypeError("YUILang.datesAreEqual(): Expected and actual values must be Date objects.");
        }
    },
 
    /**
     * Asserts that a date's hour, minutes, and seconds are equal to another date's.
     * @param {Date} expected The expected date.
     * @param {Date} actual The actual date to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method timesAreEqual
     * @static
     */
    timesAreEqual : function (expected, actual, message){
        // [Part of YUI test framework.  #yp ]
        //YUITest.Assert._increment();        
        if (expected instanceof Date && actual instanceof Date){
            var msg = "";
            
            //check hours first
            if (expected.getHours() != actual.getHours()){
                msg = "Hours should be equal.";
            }
            
            //now check minutes
            if (expected.getMinutes() != actual.getMinutes()){
                msg = "Minutes should be equal.";
            }                
            
            //last, check the seconds
            if (expected.getSeconds() != actual.getSeconds()){
                msg = "Seconds should be equal.";
            }                
            
            if (msg.length){
                // [Namespace.  #yp ]
                //throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(message, msg), expected, actual);
                throw new YUIComparisonFailure(YUIAssert._formatMessage(message, msg), expected, actual);
            }
        } else {
            // [Namespace.  #yp ]
            //throw new TypeError("YUITest.DateAssert.timesAreEqual(): Expected and actual values must be Date objects.");
            throw new TypeError("YUILang.timesAreEqual(): Expected and actual values must be Date objects.");
        }
    }
    
};
