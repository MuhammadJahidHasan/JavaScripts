

class Animal {

    constructor(name, age){

        this.name = name;
        this. age = age;
    }

    canWalk(){

        console.log(`${this.name} can walk`);
    }

}

class Cat extends Animal{

      constructor(name){
          super();
           this.name = name;

      }


      //Override method
      canWalk(){

        console.log(`${this.name} can walk also`);
    }

      canEat(){
        
          console.log(`${this.name} can eat`);
      }

}

const c1 = new Cat('miki');

c1.canWalk();
c1.canEat();