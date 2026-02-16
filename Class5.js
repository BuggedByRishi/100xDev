var d = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Foo");
    }, 10000)
})

function callback() {
    console.log(d);
}

console.log(d);
d.then(callback);