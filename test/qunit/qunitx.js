
var QUnitX = {};

// This is the cli-runner code[1] (as of April 2012) copied over 
// from the cli branch of qunit.  Modifications (at least one)
// are flagged with #gso.
//
// An alternative if using node is the node-qunit package[2]
//
// Load qunit and then run this function to set the appropriate
// qunit settings inorder to redirect output to console.log.
//
// [1] https://github.com/jquery/qunit/blob/cli/test/suite.js
// [2] https://github.com/kof/node-qunit

QUnitX.UseCli = function() {
    QUnit.init();
    QUnit.config.blocking = true;
    QUnit.config.updateRate = 0;

    var current_test_assertions = [];
    QUnit.testDone(function(result) {
        if (result.failed) {
            console.log("\u001B[31m✖ " + result.name);  // blurb is red colour #gso
            for (var i = 0; i < current_test_assertions.length; i++) {
				console.log("    " + current_test_assertions[i]);
			}
			console.log("\u001B[39m");
		} else {
		    console.log("✔ " + result.name);
		}
		current_test_assertions = [];
    });

	QUnit.log(function(details) {
		if (details.result)
			return;
		var response = details.message || "";
		if (typeof details.expected !== "undefined") {
			if (response) {
				response += ", ";
			}
			//response = "expected: " + details.expected + ", but was: " + details.actual;  #gso
    		response = "expected: " + details.expected + ", but was: " + 
                                            details.actual + ", " + response;
		}
		current_test_assertions.push("Failed assertion: " + response);
    });

    QUnit.done(function(result) {
		console.log("------------------------------------");
		console.log(" PASS: " + result.passed + "  FAIL: " + result.failed + "  TOTAL: " + result.total);
		console.log(" Finished in " + result.runtime + " milliseconds.");
		console.log("------------------------------------");
    });
};
