
(function() {

    QUnit.module("YUIObject functions");
    
    QUnit.test("YUIObject.owns", function() {
        ok(YUIObject.owns({ a: true, b: true }, 'b'));
    });

    QUnit.test("YUIObject.hasKey", function() {
        ok(YUIObject.hasKey({ a: true, b: true }, 'b'));
    });

    QUnit.test("YUIObject.hasValue", function() {
        ok(YUIObject.hasValue({ a: 1, b: 2 }, 2));
    });

    QUnit.test("YUIObject.keys", function() {
        deepEqual(YUIObject.keys({a: 'foo', b: 'bar', c: 'baz'}), 
                                    ['a', 'b', 'c']);
    });

    QUnit.test("YUIObject.values", function() {
        deepEqual(YUIObject.values({a: 'foo', b: 'bar', c: 'baz'}), 
                                    ['foo', 'bar', 'baz']);
    });

    QUnit.test("YUIObject.size", function() {
        console.log();
        equal(YUIObject.size({a: 'foo', b: 'bar', c: 'baz'}), 3);
    });
   
    QUnit.test("YUIObject.each", function() {
        ok(YUIObject.each({a: 'foo', b: 'bar', c: 'baz'}, 
                                function() {}, null, false));
    });
   
    QUnit.test("YUIObject.some", function() {
        ok(YUIObject.some({a: 'foo', b: 'bar', c: 'baz'}, 
                                function() { return true; }, null, false));
    });

    QUnit.test("YUIObject.getValue", function() {
        equal(YUIObject.getValue({a: 'foo', b: {c: 'bar', d: 'baz'}}, 
                                    ['b', 'd']), 'baz');
    });

    QUnit.test("YUIObject.setValue", function() {
        deepEqual(YUIObject.setValue({a: 'foo', b: {c: 'bar', d: 'bat'}}, 
                                    ['b', 'd'], 'baz'), 
                                    {a: 'foo', b: {c: 'bar', d: 'baz'}});
    });

    QUnit.test("YUIObject.isEmpty", function() {
        ok(YUIObject.isEmpty({}));
    });


})();
