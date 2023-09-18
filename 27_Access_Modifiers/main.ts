class Person{
    public name:string;
    protected age:number
    private gender:string
    constructor(name:string,age:number,gender:string){
      this.name = name,
      this.age = age
      this.gender = gender
    }
    introduce():string{
        return `My name is ${this.name} and age is ${this.age}, gender ==> ${this.gender}`
    }
}
class Student extends Person{
    grade:number
    constructor(name:string,age:number,grade:number,gender:string){
     super(name, age,gender)
     this.grade=grade
    }
    introduceGrade():string{
        // return `${super.introduce()}, my grade is ${this.grade} `
        return `${this.gender}`          //its private it can only use as super.introduct or it can be used in Person only 
    }
}
const person_David = new Person('David',22,'male')
const student_David = new Student('David',22,12,'male')
// console.log(person_David.age)      //age is protected
// console.log(person_David.gender)  //gneder is private
// console.log(person_David)      
console.log(student_David.gender)



/*
Default beahvior is Public
protected: You can use keys in method but individual its not allowed
private
*/