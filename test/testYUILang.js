
(function() {
   
    QUnit.module("YUI ports Lang module (not full test as yet TODO)");
    
    var UNDEF = 'undefined',
        NUM = 'number',
        PLUSINF = 'Infinity',
        MINUSINF = 'minus Infinity',
        NAN = 'NaN',
        NULL = 'null',
        BOOL = 'boolean',
        STR = 'string',
        OBJFUNC = '[object Function]',
        REGEXP = '[object RegExp]',
        OBJARR = '[object Array]',
        OBJDATE = '[object Date]',
        OBJ = '[object]';
    
    var value_type = [NUM, BOOL, STR, OBJFUNC, REGEXP, OBJARR, OBJDATE, OBJ];
    var obj_type = [OBJARR, OBJDATE, OBJ];
    
    var test_data = {};
    test_data[UNDEF] = undefined;
    test_data[NUM] = 123;
    test_data[PLUSINF] = Infinity;
    test_data[MINUSINF] = -Infinity;
    test_data[NAN] = NaN;
    test_data[NULL] = null;
    test_data[BOOL] = true;
    test_data[STR] = "abc";
    test_data[OBJFUNC] = function() {};
    test_data[REGEXP] = /(?:)/;
    test_data[OBJARR] = [];
    test_data[OBJDATE] = new Date();
    test_data[OBJ] = {};
    
    var test_data_key = [], test_data_val = [];
    for (var d in test_data) { 
                        test_data_key.push(d); test_data_val.push(test_data[d]); }
    
    QUnit.test("YUILang.isArray (not tested for non-native 'Array.isArray')", function() {
        // TODO NOT TESTED FOR NON-NATIVE 'Array.isArray'
        var test_set = test_data_val.filter(
                    function( x, i) { return test_data_key[i] !== OBJARR; });
        for (var i = 0; i < test_set.length; i++)
            ok(!YUILang.isArray(test_set[i]), ["non-valid data test", 
                test_set[i]].join(": "));
        ok(YUILang.isArray(test_data[OBJARR]), "valid data test");
    });
    
    QUnit.test("YUILang.isBoolean", function() {
        var test_set = test_data_val.filter(
                    function( x, i) { return test_data_key[i] !== BOOL; });
        for (var i = 0; i < test_set.length; i++)
            ok(!YUILang.isBoolean(test_set[i]), ["non-valid data test", 
                test_set[i]].join(": "));
        ok(YUILang.isBoolean(test_data[BOOL]), "valid data test");
    });
    
    QUnit.test("YUILang.isDate", function() {
        var test_set = test_data_val.filter(
                    function( x, i) { return test_data_key[i] !== OBJDATE; });
        for (var i = 0; i < test_set.length; i++)
            ok(!YUILang.isDate(test_set[i]), ["non-valid data test", 
                test_set[i]].join(": "));
        ok(YUILang.isDate(test_data[OBJDATE]), "valid data test");
    });
    
    QUnit.test("YUILang.isFunction", function() {
        var test_set = test_data_val.filter(
                    function( x, i) { return test_data_key[i] !== OBJFUNC; });
        for (var i = 0; i < test_set.length; i++)
            ok(!YUILang.isFunction(test_set[i]), ["non-valid data test", 
                test_set[i]].join(": "));
        ok(YUILang.isFunction(test_data[OBJFUNC]), "valid data test");
    });
    
    QUnit.test("YUILang.isNull", function() {
        var test_set = test_data_val.filter(
                    function( x, i) { return test_data_key[i] !== NULL; });
        for (var i = 0; i < test_set.length; i++)
            ok(!YUILang.isNull(test_set[i]), ["non-valid data test", 
                test_set[i]].join(": "));
        ok(YUILang.isNull(test_data[NULL]), "valid data test");
    });
    
    QUnit.test("YUILang.isNumber", function() {
        var test_set = test_data_val.filter(
                    function( x, i) { return test_data_key[i] !== NUM; });
        for (var i = 0; i < test_set.length; i++)
            ok(!YUILang.isNumber(test_set[i]), ["non-valid data test", 
                test_set[i]].join(": "));
        ok(YUILang.isNumber(test_data[NUM]), "valid data test");
    });
    
    QUnit.test("YUILang.isObject (not tested for false 'failfn')", function() {
        // TODO NOT TESTED FOR IF 'failfn' (FAIL FUNCTION) IS FALSE 
        var test_set = test_data_val.filter(
                    function( x, i) { return obj_type.some(
                        function(v) { test_data_key[i] !== v; }); });
        for (var i = 0; i < test_set.length; i++)
            ok(!YUILang.isObject(test_set[i], true),  // failfn = true 
                ["non-valid data test", test_set[i]].join(": "));
        for (var i = 0; i < obj_type.length; i++)
            ok(YUILang.isObject(test_data[obj_type[i]], true), 
                ["valid data test", obj_type[i]].join(": "));
    });
    
    QUnit.test("YUILang.isString", function() {
        var test_set = test_data_val.filter(
                    function( x, i) { return test_data_key[i] !== STR; });
        for (var i = 0; i < test_set.length; i++)
            ok(!YUILang.isString(test_set[i]), ["non-valid data test", 
                test_set[i]].join(": "));
        ok(YUILang.isString(test_data[STR]), "valid data test");
    });
    
    QUnit.test("YUILang.isValue", function() {
        var test_set = test_data_val.filter(
                    function( x, i) { return value_type.some(
                        function(v) { test_data_key[i] !== v; }); });
        for (var i = 0; i < test_set.length; i++)
            ok(!YUILang.isValue(test_set[i]), ["non-valid data test", 
                test_set[i]].join(": "));
        for (var i = 0; i < value_type.length; i++)
            ok(YUILang.isValue(test_data[value_type[i]]), 
                ["valid data test", value_type[i]].join(": "));
    });
    
    QUnit.start();

})();