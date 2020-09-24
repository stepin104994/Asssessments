"use strict";

function empl(name, city, id) {
  this.name = name;
  this.city = city;
  this.id = id;

  this.getDetails = function () {
    console.log(this.name, 'from', this.city, 'those id number is', this.id);
  };
}

var emp = new empl('prathi', 'mysuru', 2345);
console.log(emp);
emp.getDetails();
var emp1 = new empl('thanu', 'banglore', 6785);
console.log(emp1);
emp1.getDetails();
var emp2 = new empl('ganavi', 'banglore', 1238);
console.log(emp2);
emp2.getDetails();
empl.prototype.sal = 30000;
empl.prototype.sal = 25000;
empl.prototype.sal = 27000;

function printBonus(sal) {
  console.log('Bonus Calculation'); // var bonus = 

  return function (amount) {
    console.log(sal * amount);
  };
}

printBonus(30000)(80);
printBonus(25000)(80);
printBonus(27000)(80);