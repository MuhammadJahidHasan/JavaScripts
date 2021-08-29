

const array = [1,2,3,4,5];

const re = array.find(function(currentValue, index , arr){

    return currentValue > 2;
});

console.log(re);

const re1 = array.findIndex(function(currentValue, index , arr){

    return currentValue > 2;
});

console.log(re1);

const re2 = array.filter(function(currentValue, index , arr){
   
    return currentValue > 2;
});

console.log(re2);

const re3 = array.slice(1,3);
console.log(re3);

const num = [1,2,3,4,5];

const re4 = num.splice(1,2,7,8,9);
console.log(num, re4);

const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9,10];

const re5 = num1.concat(num2);

console.log(re5);

const num4 = [6,7,8,9,10];

num4.push(6,7,8);

const re6 = array.map((num)=>{
      return num + 5;

});

console.log(re6);

const sum = array.reduce((preValue, currValue, index, arr)=>{
 
       return preValue + currValue;

},0);

console.log(`sum = ${sum}`);