// DRY: Don't Repeat Yourself!

// WHILE Loops: 
// repeat code while a condition is true

// print numbers
var count = 1
while(count < 6){
    console.log("count is" + count);
    count ++;
}

// print each character in a string
var str="hello";
var count=0;

while(count < str.length){
    console.log(str[count]);
    count++;
}

// Infinite loop occurs is the condition we provide is never false
// 

// prints out all multiples of 4
var num = 1;
while(num <= 20){
    if(num % 4 ===0){
        console.log(num);
    }
    num++
}

// infinite loop
var num = 100;
while(num < 150){
    console.log(num + 1);
    num --; //important part
}

// while loop problem set
// 1.print all numbers between -10 and 19
var num = -10
while(num <= 19){
    console.log(num)
    num++
}

// 2. print all even numbers between 10 and 40

// DRY
var num = 10;
while(num<=40){
    num+=2;
}

// or

// WET (but will always print out even numbers)
var num = 10;
while(num<=40){
    if(num % 2 ===0){
        console.log(num)
    }
    num++;
}

// 3. print all odd numbers between 300 and 333
var num = 300;
while(num<=333){
    if(num % 2 !== 0){
        console.log(num)
    }
    num++;
}

// 4. Print all numbers divisible by both 5 and 3 between 5 and 50

var num = 5;
while(num<=50){
    if(num % 3===0 && num % 5===0){
        console.log(num)
    }
    num++;
}


// Annoy-omatic: Are We there yet? Run until user says yes
var answer = prompt("are we there yet?");
while(answer !== "yes" && answer !== "yeah"){
    var answer = prompt("are we there yet?");
}
alert("We made it!")

// Bonus: check if string contains yes
// Method: IndexOf
// V.2
var answer = prompt("are we there yet?");
while(answer.indexOf("yes") === -1)
//                              | this means that the word yes does not exist in our answer
                                    {
    var answer = prompt("are we there yet?");
}
alert("We made it!")

