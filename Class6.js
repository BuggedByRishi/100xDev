function onDone() {
    console.log("Hi there");    
}

setTimeout(onDone, 1000);
console.log("After SetTimeout");        

for(let i = 0; i < 100; i++){
    console.log("Hellows");
}