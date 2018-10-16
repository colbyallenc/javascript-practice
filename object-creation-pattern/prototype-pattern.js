// Different that constructor and factorial
// instead of creating a function with properties and functions we create an empty object

const peopleProto = function(){


}
// each object gets a shared space called prototype

// creating defaults: 
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson =function(){
    console.log(`${this.name}  ${this.age}  ${this.city}`)
}

//prototypes are being shadowed by this person, if any of this info is missing, if will provide the default
var person1 = new peopleProto();
person1.name = 'john';
person1.age = 23;
person1.city = 'CA';

person1.printPerson();

// disadvantage: you have to create an empty object and then properties of it.
// creates a confusion


