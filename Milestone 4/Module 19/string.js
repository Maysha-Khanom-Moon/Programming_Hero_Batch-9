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


// slice: a part of string
console.log("Slice: ", fullAddress2.slice(0, 7));


// substring: a part of string
console.log("Substring: ", fullAddress2.substring(0, 7));


// split: convert string to array
console.log("Split: ", fullAddress2.split(' '));


// join: convert array to string
const array = ['H', 'E', 'L', 'L', 'O']
console.log("Join: ", array.join(''), '\n');


// replace: if exist then replace, otherwise no change
const fullAddress3 = fullAddress2.replace('Bangladesh', 'Bangladesh (Bn)');
console.log("Replace: ", fullAddress3);


// includes: check value is exist or not
console.log("Includes: ", fullAddress2.includes('Mymensingh')); // true


// indexOf: return index, if not exist return -1
console.log("IndexOf: ", fullAddress2.indexOf('Mymensingh')); // 8
console.log("IndexOf: ", fullAddress2.indexOf('Mmensingh'), '\n'); // -1


// reverse (string doesn't have reverse method)
// 1.
let rev = '';
for (const i of country) {
    rev = i + rev;
}
console.log("Reverse: ", rev);

// 2. 
let rev2 = '';
for (let i = rev.length - 1; i >= 0; i--) {
    rev2 += rev[i];
}
console.log("Reverse: ", rev2);

// 3.
console.log("Reverse: ", country.split('').reverse().join(''), '\n');


// toUpperCase, toLowerCase
console.log("UpperCase: ", fullAddress2.toUpperCase());
console.log("LowerCase: ", fullAddress2.toLowerCase(), '\n');

// trim: remove whitespace
let str3 = "   Hello World   "
console.log("Trim: ", str3.trim());

// trimStart, trimEnd
console.log("TrimStart: ", str3.trimStart());
console.log("TrimEnd: ", str3.trimEnd(), '\n');


// charAt vs bracket notation
// charAt: return character otherwise empty string
// bracket notation: return character otherwise undefined
console.log("CharAt: ", fullAddress2.charAt(30));
console.log("Bracket: ", fullAddress2[30]);