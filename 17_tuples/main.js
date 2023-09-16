// Let's consider a scenario where you want to represent a person's basic information, including thier firstName,lastName,age and wheather they have a driver's license. Using a tuple can be an approprate choice because these three elements have a specific order and type
var person1 = ['Paras', 'Singh', 18, true];
// const person2:Person = ['Paras', 18, 'Singh', true]
var displayPersonInfo = function (person) {
    // return `${person[0]} ${person[1]} you age ${person[2]} and software show your driving licence is ${person[3]}`
    // OR you can do like this
    var fname = person[0], lname = person[1], age = person[2], isLicence = person[3];
    return "".concat(fname, " ").concat(lname, " you age is ").concat(age, " and driving license is ").concat(isLicence ? "availble for you" : "not available yer");
};
console.log(displayPersonInfo(person1));
