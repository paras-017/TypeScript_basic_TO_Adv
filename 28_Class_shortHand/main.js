// if you are usng modifiers then you don't need to explicitly define types
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "Your name is ".concat(this.name, " , age ").concat(this.age);
    };
    return Person;
}());
var john = new Person('John', 28);
console.log(john);
