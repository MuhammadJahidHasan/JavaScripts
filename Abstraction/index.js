const Person = function(name, age) {

       const salary = {
            monthlyIncome: 20000,
            totalMonth: 5
       };    

       this.name = name;
       this.age = age;
       
       const calculatePersonsSalary = function(){
            
            return salary.monthlyIncome * salary.totalMonth;
       }

       this.printPersonDetails = function(){
             const totalSalary = calculatePersonsSalary();

             console.log(`${this.name} is ${this.age} years old and salary ${totalSalary}(Monthly Income ${salary.monthlyIncome})`);
       }
};

const p1 = new Person('Sakib',20);

p1.printPersonDetails();

console.log(p1.salary);