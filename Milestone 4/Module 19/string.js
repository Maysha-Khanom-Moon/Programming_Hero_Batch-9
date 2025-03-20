// string immutable
let str = "Dello"
str[0] = "H" // not possible
console.log(str);

// --------------------------
const country = "Bangladesh"
const division = "Mymensingh"
const thana = "Nandail"

console.log(typeof country);
console.log('Division: ' + division);
console.log('Country: ', country);

const fullAddress = thana + " " + division + " " + country
console.log(fullAddress, '\n');


// template literal
const fullAddress2 = `${thana} ${division} ${country}`
console.log(fullAddress2, '\n');

// length
console.log("Length: ", fullAddress2.length);

// slice
console.log("Slice: ", fullAddress2.slice(0, 7));