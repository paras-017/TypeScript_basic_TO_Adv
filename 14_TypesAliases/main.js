// In TS, a type alias is a way to give a name to specific type or combination of types. It follows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readabiltiy , oraganisation and abstraction of complex code
var fresher = {
    name: "Paras Singh",
    id: 283213,
    isFresher: true,
    package: 48000000,
    city: "Muzaffarnagar",
    stack: ["Javascript", "Typescript", "Python", "Full Stack Developer"]
};
var product = {
    name: "laptop",
    price: 54999,
    quantity: 18
};
var totalPrice = function (product) {
    return "total price Rs.".concat(product.price * product.quantity);
};
console.log(totalPrice(product));
