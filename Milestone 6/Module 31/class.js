const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 60000},
    {id: 4, name: 'mac', price: 150000},
]


/**
 * --------- class --------- 
 * - it's a template for similar objects
 * - has some properties, methods
 * 
 * - to make every object different there come constructor
 */
// PascalCase  
class Product {
    country = 'Bangladesh'; // fixed property
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}

// object declaration from class
const lenovo = new Product(); // name: undefined
console.log(lenovo);
lenovo.speak('wow');


// constructor calls when we create a new object
const apple = new Product('aa aa apple');
console.log(apple);