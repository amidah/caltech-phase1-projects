// let's understand some built-in methods in strings

let names = 'John, Jennie, James, Sam, Roy';

console.log(names, " : ", typeof names);

console.log("Length of names: ", names.length);

console.log("Convert names to uppercase: ", names.toUpperCase());

console.log("Convert names to lowercase: ", names.toLowerCase());

console.log("Replace J with K in names string: ", names.replace('J', 'K'));

// this is a less standard way to creating an array from a given comma separated string
namesArr = ['John', 'Jennie', 'James', 'Sam', 'Roy'];
console.log(namesArr, " : ", typeof namesArr);

// namesArray = names.split(",");
// namesArray1 = [];
// for(let val of namesArray){
//     namesArray1.push(val.trim());
// }

// console.log("names array: ", namesArray);
// console.log("names array 1: ", namesArray1);

// let's user more standard built-in split method to convert a comma separated string to an array
namesArray = names.split(",").map(val => val.trim()); // here map(array in-built function) is used to iterate over each value inside the array
                                                      // and then trim(string in-built function) is used to remove additional whitespaces from each value 

console.log(namesArray, " : ", typeof namesArray);

console.log("substring from the names string: ", names.substring(0, 10));