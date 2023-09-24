
// Generics in TypeScript, similar to generics in other programming languages, allow you to create flexible and reusable code components that can work with a variety of data types while maintaining type safety. TypeScript introduced generics to enable the creation of functions, classes, and interfaces that can work with different types without sacrificing type checking.

// Here's a basic overview of how generics work in TypeScript:

// Creating a Generic Function:

// You can define a generic function by using angle brackets (<>) to specify a type parameter. Here's an example of a generic function that swaps the values of two variables:
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

const swapped = swap(10, 20); // swapped is of type [number, number]

// In this example, T is a type parameter that represents the type of the arguments passed to the swap function. TypeScript infers the types when you call the function.

// Creating a Generic Class:

// You can create generic classes by specifying type parameters in the class definition. Here's an example of a generic Stack class:

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
const poppedNumber = numberStack.pop(); // poppedNumber is of type number

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
const poppedString = stringStack.pop(); // poppedString is of type string