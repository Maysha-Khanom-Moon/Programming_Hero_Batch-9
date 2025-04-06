/**
 * ### 6 JS Fundamentals:
 *  - variable declaration, conditional, loop, function, array, object
 * 
 * ### ES6 Features:
 * - let, const
 * - template literal, arrow function, destructuring
 * - default parameter
 * - spread operator(expand), rest operator(collect)
 * - shorthand property of object
 * - classes
 * - promise, modules (import/ export)
 */

// shorthand property
const name = 'John';
const age = 30;
const person = {
    name, // shorthand for name: name
    age,
    greet() { // shorthand for greet: function() { ... }
        console.log(`Hello ${this.name}`);
    }   
}
person.greet();