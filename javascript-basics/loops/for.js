// Printing numbers from 1-5 with a for loops

for(init;conditions;step){
    // run some code
}

for(var count=0; count <=5; count++){
    console.log(count)
}

// Print numbers from 1 - 15
for(var count=0; count<6; count++){
    console.log(count);
}

// Print each character in a string with a for loop
var str="hello"
for(var i=0;i<=str.length; i++){
    console.log(count[i]);
}

// Exercises

for(var i=0; i<16; i+=8){
    console.log(i)
}
// only 0,8 will be logged

var str = "asdfghjkl";
for(var i=1; 1<str.length;i+=2){
    console.log(str[i])
}
// will log every other character


// FOR LOOP PROBLEM SET

// 1.print all numbers between -10 and 19
for(var i= -10; i <= 19; i++){
    console.log(i);
}

// 2. print all even numbers between 10 and 40
for(var i= 10; i<= 40; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// 3. print all odd numbers between 300 and 333
for(var i= 300; i<= 333; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

// 4. Print all numbers divisible by both 5 and 3 between 5 and 50
for(var i= 5; i<= 50; i++){
    if(i % 2 === 5 && i % 2 === 3){
        console.log(i)
    }
}