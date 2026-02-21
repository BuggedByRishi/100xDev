// async fn()
// some sync task
// want my work which async return 
// some other sync task 

function Promisified(duration) {
    const p = new Promise(function(resolve) {
        setTimeout(resolve, duration);
    })
    return p
}

// promise chaining

Promisified(1000).then(function() {
    console.log("First is done");
    Promisified(1000).then(function() {
        console.log("Secondone done");
    });
})