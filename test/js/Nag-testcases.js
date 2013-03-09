/**
 * @project Nag.js
 * @purpose Testcases for Nag.js
 * @author Larry Battle , <http://bateru.com/news/>
 * @license MIT and GPL 3.0
 */
var exports = {};
// contains all tests.
var runTests = function () {
	asyncTest("test Nag time delay == 0", function () {
		var options = {
			delay : 0
		};
		var counter = 0;
		var callback = function () {
			counter++;
		};
		var check = Nag(options, callback);
		check();
		
		ok(true, "always fine");
		start();
			
	});
	asyncTest("test Nag time delay 100ms", function () {
		var options = {
			delay : 100
		};
		var callback = function () {
		};
		var check = Nag(options, callback);

		for (var i = 0, len = 10000; i < len; i++) {
			check("ok", i + 1);
		}
		setTimeout(function () {
			ok(true, "always fine");
			start();
		}, 13);
	});
};
var reRunTests = function () {
	QUnit.reset(); // should clear the DOM
	QUnit.init(); // resets the qunit test environment
	QUnit.start(); // allows for the new test to be captured.
	runTests();
};














