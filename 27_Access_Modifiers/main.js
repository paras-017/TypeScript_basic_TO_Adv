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
    function Person(name, age, gender) {
        this.name = name,
            this.age = age;
        this.gender = gender;
    }
    Person.prototype.introduce = function () {
        return "My name is ".concat(this.name, " and age is ").concat(this.age, ", gender ==> ").concat(this.gender);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade, gender) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.introduceGrade = function () {
        return "".concat(_super.prototype.introduce.call(this), ", my grade is ").concat(this.grade);
    };
    return Student;
}(Person));
var person_David = new Person('David', 22, 'male');
var student_David = new Student('David', 22, 12, 'male');
// console.log(person_David.age)      //age is protected
// console.log(person_David.gender)  //gneder is private
// console.log(person_David)      
console.log(student_David.introduceGrade());
/*
Default beahvior is Public
protected: You can use keys in method but individual its not allowed
private
*/ 
