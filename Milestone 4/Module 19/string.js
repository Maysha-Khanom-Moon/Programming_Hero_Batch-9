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