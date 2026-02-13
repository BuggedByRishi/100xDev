const currentDate = new Date();

console.log("Time in milliseconds since 1970 : ",currentDate.getTime()); 
 
function calculateSum() {
    let a = 0;
    for (let i = 0; i < 100000; i++) {
        a = a + i;                        // Just a loop to consume time
    }
    return a;
}

const beforeDate = new Date();  
const beforeTimeInMs = beforeDate.getTime();    
calculateSum();

const afterDate = new Date();  
const afterTimeInMs = afterDate.getTime();  
calculateSum();

console.log(afterTimeInMs - beforeTimeInMs);