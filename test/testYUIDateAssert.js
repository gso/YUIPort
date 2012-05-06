
(function() {

    QUnit.module("YUIDateAssert functions");
    
    var today = new Date();
    var tomoz = new Date(today);
    tomoz.setDate(tomoz.getDate() + 1);
    tomoz.setMinutes(tomoz.getMinutes() + 1);
    
    QUnit.test("YUIDateAssert.datesAreEqual", function() {
        ok(!YUIDateAssert.datesAreEqual(today, today), "valid data test");
        raises(function() {
            YUIDateAssert.datesAreEqual(today, tomoz);
        }, YUIComparisonFailure, "non-valid data test");
    });
    
    QUnit.test("YUIDateAssert.timesAreEqual", function() {
        ok(!YUIDateAssert.timesAreEqual(today, today), "valid data test");
        raises(function() {
            YUIDateAssert.timesAreEqual(today, tomoz);
        }, YUIComparisonFailure, "non-valid data test");
    });

})();