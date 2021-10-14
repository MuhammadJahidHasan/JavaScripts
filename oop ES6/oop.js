

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

      constructor(name, color){
          super(name);
           this.color = color;

      }


      //Override method
      canWalk(){

        console.log(`${this.name} can walk also`);
    }

      canEat(){
        
          console.log(`${this.name} can eat`);
      }

}

const c1 = new Cat('miki', 'white');

c1.canWalk();
c1.canEat();
