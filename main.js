function calculateArithmetic(a, b, arithmeticFinalFunction)     // 2. arithmeticFinalFunction hold the function sum 
{
    const ans = arithmeticFinalFunction(a, b);              // 3. Stores the values in the variable and the Returns it to the next function
    return ans;
}

function sum(a, b)
{
     return a + b;                          // 4. The Sum is being returned
}

const value = calculateArithmetic(1, 2, sum);           // 1. Passes the parameters and function "sum" to "calculateArithmetic" 
console.log(value); 