

const calculate = function(x, y, cb){

     let c = x + y;

     let d = x - y;

     let result = cb(c, d);

     return result;

};

const add = function(a, b){

      return a + b;
};

const result = calculate(10, 5, add);

console.log(result);

const result2 = calculate(10, 5, function(c, d){
        return c*d;

});

console.log(result2);

const arr = [1,2,3,4,5];
let sum = 0;
arr.forEach(function(value, index){
    
    sum += value;

});

console.log(sum);

//Make a function like forEach with callback

const arrTraverse = function(arr,cb){

      for(let i = 0; i<arr.length; i++){
       
          let re = cb(arr[i], i, arr);  
           
      }
};

arrTraverse(arr, function(value, index, arr){

       console.log(value, index, arr);   

});