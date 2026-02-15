function sum(n) {                       // Function to calculate Sum
    let ans = 0;

    for(let i = 0; i < n; i++) {
        ans = ans+1;
    }
    return ans;                         // Returning the Sum
}

let demo = sum(100);                    // Calling the function nad storing the result in the demo variable
console.log(demo);

let demo2 = sum(1000);                  // Calling the function nad storing the result in the demo2 variable
console.log(demo2);
    