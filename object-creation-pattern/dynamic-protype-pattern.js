const peopleDynamicProto = function(name, age, state){
    this.name = name;
    this.age=age;
    this.state=state;

    // if i dont find this function, create one.. within the prototype space
    if(typeof this.printPerson !== "function"){
        peopleDynamicProto.prototype.printPerson =function(){
            console.log(`${this.name}  ${this.age}  ${this.city}`)
        }
    }

}

var person1 = new peopleDynamicProto('jon', 23, 'CA');
person1.printPerson();



