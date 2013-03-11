/**
 * Nag.js <https://github.com/LarryBattle/Nag.js>
 * @author Larry Battle <bateru.com/news>
 * @date March 6, 2013
 * @version 0.0.5
 * @license MIT
 */
/*
 * Returns a function that will be called once not called for a time delay.
 */
var Nag = (function () {
	var Nag = function (options, callback) {
		checkInput(options, callback);
		var fn = callback;
		if (typeof options.delay != "undefined") {
			fn = createDelayCallback(options.delay, callback);
		}else if (typeof options.count != "undefined") {
			fn = createCountCallback(options.count, callback);
		}
		return fn;
	};
	var checkInput = function (options, callback) {
		if (typeof options !== "object") {
			throw new Error("`options` must be an object.");
		}
		if (typeof callback !== "function") {
			throw new Error("The callback must be function");
		}
	};
	var createDelayCallback = function (timeDelay, callback) {
		var t;
		return function () {
			window.clearTimeout(t);
			var args = arguments,
			that = this;
			t = setTimeout(function () {
					callback.apply(that, args);
				}, timeDelay);
		};
	};
	var createCountCallback = function (count, callback) {
		count = (0 < count && count < Infinity) ? +count : 0;
		return function () {
			if (count < 0) {
				return;
			}
			if (0 < count) {
				count--;
			} else {
				return callback.apply(this, arguments);
			}
		};
	};
	Nag.version = "0.2";
	return Nag;
})();
// Adds npm support
if (typeof exports !== 'undefined') {
	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports = Nag;
	}
	exports.Nag = Nag;
}
