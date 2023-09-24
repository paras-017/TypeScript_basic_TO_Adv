
// Generics in TypeScript, similar to generics in other programming languages, allow you to create flexible and reusable code components that can work with a variety of data types while maintaining type safety. TypeScript introduced generics to enable the creation of functions, classes, and interfaces that can work with different types without sacrificing type checking.

// Here's a basic overview of how generics work in TypeScript:

// Creating a Generic Function:

// You can define a generic function by using angle brackets (<>) to specify a type parameter. Here's an example of a generic function that swaps the values of two variables:
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

const swapped = swap(10, 20); // swapped is of type [number, number]