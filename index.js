 function square(n) {
    return n * n;
 }

 function cube(n) {
    return n * n * n;
 }

 function sumOfSquare(a, b) {
    let ans1 = square(a) + square(b);
    return ans1;
 }

 function sumOfCube(a, b) {
    let ans2 = cube(a) + cube(b);
    return ans2;
 }

 console.log(sumOfSquare(2, 3));