const fs = require('fs');

function rishiFile(cb) {                                            // Creating a Wrapper function 
    fs.readFile("a.txt", "utf-8", function(err, data){              // JS provided Async function
        cb(data);
    });
}

function onDone(data) {
    console.log(data);
}

rishiFile(onDone);              // Clling rishiFile and passing onDone as a callback(cb) function to it.