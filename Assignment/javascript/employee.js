function empl(name,city,id){
    this.name=name;
    this.city=city;
    this.id=id;
    this.getDetails=function(){
        console.log(this.name,'from',this.city,'those id number is',this.id);
    }
}
var emp=new empl('nisarga','mysuru',9900);
console.log(emp);
emp.getDetails();

var emp1=new empl('nithya','banglore',6785);
console.log(emp1);
emp1.getDetails();

var emp2=new empl('rekha','rajasthan',6789);
console.log(emp2);
emp2.getDetails();

empl.prototype.sal=30000;
empl.prototype.sal=20000;
empl.prototype.sal=40000;

function printBonus(salary){
    console.log('Bonus Calculation');
      return function(amount){
        console.log(salary+amount);
    };
}printBonus(30000)(80)
printBonus(25000)(80)
printBonus(27000)(80)