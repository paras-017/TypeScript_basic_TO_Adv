

/*
// here, we have role, but users can have only user or role as role not both so we will use enums to aquair this
type loginDetails = {
    name?:string,
    email:string, 
    password:string,
    role: ['user', 'admin']
}
const user1:loginDetails={
    email:"paras",
    password:'aDF3rwef3'
    role:"admin"
}
const user2:loginDetails={
    email:"kalka",
    password:'a234123wef3'
    role:"user"
}
*/


// Enums in typescript are commonly used when you want to representa set of related values and choose one values from multiple options. Enums provide a convenient wat to define a set of named values and associate them with specific meanings

enum Roles{
    user='user',
    admin='admin'
}

type loginDetails = {
    name?:string,
    email:string, 
    password:string,
    role: Roles
}
const user1:loginDetails={
    name:"paras",
    email:"paras",
    password:'aDF3rwef3',
    role:Roles.admin
}
const user2:loginDetails={
    name:"kalka",
    email:"kalka",
    password:'a234123wef3',
    role:Roles.user
}
const isAdmin:(user:loginDetails)=>string = (user:loginDetails):string=>{
  const {name, role} = user
  return role==='admin'?`${name} is allowed to modifying things `:`Unauthorised`
}

console.log(isAdmin(user1))
console.log(isAdmin(user2))
export{}