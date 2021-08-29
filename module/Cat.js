
import Animal from './Animal.js'
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

export default Cat
