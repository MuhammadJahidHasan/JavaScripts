

const Animal = function(name){

    this.name = name;
    
    this.canWalk = function(){

       console.log(`${this.name} can walk`);
    };

};

Animal.prototype = {

 canSound: function(){

     console.log(`Animal common sound`);
  }

}

const Cat = function(name){

     //this.name = name;
     Animal.call(this, name);

};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.canSound = function(){

    console.log('This is cat sound miaw miaw');
}

const Dog = function(name){

    this.name = name;

};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.canSound = function(){

    console.log('This is Dog sound ghew ghew');
}

const a1 = new Animal('Tiger');
const a2 = new Animal('Lion');
const c1 = new Cat('miny');
const d1 = new Dog('kalu');

c1.canSound();
d1.canSound();




