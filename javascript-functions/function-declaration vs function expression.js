// Function Declaration
// 
function capitalize(str){
    return str.chartAt(0).toUpperCase() + str.slice(1);
}

// Function Expression
// your function can become lost is you rename this variable anywhere else in the code
var capitalization = function(str){
    return str.chartAt(0).toUpperCase() + str.slice(1);
}


// Functions Problem Set

// Write a Function isEven() which takes a single numeric argument and returns
//  true if the number is even and false otherwise
function isEven(arg){
    return arg % 2 === 0;
            // | this is a true or false statement (boolean statement)
            // returns the value immediately
}

// Write a function factorial which takes a single numeric argument 
// and returns the factorial of that argument
// multiplies that number by every interger below that
// 0! is 1
function factorial(num){
    // define a result variable
var result = 1;
    // calculate factorial and store value in result
for(var i = 2; i <= num; i++ ){
    result *= i;
}
    // return the result variable
    return result
}
// factorial(4) 4 x 3 x 2 x 1



// write a function kebabToSnake() which takes a single kebab-cased string argument 
// and returns the snake cased version





