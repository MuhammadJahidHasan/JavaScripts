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
let st = 'Above 18'
printAge.call(Sakib,st);
printAge.call(Tarek,st);

