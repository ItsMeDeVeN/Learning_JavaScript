class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }

    run(speed){
        this.speed = speed;
        console.log(`Run method for ${this.name} called in the Parent class with speed = ${speed}.`);
    }

    stop(){
        this.speed = 0;
        console.log(`Using the stop method decalred in the parent class.`);
    }
}

// let animal = new Animal("New Animal");      
// animal.run(10);

class lion extends Animal{                  //Extended class of Animal is created.
    hide(){
        console.log(`The ${this.name} is hidden using the extended class.`);
    }
    
    stop(){                                 //This can be used to overwrite the method declared in parent class.
        console.log(`Stopped using the overwritten run function in the class ${this.name}.`)
    }
}
// let Lion = new lion("Lion");        //It inherits all the ethods of the parent class as well.
// Lion.run(20);
// Lion.hide();
// Lion.stop();

// Using Super method.
// Arrow functions have no super function.
class Tiger extends Animal{
    stop(){
        super.stop();               //Using the super keyword to import the method from the parent class.
        console.log("Decalred using the super keyword to import it from the parent class")
    }
    
    run(speed){
        super.run(speed);
        console.log("Decalred using the super keyword to import it from the parent class")
    }
}

let tiger = new Tiger("Tiger");
tiger.stop();
tiger.run(10);