// create secret number
var secretNumber = 4
// ask user for guess
var guess = Number(prompt("what is your guess"));
// guess will output as a string
// Number(); //this will turn the guess into a number value
// take the string and turn it into a number

// check guess
// check if guess is right
if (guess===secretNumber){
    alert("youve got it!")
} else if(guess>secretNumber) 
    alert("too high try again")
else{
    alert("too low, try again")
}