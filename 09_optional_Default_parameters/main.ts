//  Default parameter
const greet1 = (name:string, id:number=31):string=>{
  return `Welcome ${name} and your id is ${id}`
}
console.log(greet1("paras",34523))

//  Optional parameter:they used by appending a "?" symbol after the parameter name
const greet2 = (name:string, id:number=31, city?:string):string=>{
  if(city) return `Welcome ${name} and your id is ${id}, ${city}`
  return `Welcome ${name} and your id is ${id}`
}
console.log(greet2("Paras",34523))
console.log(greet2("Sigh",34523, "Muzaffarnagar"))


export{}