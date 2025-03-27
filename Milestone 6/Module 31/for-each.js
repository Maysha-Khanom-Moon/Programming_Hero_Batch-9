/**
 * ----------- forEach -----------
 * - same as map but no return
*/

const nums = [1, 5, 6, 4, 15];
const result = nums.forEach(n => console.log(n))
console.log(result); // undefined


/**
 * ----- filter ------
 * - select elements based on condition then returns an array
 */
const players = [75, 65, 67, 72, 55, 59, 72, 88];
const selected = players.filter(p => p % 2 === 0);
console.log(selected);