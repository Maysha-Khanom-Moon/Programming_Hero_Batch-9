// string immutable
let str = "Dello"
str[0] = "H" // not possible
console.log(str, '\n');

// --------------------------
const country = "Bangladesh"
const division = "Mymensingh"
const thana = "Nandail"

console.log(typeof country);
console.log('Division: ' + division);
console.log('Country: ', country, '\n');


// -------- CONCATENATION ----------
// addition
const fullAddress = thana + " " + division + " " + country
console.log(fullAddress);

// concat
const fullAddress1 = thana.concat(' ', division, ' ', country)
console.log(fullAddress1);

// template literal
const fullAddress2 = `${thana} ${division} ${country}`
console.log(fullAddress2, '\n');


// -------- STRING METHODS ----------
// length
console.log("Length: ", fullAddress2.length);

// slice
console.log("Slice: ", fullAddress2.slice(0, 7));

// substring
console.log("Substring: ", fullAddress2.substring(0, 7));

// split
console.log("Split: ", fullAddress2.split(' '));

// replace
const fullAddress3 = fullAddress2.replace('Bangladesh', 'Bangladesh (Bn)');
console.log("Replace: ", fullAddress3);

// includes
console.log("Includes: ", fullAddress2.includes('Mymensingh')); // true

// indexOf
console.log("IndexOf: ", fullAddress2.indexOf('Mymensingh')); // 8
