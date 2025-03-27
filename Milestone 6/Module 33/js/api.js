/**
 * --------- JSON ----------
 * - JavaScript Object Notation
 * - data interchange format
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
const jsonShop = JSON.stringify(shop); // convert object to json
console.log(shop);
console.log(jsonShop);