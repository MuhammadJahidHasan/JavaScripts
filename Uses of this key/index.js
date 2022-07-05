//Emplicit uses of this keywords

const Sakib = {

    Name: 'Sakib',
    Age: 21,

    printName: function(){
        console.log(this.Name);
    },
};

const Tarek = {

    Name: 'Tarek',
    Age: 22,

    printName: function(){
        console.log(this.Name);
    }

};
Sakib.printName();
Tarek.printName();


//Explicit uses of this keywords

const printAge = function(st){
   
    console.log(`${this.Age} is ${st}`);

};
let str = 'Above 18'
//call
printAge.call(Sakib,str);
printAge.call(Tarek,str);

//apply
printAge.apply(Tarek,[str, 'abc']);

//bind
const fn = printAge.bind(Sakib, str);

fn();


