// All comes from data structures in other programming languages called  "Stacks" and "Queues" 

// push
//will be added to the end
var colors = ["red" , "orange", "yellow"];
colors.push("indigo");
// also returns the length of the array*
//   | this can be useful if we want to save that value in a variable

// Pop
// removes from the end of the list
var colors = ["red" , "orange", "yellow"];
colors.pop(); //takes no argument
// returns the last item in the array
        //   | this can be useful if we want to save that value in a variable

// shift
 var colors = ["red" , "orange", "yellow"];
colors.unshift("pink");

// unshift
// use unshift to add to the front of an array
var colors = ["red" , "orange", "yellow"];
colors.shift();

// indexOf
// returns the first index at which a given element can be found
// use to remove the first item in an array
// Use to find the index of any item in an array
// returns -1 if the element if not found. 

// slice
// Use to copy parts of an array
var colors = ["red" , "orange", "yellow","green","blue"];
colors.slice(1,3);
        // "orange", "yellow"
// first argument:
    // starting index
 // second argument
        // where the slice should stop -- not inclusive
        //                       | doesn't include the value at this number    
// *We can also use slice to copy an entire array

//  Nested Array
//  variable[firstLayer][secondLayer].andSoOn


