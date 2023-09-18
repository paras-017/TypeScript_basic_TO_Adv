"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Person;
}());
var person1 = new Person('JOHNNY', 29, ['reading', 'walking']);
var person2 = new Person('SINGH', 29, ['HUNTING', 'walking']);
var person3 = new Person('CHAUHAN', 29, ['KILLING', 'BATTLEING']);
console.log(person1);
console.log(person2);
console.log(person3);
