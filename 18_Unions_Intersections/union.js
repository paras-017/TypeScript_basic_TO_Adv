"use strict";
// Unions(|): Unions allow you to define a type that can hold values of multiple types. You use the vertical bar | to combine two or more types into a single union type
Object.defineProperty(exports, "__esModule", { value: true });
var nameOrAge;
nameOrAge = "ALice";
nameOrAge = 23;
// nameOrAge = true
// create a function that doubles thevalue if the input is a numbeer, uppercase if it's string,opposite if it's boolean
var inputValue = function (value) {
    if (typeof value === 'number')
        return value * 2;
    if (typeof value === 'string')
        return value.toUpperCase();
    if (typeof value === 'boolean')
        return !value;
    else
        throw new Error("Invalid Input");
};
console.log(inputValue(56));
console.log(inputValue('paras'));
console.log(inputValue(false));
