const fs = require("fs");
// filesystem module

fs.readFile("a.txt", "utf-8", function (err, data) {    // Asynchronous Read file function (an expensive function as this takes time to read a file)
    console.log(data);  
})

console.log("Hi there");
let a = 0;
for(let i = 0; i < 100; i++) {
    a++;
}

console.log("Bye there");