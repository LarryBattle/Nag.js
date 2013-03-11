## Nag.js
Wraps a function with in a condition.

Version `0.2`

### `Nag(options, callback)`

Options:

`option.count` : {Number} - Count amount
Executes the callback only after the wrapped function has been called the amount of times given by `option.count`.

Example:

    var fn = Nag({count:3}, function(){console.log("called");})
    fn();
    fn();
    fn();
    fn(); // prints `called`
    fn(); // prints `called`

`option.delay` : {Number} - Milliseconds

The callback function will be called only after not being called within the amount of milliseconds given by `option.delay`. 
Once the time peroid is over, the callback is executed with the arguments from the last function call.

Example:

    var check = Nag({delay:100}, function () {
            console.log(arguments[0], arguments[1]);
        });

    for (var i = 0, len = 10000; i < len; i++) {
        check("ok",i+1); 
    }

    // Logs "ok", 10000
    
`callback` : {Function}
