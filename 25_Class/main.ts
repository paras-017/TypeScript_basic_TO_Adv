class Person{
    name:string;
    age:number;
    hobbies:string[] 
    constructor(name:string,age:number,hobbies:string[]) {
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }
}
const person1:Person = new Person('JOHNNY',29,['reading','walking'])
const person2:Person = new Person('SINGH',29,['HUNTING','walking'])
const person3:Person = new Person('CHAUHAN',29,['KILLING','BATTLEING'])
console.log(person1)
console.log(person2)
console.log(person3)
export{}