let carConstructor = function(year, model, color){
    this.year=year;
    this.model=model;
    this.color=color;

    this.printCar = function(){
        console.log('year: ' + this.year + ' model: ' + this.model + ' model: ' + this.model);
    }
}

// constructor pattern : using the word new 
let car1 = new carConstructor(2002, 'Acura', 'green');
let car2 = new carConstructor(2013, 'Infiniti', 'blue');

car1.printCar();
car2.printCar();

// differs from factory Objects in the way that you dont use a temporary object but you 
// attach and cerate properties for the function(object) itself

// ________________________________________________________________


let personConstructor= function(name, age, location){

    this.name=name;
    this.age=age;
    this.location=location;

    this.printPerson = function(){
        console.log('name: ' + this.name + ' age: ' + this.age + ' location: ' + this.location)
    }
}

let person1 = new personConstructor("colby", 25, "miami");
let person2 = new personConstructor("jame", 50, "Atlanta");

person1.printPerson();
person2.printPerson();
// there is a lot of redundancy in constructor functions because it includes every variable when you go to use it

