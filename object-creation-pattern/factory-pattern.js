let carFactory = function(year, color, make){
    
    let temp = {}
    //        |  same as let temp = new Object
    temp.year = year;
    temp.age = color;
    temp.make = make;
    temp.printFactory = function(){
        console.log('year: ' + temp.year + ", " + " age: " + temp.age + ", " + ' make: ' + temp.make  )
    }

    return temp;
    //dont keep forgetting this part. The object has to be returned as a part of the function carFactory
}


let car1 = carFactory(2002, 'green','Acura')
let car2 = carFactory(2013, 'blue','Infiniti')


// you can either...
//  call the function and pass variables as the arguments:
// carFactory(car1, car2);

// console.log both cars:
// console.log(car1, car2);

// BEST way..
car1.printFactory();
car2.printFactory();