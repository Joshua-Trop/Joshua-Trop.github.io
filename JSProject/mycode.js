
// ACTIVITY 3.8 EXERCISES

// 1. Write a function named "double" that takes in a number,
// doubles it, and returns the result.

// 2. Write a function named "add" that takes in two numbers,
// and returns the sum of those numbers.

// 3. Write a function named "flipACoin" that has a 50/50
// chance of returning either "Heads" or "Tails".

// 4. Write a function named "rollDice" that takes in a number,
// and returns a random value between 1 and that number.
// Be sure to only return whole numbers - no decimals!

// 3.8

function double(p1){
return p1 + p1;
}
let x= double(8);
document.getElementById("doubles").innerHTML=x

function add(p2, p3){
return p2 + p3
}
let y= add(3, 8);
document.getElementById("adding").innerHTML=y

function flipACoin(p4){
  return p4
}
let z= flipACoin(Math.random());
document.getElementById("coins").innerHTML=z;
if (Math.random() < 0.5){
  document.getElementById("coins").innerHTML="Heads"
}
else {
  document.getElementById("coins").innerHTML="Tails"
}

function rollDice(p5){
return Math.floor(Math.random()*p5+1)
}
let a= rollDice(20);
document.getElementById("dice").innerHTML=a

