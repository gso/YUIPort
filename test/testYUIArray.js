
(function() {

    QUnit.module("YUIArray functions");

    QUnit.test("YUIArray.dedupe", function() {
        deepEqual(YUIArray.dedupe([1, 2, 2, 3]), [1, 2, 3]);
    });

    QUnit.test("YUIArray.each - non-native '.each' not tested", function() {
        ok(YUIArray.each([1, 2, 3], function() {}));
    });

    QUnit.test("YUIArray.hash", function() {
        deepEqual(YUIArray.hash(['a', 'b', 'c'], ['foo', 'bar']), 
                    {a: 'foo', b: 'bar', c: true});
    });

    QUnit.test("YUIArray.indexOf", function() {
        equal(YUIArray.indexOf(['a', 'b', 'c'], 'b'), 1);
    });

    QUnit.test("YUIArray.numericSort", function() {
        deepEqual([42, 23, 8, 16, 4, 15].sort(YUIArray.numericSort), 
                [4, 8, 15, 16, 23, 42]);
    });

    QUnit.test("YUIArray.some", function() {
        ok(!YUIArray.some([1, 2, 3], function() {}));
    });

    QUnit.test("YUIArray.test", function() {
        equal(YUIArray.test([]), 1);
    });

})();
