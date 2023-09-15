"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name, id) {
    return "My name is ".concat(name, " and id is ").concat(id);
}
console.log(greet('Paras', 389240238));

var greet2 = function (name, id) {
    return "My name is ".concat(name, " and id is ").concat(id);
};
console.log(greet2('Paras', 389240238));
