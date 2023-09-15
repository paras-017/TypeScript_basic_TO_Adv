let variable:unknown
variable = 42
variable = 'hello'
variable = true 
if(typeof variable === 'number'){                          //Typescript doesn't treat these string literals as actual strings but as type indicators, so "number" is not string its actually number type in typescript
    console.log(variable+8)
}else if(typeof variable === 'boolean'){
    
    console.log(variable)
}