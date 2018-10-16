
// For loop -- dealing with is a number
var array = [1,2,3,4,5,6];
for( var i=0; i <= array.length; i++){

    console.log(array[i])
} 


// forEach
// only dealing with a name, or temporary item
// part of array prototype like shift and pop and push
array.forEach(function(color){
    console.log(color)
})


// TODO List Upgrade
let toDos = [];

var input = prompt("what do you want to do?");
while(input !== "quit"){
    if(input === "list"){
        listToDos()
    } else if(input === "new"){ 
        addToDo()
    } else if (input === "delete"){
        deleteToDo()
        }           // |   |
                    // |    how many after this index to be erased  
                    // index to erase 
    // ask again for new input
    input = prompt("what do you want to do?");
}
console.log("OK, you quit")


function listToDos(){
    // handle input
    toDos.forEach(function(todo, i){ //| refers to the index of that item)    
        console.log(i +  "new todo " + todo)
    });
}

function addToDo(){
    // ask the user for new todo
    let newToDo = prompt("what do you want to do?");
    // add to todo list
    toDos.push(newToDo);
}
 
function deleteToDo(){
     // ask for index of todo to be deleted
     var index = prompt("enter index of todo to delete");
     // delete that todo
     // splice()
     toDos.splice(index, 1)
}

