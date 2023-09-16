"use strict";
//Map: The Map method creates a new array by applying a provided function to each element of the original array. It transform each element and returns a new array with the transformed values.
Object.defineProperty(exports, "__esModule", { value: true });
var myArray1 = [1, 2, 3, 4, 5];
var myArray2 = [1, 2, 3, 4, 5];
var multipleOf51 = myArray1.map(function (elem) { return elem * 5; });
var multipleof52 = myArray2.forEach(function (elem) { return elem * 5; });
var numToStr = myArray2.map(function (elem) { return elem.toString(); });
console.log(myArray1);
console.log(myArray2);
console.log(numToStr);
var evenList = myArray1.filter(function (elem) { return elem % 2 === 0; });
var names = ["Paras", "singh", "Chauhan", "Anna", "Alice", "America", 'bob'];
var bigName = names.filter(function (elem) { return elem.length > 4; });
console.log(evenList);
console.log(bigName);
