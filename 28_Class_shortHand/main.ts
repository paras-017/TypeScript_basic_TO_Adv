// if you are usng modifiers then you don't need to explicitly define types and this.()dot to define keys
class Person{
    constructor(public name:string,protected age:number){}
    introduce():string{
        return `Your name is ${this.name} , age ${this.age}`
    }
}
const john = new Person('John', 28)
console.log(john)


export{}