console.log("Hello, how are you?");

var username = "John";
let age = 20;
const phoneNumber = 9876543210;
let num1;
let bool = true;
let infinityVar = age/0;


console.log("name: ", username, " data type: ", typeof username);
console.log("age: ", age, " data type: ", typeof age);
console.log("phoneNumber: ", phoneNumber, " data type: ", typeof phoneNumber);
console.log("num1: ", num1, " data type: ", typeof num1);
console.log("bool: ", bool, " data type: ", typeof bool);
console.log("infinityVar: ", infinityVar, " data type: ", typeof infinityVar);
console.log(1/0);

username = "Sam"; // reassigning a diiferent value to same variable
age = 30; // reassigning a diiferent value to same variable


console.log("name: ", username, " data type: ", typeof username);
console.log("age: ", age, " data type: ", typeof age);

let car = new Object(); // using Object constructor to create a new object
let car1 = {};
let car2 = {
    name : "Audi",
    model: 700,
    year: 2010
};

console.log("car: ", car, ", data type: ", typeof car);
console.log("car1: ", car1, ", data type: ", typeof car1);
console.log("car2: ", car2, ", data type: ", typeof car2);

let arr = new Array(); // Array constructor
let arr1 = [];
let arr2 = [10, 20, 30, 40, 50];

console.log("arr: ", arr, ", data type: ", typeof arr);
console.log("arr1: ", arr1, ", data type: ", typeof arr1);
console.log("arr2: ", arr2, ", data type: ", typeof arr2);

arr2.push(60);
console.log("arr2: ", arr2);

arr2.pop();
console.log("arr2: ", arr2);

arr2.shift();
console.log("arr2: ", arr2);

arr2.unshift(10);
console.log("arr2: ", arr2);



// calling the function welcome
welcome();
welcome();
welcome();

welcome1('John', 30);
welcome1('Sam', 40);
welcome1('Roy', 50);



// defining the parameterized function welcome
function welcome1(name, age){
    console.log("Hello, ", name, ", Congrats on your ", age, 'th birthday!');
}


// defining the non-parameterized function welcome
function welcome(){
    console.log("Hello, Sam, Congrats on your 20th birthday!");
}








