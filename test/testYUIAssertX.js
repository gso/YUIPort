
(function() {
    
    QUnit.module("YUI ports AssertX module");    
    
    QUnit.test("YUIAssertX.isArray", function() {
        ok(!YUIAssertX.isArray([], ""), "valid data test");
        raises(function() {
              YUIAssertX.isArray("X", "");
        }, YUIUnexpectedValue, "non-valid data test");
    });    
    
    QUnit.test("YUIAssertX.isNumber", function() {
        ok(!YUIAssertX.isNumber(1, ""), "valid data test");
        raises(function() {
              YUIAssertX.isNumber(NaN, "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
    QUnit.test("YUIAssertX.isDate", function() {
        ok(!YUIAssertX.isDate(new Date(), ""), "valid data test");
        raises(function() {
              YUIAssertX.isDate("X", "");
        }, YUIUnexpectedValue, "non-valid data test");
    });
    
})();