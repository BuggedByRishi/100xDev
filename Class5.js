let p = new Promise(function(resolve) {
    resolve("Hi there");
});

p.then(function(){
    console.log(p)
})