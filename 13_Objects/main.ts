const person:{
    name:string,
    age:number,
    isStudent:boolean,
    address:{
        city:string,
        country:string
    }
} = {
    name: "paras",
    age:27,
    isStudent:true,
    address:{
        city:"Muzaffarnagar",
        country:"India",
    }
}

console.log(person.address.country)