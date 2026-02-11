function greet() {
    console.log("Hello World!");
}

function greetAlien() {
    console.log("Hello Alien!");
}

setTimeout(greet, 3 * 1000);
setTimeout(greetAlien, 6 * 1000);
