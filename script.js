class Animal {
    constructor(name,legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }  
    speak() {
        console.log("Hi there " + this.speaks);
    }
}

let dog = new Animal("dog", 4, "Bhow Bhow");    // Create Objects
let cat = new Animal("cat", 4, "Meow Meow");
dog.speak();            // call function on object
cat.speak();   


// Class, Objcet