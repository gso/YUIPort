
(function() {

    QUnit.module("Log functions");
    
    QUnit.test("YUILog.log", function() {
        ok(YUILog.log("Testing 'log' call", "info"), "valid data test");
    });
    
    QUnit.test("YUILog.message", function() {
        ok(YUILog.message("Testing 'message' call", "info"), "valid data test");
    });

})();
