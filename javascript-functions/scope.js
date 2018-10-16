
// local scope
// variables cannot be accessed outside of the function
function doMath(){
    var x = 40;
    console.log(x);
}


// global scope
// not inside of any function
function doMath(){
    var x = 40;
    console.log(x);
}
var x = "hello"


// when we create a function it has its own set of variables
// when we define something outside of a function, we still have 
// access to it inside of the function
// but the opposite is not true

var y = 99;
function doMoreMath(){
    y = 100
    console.log(y)
}

// will print 100 because y is being changed inside of the function


var phrase = "hi there";
function doSomething(){
    var phrase = "goodbye"
    console.log(phrase)
}

// two individual variables. the initial phrase wont change because youre calling var inside of the function 

