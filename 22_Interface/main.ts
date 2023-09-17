// To define object types we have 3 ways
// 1.creatign type with object everytiime 2.type alias 3.interface

// 1.
const greet1:{name:string,age:number} = {
    name: 'Paras',
    age: 18
}

// 2.Type Aliased
type GreetType1 = {
    name:string,
    age:number
}
const greet:GreetType1={
    name: 'Paras',
    age: 18
}

// 3.INTERFACE
interface GreetType3  {
    name:string,
    age:number
}
const greet3:GreetType3={
    name: 'Paras',
    age: 18,
}
export{}