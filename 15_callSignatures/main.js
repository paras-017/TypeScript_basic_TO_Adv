// callSignatures: The function call signaturs refers to the decalaration or defination of a funciton, which includes the function's name , parameters and return type. IT defines the structures and types information of a funtionc without including the function's implementaion or body.
var paras = {
    name: "paras",
    age: 18,
    greet: function (country) { return "Welcome My name is ".concat(paras.name, ", I am ").concat(paras.age, "yrs old and I am from ").concat(country); }
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome My name is ".concat(name, ", I am ").concat(age, "yrs old");
};
console.log(introduction(paras));
console.log(paras.greet('India'));
