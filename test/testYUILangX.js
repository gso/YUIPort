
QUnit.module("Extended 'Lang' functions");

var today = new Date();
var tomoz = new Date(today);
tomoz.setDate(today.getDate() + 1);
tomoz.setMinutes(today.getMinutes() + 1);

QUnit.test("YUILangX.datesAreEqual", function() {
    ok(YUILangX.datesAreEqual(today, today), "valid data test");
    ok(!YUILangX.datesAreEqual(today, tomoz), "non-valid data test");
});

QUnit.test("YUILangX.timesAreEqual", function() {
    ok(YUILangX.timesAreEqual(today, today), "valid data test");
    ok(!YUILangX.timesAreEqual(today, tomoz), "non-valid data test");
});
