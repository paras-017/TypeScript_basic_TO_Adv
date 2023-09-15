// Normal function with types defined
function greet(name:string, id:number):string{
  return `My name is ${name} and id is ${id}`
}
console.log(greet('Paras',389240238))

// arrow function with types defined
const greet2 =(name:string, id:number):string =>{
  return `My name is ${name} and id is ${id}`
}
console.log(greet2('Paras',389240238))
export{}