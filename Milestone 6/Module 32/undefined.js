/**
 * ----- 8 ways to get undefined -----
 * 
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side then it will be undefined
 * 5. property that doesn't exists on an object will give you undefined
 * 6. accessing array elements outside of the index range
 * 7. deleting an element inside an array
 * 8. set a value directly to undefined
 */


// 1.
let first;
console.log(first, '\n');


// 2.
function second(a, b) {
    const total = a + b;
}
console.log(second(4, 5), '\n');


// 3.
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d, '\n');
}
third(2, 5);


// 4.
function fourth(a, b) {
    if(a < 0 || b < 0) {
        return;
    }
    return a + b;
}
console.log(fourth(3, 4));
console.log(fourth(-5, 4), '\n'); // undefined


// 5.
const fifth = {
    id: 2,
    name: 'ponchom',
    age: 40
}
console.log(fifth.age);
console.log(fifth.salary, '\n');


// 6.
const sixth = [4, 89, 87, 56, 54];
console.log(sixth[2], sixth[5], sixth[200], '\n');


// 7.
delete sixth[1];
console.log(sixth[1]);
console.log(sixth, '\n');


// 8. 
const eighth = undefined;
console.log(eighth, '\n');



/**
 * ----- type of arrya: object
 * ----- type of null: object
 * ----- type of undefined: undefined
 */
const ninth = null;
const data = {result: [], update: null};

console.log(typeof data, typeof data.result);