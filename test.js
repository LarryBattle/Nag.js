var check = Nag(function () {
        console.log(arguments[0], arguments[1]);
    }, 100);

for (var i = 0, len = 10000; i < len; i++) {
    check("ok",i+1); 
}
