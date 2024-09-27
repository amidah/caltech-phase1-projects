// Primitives are passed by value - changing one variable value doesnot impact the other variable value

// Non-Primitives (Objects, Arrays) are passed by reference - changing one reference affects all the others  that points to the same object

let johnsAge = 10;
let fionnasAge = johnsAge; // Copy Operation - By Value

console.log('johns age : ', johnsAge);
console.log('fionnas age : ', fionnasAge);

johnsAge = 12;

console.log('johns age now : ', johnsAge);
console.log('fionnas age now : ', fionnasAge);

let ages = [10, 20, 30, 40, 50];
let groupAges = ages; // Copy Operation - By Reference

console.log('ages : ', ages);
console.log('group ages: ', groupAges);

groupAges[1] = 22;
groupAges[3] = 45;

console.log('ages now: ', ages);
console.log('group ages now: ', groupAges);

