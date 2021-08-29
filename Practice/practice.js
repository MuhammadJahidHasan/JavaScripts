
/*const marksMass = 78, marksHeight = 1.69;
const jonsMass = 95, jonsHeight = 1.95;

const marksBMI = marksMass/marksHeight ** 2;
const jonsBMI = jonsMass/(jonsHeight * jonsHeight);

console.log(marksBMI, jonsBMI);

//const markHigherBMI = marksBMI > jonsBMI;
//console.log(markHigherBMI);

if(marksBMI > jonsBMI){
   console.log(`marksBMI ${marksBMI} higher than jons`);
}

else{
  console.log(`jonsBMI ${jonsBMI} higher than marks`);	
}
const Dolphins = 96+180+89;
const Koalas = 88+91+110;

const avadol = Dolphins/3;
const avkola = Koalas/3;
if(avadol>=100 && avadol>avkola)
{
   console.log("dolpjins wins");
}
else if(avadol===avkola){console.log("Match drawn");}
else{
   console.log("Koalas win");
}	
const ceheckWinner = function(avarageDols, avarageColas){
         
         if(avarageDols>=avarageColas*2){
		    return 'Dolhins win';
		 }
	    else if(avarageDols*2<=avarageColas){
	          return 'Kolas win';
		}
	
	else{
	    return 'nobody else';
	}
}

const calcAverage = (num1,num2,num3)=> (num1+num2+num3)/3;

  const avarageDols = calcAverage(90,90,710);
  const avarageColas = calcAverage(65,54,49);
  console.log(ceheckWinner(avarageDols,avarageColas));	
      
 

 const calcTip = function(bill){
 
          if(bill>=50 && bill<=300){
		    return (bill*15)/100;
		  }
	     else{
	        return (bill*20)/100;  
	     }
 }
 
 const bill = [125,555,44];

 const tip = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];
			  
console.log(bill,tip);		  


 const object1 ={
 
      Name: 'Mark millar',
	  Mass:78,
	  Height:1.69,
      calcBMI: function(){
	     this.bmi= this.Mass/(this.Height*this.Height);
		  return this.bmi;
	  }
 };

 const object2 ={
 
      Name: 'John Smith',
	  Mass:92,
	  Height:1.95,
      calcBMI: function(){
	    this.bmi= this.Mass/(this.Height*this.Height);
		return this.bmi;
	  }
 };
object1.calcBMI(); object2.calcBMI()

 if(object1.bmi> object2.bmi){
	
	console.log(`${object1.Name}(${object1.bmi}) BMI Higher than ${object2.Name}(${object2.bmi})`);
}*/	

const bills = [22,295,176,440,37,105,10,1100,86,52];

const emty = [];


const calcTip = function(bill){
 
          if(bill>=50 && bill<=300){
		    return (bill*15)/100;
		  }
	     else{
	        return (bill*20)/100;  
	     }
 }
for(let i =0; i<bills.length; i++){
   
    const temp = calcTip(bills[i]);
	emty.push(temp+bills[i]);
}

console.log(emty);














  








