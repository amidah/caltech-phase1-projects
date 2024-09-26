// == (Equals) and === (Strictly Equals)

let a = 10; // number
let b = '10'; // string

console.log("data type of a: ", typeof a);
console.log("data type of b: ", typeof b);

console.log("Equality Test of a == b : ", (a == b), " data type of (a  == b): ", typeof (a == b)); // here only values of a and b are compared
console.log("Strict Equality Test of a === b : ", (a === b), " data type of (a  === b): ", typeof (a === b)); // here values as well as data types of a and b are compared

let c = true; // boolean
let d = 'true'; // string

console.log("value of c:", c, "data type of c: ", typeof c);
console.log("data type of d: ", typeof d);

console.log("Equality Test of c == d : ", (c == d), " data type of (c  == d): ", typeof (c == d));
console.log("Strict Equality Test of c === d : ", (c === d), " data type of (c === d):", typeof (c === d)); 


