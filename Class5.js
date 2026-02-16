const fs = require("fs");
// filesystem module

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
})

console.log("This is the end of the code");