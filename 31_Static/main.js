var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.avgOfThree = function (num1, num2, num3) {
        return (num1 + num2 + num3) / 3;
    };
    MathOperations.PI = Math.PI;
    return MathOperations;
}());
console.log(MathOperations.PI * 1000);
console.log(MathOperations.avgOfThree(2, 3, 4));
