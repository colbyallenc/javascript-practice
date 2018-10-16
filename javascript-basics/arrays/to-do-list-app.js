let toDos = [];

var input = prompt("what do you want to do?");

while(input !== "quit"){
    // handle input
    if(input === "list"){
        console.log(toDos)
    } else if(input === "new"){
        // ask the user for new todo
        let newToDo = prompt("what do you want to do?");
        // add to todo list
        toDos.push(newToDo);
    } 
    // ask again for new input
    input = prompt("what do you want to do?");
}
console.log("OK, you quit")

