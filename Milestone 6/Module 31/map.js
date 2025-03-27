// simple
const nums = [4, 5, 2, 8, 10];

const doubled = [];
for (const i of nums) {
    doubled.push(i*2);
}
console.log(doubled);


/**
 * ------- MAP --------
 * - loops through each element of the array
 * - applies the callback function 
 * - hold the result in a new array
 * - return the new array
 * 
 * ==> transforming array without modifying the original
 */
const add = num => {
    console.log('num now:', num);
    return num + 5;
}

const result = nums.map(add);
console.log(result);


const doubleResult = result.map(num => num * 2);
console.log(doubleResult);