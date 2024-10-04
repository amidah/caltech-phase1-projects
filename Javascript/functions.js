// let try to declare and populate the products array
// lets define a function to sort the products array

let products = [
    {
        name: 'Nike Shoe',
        price: 50000
    },
    {
        name: 'Adidas Shoe',
        price: 20000
    },
    {
        name: 'Puma Shoe',
        price: 30000
    },
    {
        name: 'Sketcher Shoe',
        price: 10000
    },
    {
        name: 'Woodland Shoe',
        price: 40000
    }
];

// only created a function
function printArray(arr){
    for(let item of arr){
        console.log(item);
    }
}

// only calling a function
printArray(products);

let numArr = [20, 50, 10, 30, 40];

numArr.sort();

printArray(numArr);



// function to sort on price
function sortOnPrice(prd1, prd2){
    return prd1.price - prd2.price;

}

console.log("=================================================")

// directly using in-built arrays sort function in a defualt way
products.sort();

// only calling a function
printArray(products);

console.log("=================================================")

//directly using in-built arrays sort function by passing a sorting criteria
products.sort(sortOnPrice);

// only calling a function
printArray(products);