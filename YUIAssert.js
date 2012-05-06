// [Keep Lint happy.  #yp ]
"use strict";

// [Brings test/js/AssertionError.js, test/js/ComparisonFailure.js, 
// test/js/UnexpectedValue.js, test/js/Assert.js into the same file.
// #yp ]

/**
 * [Ported from test/js/AssertionError.js.  #yp]
 * 
 * Error is thrown whenever an assertion fails. It provides methods
 * to more easily get at error information and also provides a base class
 * from which more specific assertion errors can be derived.
 *
 * @param {String} message The message to display when the error occurs.
 * @namespace Test
 * @module test
 * @class AssertionError
 * @constructor
 */ 
// [Local namespace.  #yp ]
//YUITest.AssertionError = function (message){
var YUIAssertionError = function (message){
    
    /**
     * Error message. Must be duplicated to ensure browser receives it.
     * @type String
     * @property message
     */
    this.message = message;
    
    /**
     * The name of the error that occurred.
     * @type String
     * @property name
     */
    this.name = "Assert Error";
};
 
YUIAssertionError.prototype = {
 
    //restore constructor
    constructor: YUIAssertionError,
 
    /**
     * Returns a fully formatted error for an assertion failure. This should
     * be overridden by all subclasses to provide specific information.
     * @method getMessage
     * @return {String} A string describing the error.
     */
    getMessage : function () {
        return this.message;
    },
    
    /**
     * Returns a string representation of the error.
     * @method toString
     * @return {String} A string representation of the error.
     */
    toString : function () {
        return this.name + ": " + this.getMessage();
    }
 
};

/**
 * [Ported from test/js/ComparisonFailure.js]
 * 
 * ComparisonFailure is subclass of Error that is thrown whenever
 * a comparison between two values fails. It provides mechanisms to retrieve
 * both the expected and actual value.
 *
 * @param {String} message The message to display when the error occurs.
 * @param {Object} expected The expected value.
 * @param {Object} actual The actual value that caused the assertion to fail.
 * @namespace Test 
 * @extends AssertionError
 * @module test
 * @class ComparisonFailure
 * @constructor
 */ 
// [Local namespace.  #yp ]
//YUIComparisonFailure = function (message, expected, actual){
var YUIComparisonFailure = function (message, expected, actual){
 
    //call superclass
    YUIAssertionError.call(this, message);
    
    /**
     * The expected value.
     * @type Object
     * @property expected
     */
    this.expected = expected;
    
    /**
     * The actual value.
     * @type Object
     * @property actual
     */
    this.actual = actual;
    
    /**
     * The name of the error that occurred.
     * @type String
     * @property name
     */
    this.name = "ComparisonFailure";
    
};
 
//inherit from YUITest.AssertionError
YUIComparisonFailure.prototype = new YUIAssertionError;
 
//restore constructor
YUIComparisonFailure.prototype.constructor = YUIComparisonFailure;
 
/**
 * [Port of test/js/UnexpectedValue.js]
 * 
 * Returns a fully formatted error for an assertion failure. This message
 * provides information about the expected and actual values.
 * @method getMessage
 * @return {String} A string describing the error.
 */
// [Local namespace.  #yp ]
//YUIComparisonFailure.prototype.getMessage = function(){
YUIComparisonFailure.prototype.getMessage = function(){
    return this.message + "\nExpected: " + this.expected + " (" + (typeof this.expected) + ")"  +
            "\nActual: " + this.actual + " (" + (typeof this.actual) + ")";
};
 
/**
 * UnexpectedValue is subclass of Error that is thrown whenever
 * a value was unexpected in its scope. This typically means that a test
 * was performed to determine that a value was *not* equal to a certain
 * value.
 *
 * @param {String} message The message to display when the error occurs.
 * @param {Object} unexpected The unexpected value.
 * @namespace Test 
 * @extends AssertionError
 * @module test
 * @class UnexpectedValue
 * @constructor
 */ 
var YUIUnexpectedValue = function (message, unexpected){
 
    //call superclass
    YUIAssertionError.call(this, message);
    
    /**
     * The unexpected value.
     * @type Object
     * @property unexpected
     */
    this.unexpected = unexpected;
    
    /**
     * The name of the error that occurred.
     * @type String
     * @property name
     */
    this.name = "UnexpectedValue";
    
};
 
//inherit from YUITest.AssertionError
YUIUnexpectedValue.prototype = new YUIAssertionError();
 
//restore constructor
YUIUnexpectedValue.prototype.constructor = YUIUnexpectedValue;
 
/**
 * Returns a fully formatted error for an assertion failure. This message
 * provides information about the expected and actual values.
 * @method getMessage
 * @return {String} A string describing the error.
 */
YUIUnexpectedValue.prototype.getMessage = function(){
    return this.message + "\nUnexpected: " + this.unexpected + " (" + (typeof this.unexpected) + ") ";
};



/**
 * 
 * [Port of test/js/Assert.js into YP namespace (discarding the
 * test framework - all 'number of assertions performed' logic removed, 
 * and a file search & replace on the YUITest namespace replacing with 
 * YP).]
 * 
 * The Assert object provides functions to test JavaScript values against
 * known and expected results. Whenever a comparison (assertion) fails,
 * an error is thrown.
 * @namespace Test
 * @module test
 * @class Assert
 * @static
 */
// [Local namespace.  #yp ]
//YUITest.Assert = {
var YUIAssert = {
 
//    /**
//     * The number of assertions performed.
//     * @property _asserts
//     * @type int
//     * @private
//     */
//    _asserts: 0,
 
    //-------------------------------------------------------------------------
    // Helper Methods
    //-------------------------------------------------------------------------
    
    /**
     * Formats a message so that it can contain the original assertion message
     * in addition to the custom message.
     * @param {String} customMessage The message passed in by the developer.
     * @param {String} defaultMessage The message created by the error by default.
     * @return {String} The final error message, containing either or both.
     * @protected
     * @static
     * @method _formatMessage
     */
    _formatMessage : function (customMessage, defaultMessage) {
        if (typeof customMessage == "string" && customMessage.length > 0){
            return customMessage.replace("{message}", defaultMessage);
        } else {
            return defaultMessage;
        }        
    },

// [Not a property needed outside of the YUI test suite.  #yp ]
//    /**
//     * Returns the number of assertions that have been performed.
//     * @method _getCount
//     * @protected
//     * @static
//     */
//    _getCount: function(){
//        return this._asserts;
//    },
//    
//    /**
//     * Increments the number of assertions that have been performed.
//     * @method _increment
//     * @protected
//     * @static
//     */
//    _increment: function(){
//        this._asserts++;
//    },
//    
//    /**
//     * Resets the number of assertions that have been performed to 0.
//     * @method _reset
//     * @protected
//     * @static
//     */
//    _reset: function(){
//        this._asserts = 0;
//    },
    
    //-------------------------------------------------------------------------
    // Generic Assertion Methods
    //-------------------------------------------------------------------------
    
    /** 
     * Forces an assertion error to occur.
     * @param {String} message (Optional) The message to display with the failure.
     * @method fail
     * @static
     */
    fail : function (message) {
        throw new YUIAssertionError(YUIAssert._formatMessage(message, "Test force-failed."));
    },       

// [ #yp ]
//    /** 
//     * A marker that the test should pass.
//     * @method pass
//     * @static
//     */
//    pass : function (message) {
//        //YUITest.Assert._increment();
//    },       
    
    //-------------------------------------------------------------------------
    // Equality Assertion Methods
    //-------------------------------------------------------------------------    
    
    /**
     * Asserts that a value is equal to another. This uses the double equals sign
     * so type cohersion may occur.
     * @param {Object} expected The expected value.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method areEqual
     * @static
     */
    areEqual : function (expected, actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (expected != actual) {
            throw new YUIComparisonFailure(YUIAssert._formatMessage(message, "Values should be equal."), expected, actual);
        }
    },
    
    /**
     * Asserts that a value is not equal to another. This uses the double equals sign
     * so type cohersion may occur.
     * @param {Object} unexpected The unexpected value.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method areNotEqual
     * @static
     */
    areNotEqual : function (unexpected, actual, 
                         message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (unexpected == actual) {
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Values should not be equal."), unexpected);
        }
    },
    
    /**
     * Asserts that a value is not the same as another. This uses the triple equals sign
     * so no type cohersion may occur.
     * @param {Object} unexpected The unexpected value.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method areNotSame
     * @static
     */
    areNotSame : function (unexpected, actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (unexpected === actual) {
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Values should not be the same."), unexpected);
        }
    },
 
    /**
     * Asserts that a value is the same as another. This uses the triple equals sign
     * so no type cohersion may occur.
     * @param {Object} expected The expected value.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method areSame
     * @static
     */
    areSame : function (expected, actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (expected !== actual) {
            throw new YUIComparisonFailure(YUIAssert._formatMessage(message, "Values should be the same."), expected, actual);
        }
    },    
    
    //-------------------------------------------------------------------------
    // Boolean Assertion Methods
    //-------------------------------------------------------------------------    
    
    /**
     * Asserts that a value is false. This uses the triple equals sign
     * so no type cohersion may occur.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isFalse
     * @static
     */
    isFalse : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (false !== actual) {
            throw new YUIComparisonFailure(YUIAssert._formatMessage(message, "Value should be false."), false, actual);
        }
    },
    
    /**
     * Asserts that a value is true. This uses the triple equals sign
     * so no type cohersion may occur.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isTrue
     * @static
     */
    isTrue : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (true !== actual) {
            throw new YUIComparisonFailure(YUIAssert._formatMessage(message, "Value should be true."), true, actual);
        }
 
    },
    
    //-------------------------------------------------------------------------
    // Special Value Assertion Methods
    //-------------------------------------------------------------------------    
    
    /**
     * Asserts that a value is not a number.
     * @param {Object} actual The value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isNaN
     * @static
     */
    isNaN : function (actual, message){
// [ #yp ]
        //YUITest.Assert._increment();
        if (!isNaN(actual)){
            throw new YUIComparisonFailure(YUIAssert._formatMessage(message, "Value should be NaN."), NaN, actual);
        }    
    },
    
    /**
     * Asserts that a value is not the special NaN value.
     * @param {Object} actual The value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isNotNaN
     * @static
     */
    isNotNaN : function (actual, message){
// [ #yp ]
        //YUITest.Assert._increment();
        if (isNaN(actual)){
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Values should not be NaN."), NaN);
        }    
    },
    
    /**
     * Asserts that a value is not null. This uses the triple equals sign
     * so no type cohersion may occur.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isNotNull
     * @static
     */
// [ #yp ]
    isNotNull : function (actual, message) {
        //YUITest.Assert._increment();
        if (actual === null) {
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Values should not be null."), null);
        }
    },
 
    /**
     * Asserts that a value is not undefined. This uses the triple equals sign
     * so no type cohersion may occur.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isNotUndefined
     * @static
     */
    isNotUndefined : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (typeof actual == "undefined") {
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should not be undefined."), undefined);
        }
    },
 
    /**
     * Asserts that a value is null. This uses the triple equals sign
     * so no type cohersion may occur.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isNull
     * @static
     */
    isNull : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (actual !== null) {
            throw new YUIComparisonFailure(YUIAssert._formatMessage(message, "Value should be null."), null, actual);
        }
    },
        
    /**
     * Asserts that a value is undefined. This uses the triple equals sign
     * so no type cohersion may occur.
     * @param {Object} actual The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isUndefined
     * @static
     */
    isUndefined : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (typeof actual != "undefined") {
            throw new YUIComparisonFailure(YUIAssert._formatMessage(message, "Value should be undefined."), undefined, actual);
        }
    },    
    
    //--------------------------------------------------------------------------
    // Instance Assertion Methods
    //--------------------------------------------------------------------------    
   
    /**
     * Asserts that a value is an array.
     * @param {Object} actual The value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isArray
     * @static
     */
    isArray : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        var shouldFail = false;
        if (Array.isArray){
            shouldFail = !Array.isArray(actual);
        } else {
            shouldFail = Object.prototype.toString.call(actual) != "[object Array]";
        }
        if (shouldFail){
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should be an array."), actual);
        }    
    },
   
    /**
     * Asserts that a value is a Boolean.
     * @param {Object} actual The value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isBoolean
     * @static
     */
    isBoolean : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (typeof actual != "boolean"){
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should be a Boolean."), actual);
        }    
    },
   
    /**
     * Asserts that a value is a function.
     * @param {Object} actual The value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isFunction
     * @static
     */
    isFunction : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (!(actual instanceof Function)){
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should be a function."), actual);
        }    
    },
   
    /**
     * Asserts that a value is an instance of a particular object. This may return
     * incorrect results when comparing objects from one frame to constructors in
     * another frame. For best results, don't use in a cross-frame manner.
     * @param {Function} expected The function that the object should be an instance of.
     * @param {Object} actual The object to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isInstanceOf
     * @static
     */
    isInstanceOf : function (expected, actual, message) {
        //YUITest.Assert._increment();
        if (!(actual instanceof expected)){
            throw new YUIComparisonFailure(YUIAssert._formatMessage(message, "Value isn't an instance of expected type."), expected, actual);
        }
    },
    
    /**
     * Asserts that a value is a number.
     * @param {Object} actual The value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isNumber
     * @static
     */
    isNumber : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (typeof actual != "number"){
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should be a number."), actual);
        }    
    },    
    
    /**
     * Asserts that a value is an object.
     * @param {Object} actual The value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isObject
     * @static
     */
    isObject : function (actual, message) {
// [ #yp ]
        //YUITest.Assert._increment();
        if (!actual || (typeof actual != "object" && typeof actual != "function")){
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should be an object."), actual);
        }
    },
    
    /**
     * Asserts that a value is a string.
     * @param {Object} actual The value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isString
     * @static
     */
    isString : function (actual, message) {
        //YUITest.Assert._increment();
        if (typeof actual != "string"){
            throw new YUIUnexpectedValue(YUIAssert._formatMessage(message, "Value should be a string."), actual);
        }
    },
    
    /**
     * Asserts that a value is of a particular type. 
     * @param {String} expectedType The expected type of the variable.
     * @param {Object} actualValue The actual value to test.
     * @param {String} message (Optional) The message to display if the assertion fails.
     * @method isTypeOf
     * @static
     */
    isTypeOf : function (expectedType, actualValue, message){
// [ #yp ]
        //YUITest.Assert._increment();
        if (typeof actualValue != expectedType){
            throw new YUIComparisonFailure(YUIAssert._formatMessage(message, "Value should be of type " + expectedType + "."), expectedType, typeof actualValue);
        }
    },
    
    //--------------------------------------------------------------------------
    // Error Detection Methods
    //--------------------------------------------------------------------------    
   
    /**
     * Asserts that executing a particular method should throw an error of
     * a specific type. This is a replacement for _should.error.
     * @param {String|Function|Object} expectedError If a string, this
     *      is the error message that the error must have; if a function, this
     *      is the constructor that should have been used to create the thrown
     *      error; if an object, this is an instance of a particular error type
     *      with a specific error message (both must match).
     * @param {Function} method The method to execute that should throw the error.
     * @param {String} message (Optional) The message to display if the assertion
     *      fails.
     * @method throwsError
     * @return {void}
     * @static
     */
    throwsError: function(expectedError, method, message){
// [ #yp ]
        //YUITest.Assert._increment();
        var error = false;
    
        try {
            method();        
        } catch (thrown) {
            
            //check to see what type of data we have
            if (typeof expectedError == "string"){
                
                //if it's a string, check the error message
                if (thrown.message != expectedError){
                    error = true;
                }
            } else if (typeof expectedError == "function"){
            
                //if it's a function, see if the error is an instance of it
                if (!(thrown instanceof expectedError)){
                    error = true;
                }
            
            } else if (typeof expectedError == "object" && expectedError !== null){
            
                //if it's an object, check the instance and message
                if (!(thrown instanceof expectedError.constructor) || 
                        thrown.message != expectedError.message){
                    error = true;
                }
            
            } else { //if it gets here, the argument could be wrong
                error = true;
            }
            
            if (error){
                throw new YUIUnexpectedError(thrown);                    
            } else {
                return;
            }
        }
        
        //if it reaches here, the error wasn't thrown, which is a bad thing
        throw new YUIAssertionError(YUIAssert._formatMessage(message, "Error should have been thrown."));
    }
 
};
