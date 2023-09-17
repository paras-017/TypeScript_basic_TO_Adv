type Person = {
    name: string,
    age:number
}
type Employee ={
    emp_id: number,
    department: string
}
type EmployeeDetails = Person & Employee  //Intersection
type EmployeeDetails2 = Person | Employee  //Union

const emp:EmployeeDetails = {
    name: "Alice",
    age:28,
    emp_id:903243,
    department: 'content-writer'
}
const emp2:EmployeeDetails2 = {
    name: "Alice2.0",
    age:89
}