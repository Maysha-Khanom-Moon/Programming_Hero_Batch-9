/**
 * ----------- STRUCTURE -----------
 * if(condition) {
 *      // condition true
 * }
 * 
 * ---------------------------------
 * if(condition) {
 *      // condition true
 * } 
 * else {
 *      // condition false
 * }
 * 
*/

// 1. only if
if(3 < 10) {
    console.log('I have smaller value');
}

// 2. if-else
var biryaniPrice = 100;

if(biryaniPrice < 100) {
    console.log('Give me some biryani');
}
else {
    console.log('Give me some Rice and Dal');
}


/* -------multiple condition------- */ 
const salary = 25000;
const isBCS = true;

// or: ||
if(salary > 25000 || isBCS) {
    console.log('eso baba kobul');
}
else {
    console.log('vaag tui mokgul');
}

// and: &&
if(salary > 25000 && isBCS) {
    console.log('pola toh aguner gola');
}
else {
    console.log('ami raji nah');
}