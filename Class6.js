function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
}

myOwnSetTimeout(function() {
    console.log("Hi there!");
}, 1000)