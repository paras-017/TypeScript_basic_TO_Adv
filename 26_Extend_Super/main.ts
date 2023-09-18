class Person{
    name:string;
    age: number;
    hobbies: string[]
    constructor(name:string, age:number, hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce():string{
        return `${this.name} is doing ${this.hobbies[0]}`
    }
}
// INHERITNG
class Student extends Person{
   grade:number
   constructor(name:string, age:number, hobbies:string[],grade:number){
    super(name,age,hobbies)
    this.grade = grade
   }
   introduce(): string {
       return `${super.introduce() } and he is in grade ${this.grade}`
   }
}

const person1 = new Person("Paras", 18, ['Freelancing'])
const student1 = new Student("Paras", 18, ['Freelancing'],12)
console.log(person1.introduce())
console.log(student1.introduce())