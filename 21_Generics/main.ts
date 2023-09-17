function add<T>(a:T,b:T){
    console.log(typeof a)
    console.log(typeof b)
}

console.log(add(5,3))
console.log(add("paras","paras"))
// console.log(add("paras",213))  //Gives Error string, number .to solve this you can use <T,U>

function add2<T,U,C>(a:T,b:U,x:C){
    console.log(typeof a)
    console.log(typeof b)
}

console.log(add2('paras',true,[2,3,3,3,3]))



//add2 funciton in non-generic way
function add3(a:number, b:string, c:number[]):string{
    return `hello there i am non generic way`
}
console.log(add3(234,"paras",[3,4,234]))