// ANY->The any type is the most flexible types in typescript. It essentially turn off all the type checking for the variables or expressions it is applies to .

let myFavNum:any = 5
myFavNum = "paras__018"

// useCase: working with dynamic data: dataForm,userInput


// _-----------Unknown
// The unkown type is a safer alternative to ANY because it still enforces type checking and type-safety(is method allowed with this variable).Variable of type unkown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways

let num:unknown
num = 55
num = 'str' 
num = false                   //we can still use it like any but below is the major difference between ANY && UNKOWN

if(typeof num === "number"){
    console.log(num+10)
}else if (typeof num === "boolean"){
    console.log(num)
}


export{}