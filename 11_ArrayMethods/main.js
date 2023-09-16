var fruits = ['apple', 'banana', 'orange'];
var newUpdatedFruits = fruits.push('Banana'); //push method returns a length of an new array
console.log(newUpdatedFruits);
var removeLastElement = fruits.pop(); //remove and return the last element
console.log(removeLastElement);
// Loops    1st for
for (var i = 0; i < fruits.length; i++) {
    console.log(i);
}
// Loops    2nd for..in   (gives index)
for (var i in fruits) {
    console.log(i);
}
// Loops    2nd for..of   (gives value)
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var i = fruits_1[_i];
    console.log(i);
}
