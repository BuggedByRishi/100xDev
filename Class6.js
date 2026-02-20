console.log("Hi there");

setTimeout(function(){
    console.log("Inside the 1st Loop");

    setTimeout(function(){
        console.log("Inside the 2nd Loop");
    },5000)
},10000);

console.log("Hollas!");