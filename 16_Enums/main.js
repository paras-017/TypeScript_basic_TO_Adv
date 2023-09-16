"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// Enums in typescript are commonly used when you want to representa set of related values and choose one values from multiple options. Enums provide a convenient wat to define a set of named values and associate them with specific meanings
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "paras",
    email: "paras",
    password: 'aDF3rwef3',
    role: Roles.admin
};
var user2 = {
    name: "kalka",
    email: "kalka",
    password: 'a234123wef3',
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, role = user.role;
    return role === 'admin' ? "".concat(name, " is allowed to modifying things ") : "Unauthorised";
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
