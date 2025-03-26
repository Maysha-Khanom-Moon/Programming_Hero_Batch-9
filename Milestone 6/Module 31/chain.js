// data access
const data = [{id: 1, name: 'abul', address: 'kochu khet'}]
console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000},
        { id: 2, name: 'macbook', price: 165000}
    ]
}
console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'Sharigul Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

// it's chain
console.log(user.address.street.second);


// ## OPTIONAL CHAINING
// check if a property exists then access it otherwise undefined --> it's an way to avoid error
console.log(user?.address?.house?.first); // undefined