
(function() {

    QUnit.module("YUI ports Assert module - equality tests");
    
    QUnit.test("YUIAssert.areEqual", function() {
        ok(!YUIAssert.areEqual(1, "1", ""), "valid data test");
        raises(function() {
              YUIAssert.areEqual("X", "Y", "");
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.areNotEqual", function() {
        ok(!YUIAssert.areNotEqual(1, "0", ""), "valid data test");
        raises(function() {
              YUIAssert.areNotEqual(1, "1", "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.areSame", function() {
        ok(!YUIAssert.areSame("X", "X", ""), "valid data test");
        raises(function() {
              YUIAssert.areSame("1", 1, "");
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.areNotSame", function() {
        ok(!YUIAssert.areNotSame(1, "1", ""), "valid data test");
        raises(function() {
              YUIAssert.areNotSame(1, 1, "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isFalse", function() {
        ok(!YUIAssert.isFalse(false, ""), "valid data test");
        raises(function() {
              YUIAssert.isFalse(true, "");
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isTrue", function() {
        ok(!YUIAssert.isTrue(true, ""), "valid data test");
        raises(function() {
              YUIAssert.isTrue(false, "");
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.module("YUI ports Assert module - special values");
    
    QUnit.test("YUIAssert.isNaN", function() {
        ok(!YUIAssert.isNaN(NaN, ""), "valid data test");
        raises(function() {
              YUIAssert.isNaN(1, "");
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isNotNaN", function() {
        ok(!YUIAssert.isNotNaN(1, ""), "valid data test");
        raises(function() {
              YUIAssert.isNotNaN(NaN, "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isNull", function() {
        ok(!YUIAssert.isNull(null, ""), "valid data test");
        raises(function() {
              YUIAssert.isNull(1, "");
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isNotNull", function() {
        ok(!YUIAssert.isNotNull("X", ""), "valid data test");
        raises(function() {
              YUIAssert.isNotNull(null, "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isUndefined", function() {
        ok(!YUIAssert.isUndefined(undefined, ""), "valid data test");
        raises(function() {
              YUIAssert.isUndefined("X", "");
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isNotUndefined", function() {
        ok(!YUIAssert.isNotUndefined("X", ""), "valid data test");
        raises(function() {
              YUIAssert.isNotUndefined(undefined, "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.module("YUI ports Assert module - instance");
    
    QUnit.test("YUIAssert.isArray", function() {
        ok(!YUIAssert.isArray([], ""), "valid data test");
        raises(function() {
              YUIAssert.isArray("X", "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isBoolean", function() {
        ok(!YUIAssert.isBoolean(true, ""), "valid data test");
        raises(function() {
              YUIAssert.isBoolean("X", "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isFunction", function() {
        ok(!YUIAssert.isFunction(function() { }, ""), "valid data test");
        raises(function() {
              YUIAssert.isFunction("X", "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isInstanceOf", function() {
        ok(!YUIAssert.isInstanceOf(Array, new Array(), ""), "valid data test");
        raises(function() {
              YUIAssert.isInstanceOf(Array, new String(), "");
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isNumber", function() {
        ok(!YUIAssert.isNumber(1, ""), "valid data test");
        raises(function() {
              YUIAssert.isNumber("X", "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isObject", function() {
        ok(!YUIAssert.isObject({}, ""), "valid data test");
        raises(function() {
              YUIAssert.isObject("X", "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isString", function() {
        ok(!YUIAssert.isString("X", ""), "valid data test");
        raises(function() {
              YUIAssert.isString(1, "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssert.isTypeOf", function() {
        ok(!YUIAssert.isTypeOf("string", "X", ""), "valid data test");
        raises(function() {
              YUIAssert.isTypeOf("string", 1, "");
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.module("YUI ports Assert module - errors");
    
    QUnit.test("YUIAssert.throwsError", function() {
        ok(!YUIAssert.throwsError(YUIAssertionError, YUIAssert.fail, ""), "valid data test");
        raises(function() {
              YUIAssert.throwsError(YUIAssertionError, function() { }, "");
        }, YUIAssertionError, "non-valid data test");
    });
    
    QUnit.start();
    
})();