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
const Name = 'John';
const Age = 30;
const person = {
    Name, // shorthand for name: name
    Age,
    greet() { // shorthand for greet: function() { ... }
        console.log(`Hello ${this.Name}`);
    }   
}
person.greet();


// destructuring
const products = [
    { id: 1, name: 'Lenovo', price: 65000 },
    { id: 2, name: 'Dell', price: 45000 }
]
const [product1, product2] = products; // array destructuring
console.log(product1);

const {id, name, Price} = product1; // object destructuring
console.log(id, name, Price); // Price undefined


/**
 * ### Falsy:
 * - false, 0, '', null, undefined, NaN
 * 
 * ### Truthy:
 * - true, any number, any string, any object
 */