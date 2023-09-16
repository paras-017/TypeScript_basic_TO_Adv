// Let's consider a scenario where you want to represent a person's basic information, including thier firstName,lastName,age and wheather they have a driver's license. Using a tuple can be an approprate choice because these three elements have a specific order and type

// const favCity: any[] = ['nepal',45,true]
type Person = [string, string, number, boolean]
const person1:Person = ['Paras','Singh', 18, true]
// const person2:Person = ['Paras', 18, 'Singh', true]


const displayPersonInfo:(person:Person)=>string = (person:Person)=>{
    // return `${person[0]} ${person[1]} you age ${person[2]} and software show your driving licence is ${person[3]}`
    // OR you can do like this

    const [fname, lname,age, isLicence] = person
    return `${fname} ${lname} you age is ${age} and driving license is ${isLicence?`availble for you`:`not available yer`}`
}
console.log(displayPersonInfo(person1))


// Readonly
type NewPerson = readonly[string, string, number, boolean]
const person2:NewPerson = ['Hello','world', 18, true]
// person2.push('coding')        //here we are mutation a tuple which shouldn't be done by doing this we're breaking the order
console.log(person2)  