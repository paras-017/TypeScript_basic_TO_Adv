// In typescript, type annotation is a way of explicityly specifying the type of a variable, funtion parameter, or funtion return value
let myNum:number = 890
let myStr:string = "Paras Singh"
let nanValue:number = NaN  //TypeScript allows you to assign NaN to a variable of type number because it's a valid value within the numeric domain.such as dividing zero by zero or trying to parse a non-numeric string as a number.

// with typeAnnotation you can use typeSafety(methods/opertaion we can use with the variable)
console.log(myNum.toString())
console.log(myStr.toLowerCase())

export{}