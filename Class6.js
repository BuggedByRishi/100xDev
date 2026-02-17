    function square(n) {
        return n * n;
    }

    function cube(n) {
        return n * n * n;
    }

    // Generic function that takes a function as an argument
    function sumOfSomething(a,b,fn) {       // Passing the function as an argument
        let square1 = fn(a);
        let square2 = fn(b);
        return square1 + square2;
    }

    let ans = sumOfSomething(1, 2, square); 
    console.log(ans);