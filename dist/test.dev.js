"use strict";

var yargs = require("yargs");

function Person(first, last, age, gender, interests) {
  // property and method definitions
  this.name = {
    'first': first,
    'last': last
  };
  this.age = age;
  this.gender = gender; //...see link in summary above for full definition
}

var person1 = new Person('zhao', 'zhang', 25, 'male', 'movie'); // console.log(person1.__proto__);
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(person1));
// console.log(person1.__proto__.__proto__);
// console.log(person1.toString())

var person2 = Object.create(person1);
console.log(person2.__proto__);
console.log(person2.age);
person2.age = 20;
console.log(person2.age);
console.log(person1.age);
console.log(person2.constructor);