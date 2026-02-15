function square(n) {
    return n *n;
}

function sumOfSquares(a, b) {
    const value1 = square(a);
    const value2 = square(b);

    return value1 + value2;
}

console.log(sumOfSquares(3, 4));