// Create a function that logs something after 1s and waits for 2s and logs something other 

setTimeout(function() {
    console.log("Hi there!");
    console.log("Waiting fot two Seconds");
    setTimeout(function() {
        console.log("Done!");
    }, 2000)
}, 1000)