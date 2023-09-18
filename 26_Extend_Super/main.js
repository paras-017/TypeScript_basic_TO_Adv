var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Person.prototype.introduce = function () {
        return "".concat(this.name, " is doing ").concat(this.hobbies[0]);
    };
    return Person;
}());
// INHERITNG
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), " and he is in grade ").concat(this.grade);
    };
    return Student;
}(Person));
var person1 = new Person("Paras", 18, ['Freelancing']);
var student1 = new Student("Paras", 18, ['Freelancing'], 12);
console.log(person1.introduce());
console.log(student1.introduce());
