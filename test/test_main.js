"use strict";

// Node testrunner

(function() {

    var path = require("path"),
        fs = require("fs"), 
        vm = require("vm");
    
    function load_script(script) {
        path.exists(script, function(exists) {
            if (!exists) throw new Error([script, ": not a valid path"].join(""));
        });
        vm.runInThisContext(fs.readFileSync(script, "utf-8"), script);    
    }
    
    load_script(path.join(__dirname, "qunit", "qunit.js"));
    load_script(path.join(__dirname, "qunit", "qunitx.js"));
    QUnitX.UseCli();

    load_script(path.join(__dirname, "..", "YUILang_config.js"));
    load_script(path.join(__dirname, "..", "YUILang.js"));
    load_script(path.join(__dirname, "..", "YUILangX.js"));
    load_script(path.join(__dirname, "testYUILang.js"));
    load_script(path.join(__dirname, "testYUILangX.js"));    

    load_script(path.join(__dirname, "..", "YUIAssert.js"));
    load_script(path.join(__dirname, "..", "YUIAssertX.js"));
    load_script(path.join(__dirname, "testYUIAssert.js"));
    load_script(path.join(__dirname, "testYUIAssertX.js"));
    
    load_script(path.join(__dirname, "..", "YUIDateAssert.js"));
    load_script(path.join(__dirname, "testYUIDateAssert.js"));
    
    load_script(path.join(__dirname, "..", "YUILog_config.js"));
    load_script(path.join(__dirname, "..", "YUILog.js"));
    load_script(path.join(__dirname, "testYUILog.js"));    
    
    load_script(path.join(__dirname, "..", "YUIArray.js"));
    load_script(path.join(__dirname, "testYUIArray.js"));
    
    load_script(path.join(__dirname, "..", "YUIObject.js"));
    load_script(path.join(__dirname, "testYUIObject.js"));    
    
    load_script(path.join(__dirname, "..", "YUIObjectAssert.js"));
    load_script(path.join(__dirname, "testYUIObjectAssert.js"));    
    
    load_script(path.join(__dirname, "..", "YUIArrayAssert.js"));
    load_script(path.join(__dirname, "testYUIArrayAssert.js"));
    
    QUnit.start();

})();
