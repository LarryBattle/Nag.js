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
var Nag = function (callback, timeDelay) {
    if (typeof callback !== "function") {
        throw new Error("The callback must be function");
    }
    var t;
    return function () {
        window.clearTimeout(t);
        var args = arguments,
            that = this;
        t = setTimeout(function(){
            callback.apply(that, args);
        }, timeDelay);
    };
};
Nag.version = "0.0.5";