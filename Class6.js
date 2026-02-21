function myPromise(duration) {          
    const p = new Promise(function(resolve) {               // Defining Asynchronous Function
        setTimeout(function() {
            resolve();
        }, duration);
    });
    return p;
}

// Promise
const ans = myPromise(1000);                    // Calling Asynchronous Function
ans.then(function(){
    console.log("Timeout is Done");
});