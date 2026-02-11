function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);                           // This is a callback function that will be called with the result of the sum
}

function displayResult(data) {
    console.log("The result of the sum is: " + data);
}

function displayResultPassive(data) {
    console.log("The sum's result is: " + data);
}

const ans = sum(5, 10, displayResult);          // Passed this function to the function sum, so that it can call it when it has the result of the sum. This is a callback function.