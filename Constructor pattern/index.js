
const createBike = function(name, brand){

        this.name = name
        this.brand = brand,
        this.price = 200000,
    
        this.break = function(){
      
              console.log('Ready to stop bike');
    
        }
};

const b1 = new createBike('Hornet', 'Honda');

b1.break();
console.log(b1.name);

const b2 = new createBike('Saluto', 'Yamaha');
b2.break();
console.log(b2.constructor);



