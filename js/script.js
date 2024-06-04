// created by Niko 
// created on: June 3rd 2024
// factorial of numbers

"use strict"

// function for product of numbers
function factorialOfNumbers() {

  // get user input 
  let userNumber = Number(document.getElementById("userNumber").value);

  // sets the counter to 1
  let counter = 1;

  // sets the product of the factorial of the user number to the user number
  let factorial = userNumber;

  // if the user number is less than one,  set the factorial variable to 1. 
  if (userNumber < 1) {
    factorial = 1;
  } else {
    // multiply the user number by the counter, and then add one to the counter, and repeat this until the counter is equal to the user number. This multiplies the factorial which is equal to the user number, by every number up to the users number.
    do {
      factorial = factorial * counter;
      counter++;
    } while (counter < userNumber)
  }
  // display the factorial of the number
  document.getElementById("user-info").innerHTML = "The factorial of the number " + userNumber + " is " + factorial;
}

 