"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Default parameter
var greet1 = function (name, id) {
    if (id === void 0) { id = 31; }
    return "Welcome ".concat(name, " and your id is ").concat(id);
};
console.log(greet1("paras", 34523));
//  Optional parameter:they used by appending a "?" symbol after the parameter name
var greet2 = function (name, id, city) {
    if (id === void 0) { id = 31; }
    if (city)
        return "Welcome ".concat(name, " and your id is ").concat(id, ", ").concat(city);
    return "Welcome ".concat(name, " and your id is ").concat(id);
};
console.log(greet2("Paras", 34523));
console.log(greet2("Sigh", 34523, "Muzaffarnagar"));
