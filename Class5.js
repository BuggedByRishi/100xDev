const fs = require('fs');   // Using File system module to read and write files

function rishiFile() {   
    console.log("Inside rishiFile");                                                // Async functions
    return new Promise(function(resolve) {
        console.log("Inside Promise");
        fs.readFile("a.txt", "utf-8", function(err, data) {
            console.log("Before resolve");
            resolve(data);
        })
    })
}

function onDone(data) {                 // Callback function to call the async function
    console.log(data)
}

var a = rishiFile();   // Calling the async function and then calling the callback function on completion
a.then(onDone);