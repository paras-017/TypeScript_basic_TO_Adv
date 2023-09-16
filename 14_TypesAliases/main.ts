// In TS, a type alias is a way to give a name to specific type or combination of types. It follows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readabiltiy , oraganisation and abstraction of complex code

type Person= {
  name:string;
  id:number;
  isFresher:boolean;
  package:number;
  city:string;
  experience?:number; //optional Property and we can't use deafult in object it's only allowrd in function parameters
  stack:string[]
}
const fresher:Person={
    name:"Paras Singh",
    id:283213,
    isFresher:true,
    package:48000000,
    city:"Muzaffarnagar",
    stack:["Javascript", "Typescript", "Python", "Full Stack Developer"]
}


// Function with type aliases
type Product = {
    name:string,
    price:number,
    quantity:number
}
const product:Product = {
    name:"laptop",
    price: 54999,
    quantity:18
}

const totalPrice = (product:Product)=>{
     return `total price Rs.${product.price*product.quantity}`
}
console.log(totalPrice(product))