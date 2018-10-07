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


