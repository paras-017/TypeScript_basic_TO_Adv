// callSignatures: The function call signaturs refers to the decalaration or defination of a funciton, which includes the function's name , parameters and return type. IT defines the structures and types information of a funtionc without including the function's implementaion or body.

type Student = {
    name:string,
    age:number,
    gender?:string,
    greet:(country:string)=>string       //method call signatures
}
const paras:Student = {
    name:"paras",
    age:18,
    greet:(country):string=> `Welcome My name is ${paras.name}, I am ${paras.age}yrs old and I am from ${country}`
}

console.log(paras.greet('India'))
export{}