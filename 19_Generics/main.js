// Generics in Typescript allow you to create reusable component or function that can work with multiple data types
/*
const inputValue:(value:string | number | boolean)=>string|number|boolean = (value:string | number | boolean):string|number|boolean => {
    if(typeof value === 'number') return value*2
    if(typeof value === 'string') return value.toUpperCase()
    if(typeof value === 'boolean') return !value
    else throw new Error("Invalid Input");
}
console.log(inputValue(56))
console.log(inputValue('paras'))
console.log(inputValue(false))
*/
// Using Generics instead ot union or INtersection
// T can be of string, number,. boolean it all depend on calling the funciton
var inputValue = function (value) {
    return value;
};
console.log(inputValue(56));
console.log(inputValue('paras'));
console.log(inputValue(false));
