// Create a menu and a shopping cart array
// Lets implement the logic to add dishes to the cart

let menu = {
    //key : value
    burger: 100,
    noodles: 200,
    pizza: 300,
    fries: 50,
    cola: 80
};

console.log(menu[burger])

let cart = [];

console.log("Cart[" + cart.length + "] Details: "+ cart);

let dishKeys = Object.keys(menu); // Object keys function to get only keys of menu

let dishValues = Object.values(menu); // Object values function to get only values of menu

console.log(dishKeys);
console.log(dishValues);

// here we are iteration over the menu object using for - in loop
for(let dishName in menu){

    let dish = {
        name: dishName,
        price: menu[dishName]
    }

    cart.push(dish);
}

for(let dish of cart){
    console.log(dish.name + " : " + dish.price);
}