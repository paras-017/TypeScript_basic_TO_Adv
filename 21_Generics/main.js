function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
console.log(add(5, 3));
console.log(add("paras", "paras"));
// console.log(add("paras",213))  //Gives Error string, number .to solve this you can use <T,U>
function add2(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
console.log(add2('paras', true));
