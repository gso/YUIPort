
(function() {

    QUnit.module("DateAssert functions");

    QUnit.test("YUIArrayAssert.contains", function() {
        ok(!YUIArrayAssert.contains("b", ["a", "b", "c", "d"], ""), 
                                    "valid data test");
        raises(function() {
            YUIArrayAssert.contains("x", ["a", "b", "c", "d"], "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.doesNotContain", function() {
        ok(!YUIArrayAssert.doesNotContain("x", ["a", "b", "c", "d"], ""), 
                                            "valid data test");
        raises(function() {
            YUIArrayAssert.doesNotContain("b", ["a", "b", "c", "d"], "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.containsItems", function() {
        ok(!YUIArrayAssert.containsItems(["b", "c"], ["a", "b", "c", "d"], ""), 
                                            "valid data test");
        raises(function() {
            YUIArrayAssert.containsItems(["x", "y"], ["a", "b", "c", "d"], "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.doesNotContainItems", function() {
        ok(!YUIArrayAssert.doesNotContainItems(["x", "y"], 
                                                ["a", "b", "c", "d"], ""), 
                                                "valid data test");
        raises(function() {
            YUIArrayAssert.doesNotContainItems(["b", "c"], 
                                                ["a", "b", "c", "d"], "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.containsMatch", function() {
        ok(!YUIArrayAssert.containsMatch(function() {
                return true;
        }, ["a", "b", "c", "d"], ""), "valid data test");
        raises(function() {
            YUIArrayAssert.containsMatch(function() {
                return false;
            }, ["a", "b", "c", "d"], "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.doesNotContainMatch", function() {
        ok(!YUIArrayAssert.doesNotContainMatch(function() {
                return false;
            }, ["a", "b", "c", "d"], ""), "valid data test");
        raises(function() {
            YUIArrayAssert.doesNotContainMatch(function() {
                return true;
            }, ["a", "b", "c", "d"], "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.indexOf", function() {
        ok(!YUIArrayAssert.indexOf("b", ["a", "b", "c", "d"], 1, ""), 
            "valid data test");
        raises(function() {
            YUIArrayAssert.indexOf("b", ["a", "b", "c", "d"], 3, "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.lastIndexOf", function() {
        ok(!YUIArrayAssert.lastIndexOf("c", ["a", "b", "c", "d"], 2, ""), 
            "valid data test");
        raises(function() {
            YUIArrayAssert.lastIndexOf("b", ["a", "b", "c", "d"], 0, "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.itemsAreEqual", function() {
        ok(!YUIArrayAssert.itemsAreEqual(["a", "b", "c", "d"], 
                                            ["a", "b", "c", "d"], ""), 
            "valid data test");
        raises(function() {
            YUIArrayAssert.itemsAreEqual(["a", "b", "c", "d"], 
                                            ["a", "c", "b", "d"], ""); 
        }, YUIAssertionError, "non-valid data test");
    });
    
    QUnit.test("YUIArrayAssert.itemsAreSame", function() {
        ok(!YUIArrayAssert.itemsAreSame(["a", "b", "c", "d"], 
                                            ["a", "b", "c", "d"], ""), 
            "valid data test");
        raises(function() {
            YUIArrayAssert.itemsAreSame(["a", "b", "c", "d"], 
                                            ["a", "c", "b", "d"], ""); 
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.itemsAreEquivalent", function() {
        ok(!YUIArrayAssert.itemsAreEquivalent(["a", "b", "c", "d"], 
                                            ["a", "b", "c", "d"], 
                                            function() { return true; }, ""), 
            "valid data test");
        raises(function() {
            YUIArrayAssert.itemsAreEquivalent(["a", "b", "c", "d"], 
                                                ["a", "b", "c", "d"], 
                                                function() { return false; },
                                                ""); 
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.isEmpty", function() {
        ok(!YUIArrayAssert.isEmpty([], ""), "valid data test");
        raises(function() {
            YUIArrayAssert.isEmpty(["a"], "");
        }, YUIAssertionError, "non-valid data test");
    });

    QUnit.test("YUIArrayAssert.isNotEmpty", function() {
        ok(!YUIArrayAssert.isNotEmpty(["a"], ""), "valid data test");
        raises(function() {
            YUIArrayAssert.isNotEmpty([], "");
        }, YUIAssertionError, "non-valid data test");
    });

})();
