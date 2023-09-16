const fruits:string[] = ['apple','banana', 'orange']
const newUpdatedFruits = fruits.push('Banana')          //push method returns a length of an new array
console.log(newUpdatedFruits)

const removeLastElement = fruits.pop()                  //remove and return the last element
console.log(removeLastElement)

// Loops    1st for
for (let i = 0; i < fruits.length; i++) {
    console.log(i) 
}

// Loops    2nd for..in   (gives index)
for (const i in fruits) {
    console.log(i)
}

// Loops    3rd for..of   (gives value)
for (const i of fruits) {
    console.log(i)
}


// Loops    4rth forEach
fruits.forEach((curVal)=> console.log(curVal))