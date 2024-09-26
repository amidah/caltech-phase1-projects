// Write the code to apply promo codes and calculate discounts

let amount = 1000;

let promoCode = "BINGO";

let discount30 = 0.30;

let discount50 = 0.50;

console.log("Original Amount: ", amount)

if(promoCode == "JUMBO" && amount > 150){
    amount = amount - discount30 * amount;
    console.log("Amount to be paid is: ", amount);
}
else if(promoCode == "BINGO" && amount > 300){
    amount = amount - discount50 * amount;
    console.log("Amount to be paid is: ", amount);
}
else{
    console.log("Invalid Promo Code: ", promoCode,  " or Insufficient Amount: ", amount);
}


// for loop
for (let i = 0; i < 5; i++){
    console.log('Iteration: ', i);
}

// while loop
let a = 1; // Initialization
while(a < 10){ // condition
    console.log("Counter: ", a); // code to be executed
    a=a+1; // increment by 1
    // a++;
    // a+=1;
}

// do-while loop - here the code will be executed atleast once no matter the condition is true or false
let count = 5; //initialization
do{
    console.log("Count: ", count); // code to be executed
    count++; // increment by 1
}
while(count <= 10); // condition

// break and continue keywords

for (let p = 1; p <= 10; p++){
    if(p === 5 ){
        break;
    }
    console.log("p: ", p);
}

for (let q = 1; q <= 10; q++){
    if(q === 5 ){
        continue;
    }
    console.log("q: ", q);
}