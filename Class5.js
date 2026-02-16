console.log("Hi there!");

setTimeout(function() {
    console.log("From the inside Async function");
}, 2000);

    let a = 0;

    for (let i = 0; i < 5; i++) {
        a = a + i;
    }
    console.log(a);


console.log(a);