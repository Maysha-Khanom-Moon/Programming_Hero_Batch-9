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
 * - not found then empty array
 */
const players = [75, 65, 67, 72, 55, 59, 72, 88];
const selected = players.filter(p => p % 2 === 0);
console.log(selected);


/**
 * ----- find -----
 * - same as filter but just return the first one
 * - not found then undefined
 */

const findSelected = players.find(n => n % 2 === 0);
console.log(findSelected);