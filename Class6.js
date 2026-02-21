function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
}

myOwnSetTimeout(function() {
    console.log("done!");
},1000)

console.log("Hey there!");