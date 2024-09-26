// logical AND - &&
// logical OR - ||
// logical NOT - !

let a = 20;
let b = 30;

console.log("logical AND: (a <= b && a < b): ", (a <= b && a < b));// true
console.log("logical OR: (a <= b || a < b): ", (a <= b || a < b)); // true

let c = 30;
let d = 30;

console.log("logical AND: (c <= d && c < d): ", (c <= d && c < d)); // false
console.log("logical OR: (c <= d || c < d): ", (c <= d || c < d)); // true

let e = 20; // number
let f = "20" // string

console.log("logical AND: (e == f && e === f): ", (e == f && e === f));
console.log("logical OR: (e == f || e === f): ", (e == f || e === f));

console.log("logical NOT with AND: !(c <= d && c < d): ", !(c <= d && c < d)); 
console.log("logical NOT with OR: !(c <= d || c < d): ", !(c <= d || c < d)); 

let g = 30;
let h = 20;


console.log("logical AND: (g >= h && g <= h): ", (g >= h && g <= h)); // false
console.log("logical OR: (g >= h || g <= h): ", (g >= h || g <= h)); // true


console.log("logical NOT with AND: !(g >= h && g <= h): ", !(g >= h && g <= h));
console.log("logical NOT with OR: !(g >= h || g <= h): ", !(g >= h || g <= h));


