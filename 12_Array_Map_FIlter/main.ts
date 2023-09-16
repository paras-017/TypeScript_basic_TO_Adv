//Map: The Map method creates a new array by applying a provided function to each element of the original array. It transform each element and returns a new array with the transformed values.


const myArray1 = [1,2,3,4,5]
const myArray2 = [1,2,3,4,5]

const multipleOf51 = myArray1.map((elem)=>elem*5)
const multipleof52= myArray2.forEach((elem) => elem*5);
const numToStr = myArray2.map((elem)=> elem.toString())
console.log(myArray1)
console.log(myArray2)
console.log(numToStr)


const evenList = myArray1.filter((elem)=>elem%2===0)
console.log(evenList)
export{}