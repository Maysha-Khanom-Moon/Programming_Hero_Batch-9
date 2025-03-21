// shopping cart
const products = [
    { name: 'shampoo', price: 300, quantity: 2},
    { name: 'chiruni', price: 100, quantity: 3},
    { name: 'shirt', price: 700, quantity: 5},
    { name: 'pant', price: 1200, quantity: 1}
]

function cartTotal(products) {
    let sum = 0;
    for (const i of products)
        sum += i.price * i.quantity;
    return sum;
}
console.log('Total: ' + cartTotal(products) + '\n');


// cheapest one
const mobiles = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'Xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 10000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' }
]

function getCheapest(phones) {
    phones = Object.keys(phones);
    let phone = phones[0];
    for (const i of phones)
        if(phone.price > i.price)
            phone = phones[i];
    return phone;
}
console.log('Cheapest one: ' + getCheapest(mobiles) + '\n');