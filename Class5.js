const fs = require('fs');   // Using File system module to read and write files

function rishiFile() {                                                   // Async functions
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data);
        })
    })
}

function onDone(data) {                 // Callback function to call the async function
    console.log(data)
}

rishiFile().then(onDone);   // Calling the async function and then calling the callback function on completion