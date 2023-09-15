"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is56Num = true;
var isDone = false;
// create a function which take number and return isEven
var isEven = function (num) {
    return num % 2 === 0;
};
console.log(isEven(6));
// bigInt : It is a built in type that allows you to work with numbers that are larger than the range supported by the regular number type.it is written by appending the n suffix(223n) to an interger literal. In js we can't read the whole numbers beyond 2^53
var maxNumber = Number.MAX_SAFE_INTEGER;
// const num:number = 9007199254740991n     //Error:  Type 'bigint' is not assignable to type 'number'
var num = 9007199254740991n;
var anotherBigInt = BigInt("9007199254740991");
console.log(anotherBigInt);
