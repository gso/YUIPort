
(function() {

    QUnit.module("YUIDateAssert functions");
    
    var today = new Date();
    var tomoz = new Date(today);
    tomoz.setDate(tomoz.getDate() + 1);
    tomoz.setMinutes(tomoz.getMinutes() + 1);
    
    QUnit.test("YUIObjectAssert.areEqual", function() {
        ok(!YUIObjectAssert.areEqual({ "a": 1, "b": 2, "c": 3 }, 
                                        { "a": 1, "b": 2, "c": 3 }, ""),
            "valid data test");
        raises(function() {
            YUIObjectAssert.areEqual({ "a": 1, "x": 2, "c": 3 }, 
                                        { "a": 1, "b": 2, "c": 3 }, "");
        }, YUIAssertionError, "non-valid data test - keys");
        raises(function() {
            YUIObjectAssert.areEqual({ "a": 1, "b": 9, "c": 3 }, 
                                        { "a": 1, "b": 2, "c": 3 }, "");
        }, YUIComparisonFailure, "non-valid data test - vaalues");
    });

    QUnit.test("YUIObjectAssert.hasKey", function() {
        ok(!YUIObjectAssert.hasKey("b", { "a": 1, "b": 2, "c": 3 }, ""),
            "valid data test");
        raises(function() {
            YUIObjectAssert.hasKey({ "a": 1, "x": 2, "c": 3 }, 
                                        { "a": 1, "b": 2, "c": 3 });
        }, YUIAssertionError, "non-valid data test - keys");
    });

    QUnit.test("YUIObjectAssert.inheritsKey", function() {
        var test_abstractclass = function() { this.a = null, this.b = null };
        var test_subclass = function() {};
        test_subclass.prototype = new test_abstractclass();
        var test_obj = new test_subclass();
        ok(!YUIObjectAssert.inheritsKey("a", test_obj, ""),
            "valid data test");
        raises(function() {
            var test_obj = new test_abstractclass();
            YUIObjectAssert.inheritsKey("a", test_obj, "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIObjectAssert.inheritsKeys", function() {
        var test_abstractclass = function() { this.a = null, this.b = null };
        var test_subclass = function() {};
        test_subclass.prototype = new test_abstractclass();
        var test_obj = new test_subclass();
        ok(!YUIObjectAssert.inheritsKeys(["a", "b"], test_obj, ""),
            "valid data test");
        raises(function() {
            var test_obj = new test_abstractclass();
            YUIObjectAssert.inheritsKeys(["a", "b"], test_obj, "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIObjectAssert.ownsKey", function() {
        var test_abstractclass = function() { this.a = null, this.b = null };
        var test_subclass = function() { this.c = null,  this.d = null };
        test_subclass.prototype = new test_abstractclass();
        var test_obj = new test_subclass();
        ok(!YUIObjectAssert.ownsKey("c", test_obj, ""),
            "valid data test");
        raises(function() {
            YUIObjectAssert.ownsKey("a", test_obj, "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIObjectAssert.ownsKeys", function() {
        var test_abstractclass = function() { this.a = null, this.b = null };
        var test_subclass = function() { this.c = null,  this.d = null };
        test_subclass.prototype = new test_abstractclass();
        var test_obj = new test_subclass();
        ok(!YUIObjectAssert.ownsKeys(["c", "d"], test_obj, ""),
            "valid data test");
        raises(function() {
            YUIObjectAssert.ownsKeys(["a", "b"], test_obj, "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIObjectAssert.ownsNoKeys", function() {
        var test_class = function() {};
        var test_obj = new test_class();
        ok(!YUIObjectAssert.ownsNoKeys(test_obj, ""), "valid data test");
        raises(function() {
            var test_class = function() { this.a = null; };
            var test_obj = new test_class();
            YUIObjectAssert.ownsNoKeys(test_obj, "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIObjectAssert.ownsOrInheritsKey", function() {
        var test_abstractclass = function() { this.a = null, this.b = null };
        var test_subclass = function() { this.c = null; this.d = null };
        test_subclass.prototype = new test_abstractclass();
        var test_obj = new test_subclass();
        ok(!YUIObjectAssert.ownsOrInheritsKey("a", test_obj, ""),
            "valid data test");
        ok(!YUIObjectAssert.ownsOrInheritsKey("c", test_obj, ""),
            "valid data test");
        raises(function() {
            var test_obj = new test_abstractclass();
            YUIObjectAssert.ownsOrInheritsKey("x", test_obj, "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIObjectAssert.ownsOrInheritsKeys", function() {
        var test_abstractclass = function() { this.a = null, this.b = null };
        var test_subclass = function() { this.c = null; this.d = null };
        test_subclass.prototype = new test_abstractclass();
        var test_obj = new test_subclass();
        ok(!YUIObjectAssert.ownsOrInheritsKeys(["a", "c"], test_obj, ""),
            "valid data test");
        raises(function() {
            var test_obj = new test_abstractclass();
            YUIObjectAssert.ownsOrInheritsKeys("x", test_obj, "");
        }, YUIAssertionError, "non-valid data test");
    });

})();
