// let's create a user object using object notation {}

let user = {
    name: 'John Watson',
    email: 'john.watson@gmail.com',
    phone: '+91-9988776655',
    address: { // here a child address object is created
        addressLine: '2144 Redwood Shores',
        city: 'Bangalore',
        zipCode: 520001 
    },
    greet: function(){ // here a function with a name i.e greet is created without any paramters, and this refers 
                       // to the user object itself  
        console.log("Hello, user: ", this.name);
    },
    orders: [ // here an orders array is created 
        {
            oid: 1,
            amount: 2000,
            date: '20th Sept, 2024'
        },
        {
            oid: 2,
            amount: 3000,
            date: '21st Sept, 2024'
        },
        {
            oid: 3,
            amount: 4000,
            date: '22nd Sept, 2024'
        },
        {
            oid: 4,
            amount: 5000,
            date: '23rd Sept, 2024'
        }
    ]
}
console.log("=====================USER OBJECT IN CONSOLE=====================");
console.log(user);
console.log(typeof user);


console.log("=====================USER OBJECT ITERATION=====================");
// for-in loop - to enumerate all the properties in an object.

for(let key in user){
    console.log(key, " : ", user[key]);
    console.log(typeof key, " & ", typeof user[key]);
}

console.log("=====================ORDERS ARRAY ACCESS=====================");
// access orders array from user object
let ordersArr = user.orders;
console.log(ordersArr);

console.log("=====================ORDERS ARRAY ITERATION=====================");
// for-of loop hepls to iterate over an orders array inside the user object
for(let a of ordersArr){
    console.log(a.oid, " : ", a.amount, " : ", a.date);
}