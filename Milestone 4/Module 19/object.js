/**
 * ---- object ----
 * 
 * objectName = {
 *      key: value,
 *      key2: value2,
 *      ...
 *      ...
 * }
 * 
 * ==> it's not sequential
 * ==> it's non-primitive. Because, everyone is not same type.
*/

// const only prevents reassigning the entire object, but object is mutable
const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false
}

// ------------- accessing value -------------
// 1.
console.log(bottle.brand); // dot notation
// 2. 
console.log(bottle['brand']); // bracket notation
// 3.
const keyName = 'brand'; // key-name store at variable
console.log(bottle[keyName], '\n');


// ------------- Declaring Object -------------
// we can add key and values now or later
// 1.
const per1 = {}
// 2.
const per2 = new Object();
// 3.
const per3 = Object.create({}); 
// to use this way: need a prototype object or null(means no prototype). But can't be empty


// ------------- keys and values -------------
const KEYs = Object.keys(bottle);
const VALUEs = Object.values(bottle);
console.log('KEYs:',KEYs);
console.log('VALUEs:',VALUEs);

const ENTRIEs = Object.entries(bottle); // pairs
console.log('Entries:',ENTRIEs, '\n');