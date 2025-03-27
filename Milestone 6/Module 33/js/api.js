/**
 * --------- JSON ----------
 * - JavaScript Object Notation
 * - data interchange format
 * - it's a string
 */
const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

// stringify: convert object to json
const jsonShop = JSON.stringify(shop);
console.log(jsonShop);

// parse: convert json to object
const objShop = JSON.parse(jsonShop);
console.log(objShop);