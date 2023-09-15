let is56Num:boolean = true
let isDone:boolean = false

// create a function which take number and return isEven
const isEven = (num:number):boolean=>{
    return num%2===0
}
console.log(isEven(6))


// bigInt : It is a built in type that allows you to work with numbers that are larger than the range supported by the regular number type.it is written by appending the n suffix(223n) to an interger literal. In js we can't read the whole numbers beyond 2^53
const maxNumber = Number.MAX_SAFE_INTEGER
// const num:number = 9007199254740991n     //Error:  Type 'bigint' is not assignable to type 'number'
const num:bigint = 9007199254740991n     

let anotherBigInt = BigInt("9007199254740991")
console.log(anotherBigInt)


export{}