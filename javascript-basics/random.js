var userInput1 = prompt("Please choose the first number: ");
var userInput2 = prompt("Please choose the second number: ");
var numOne = parseInt(userInput1);
var numTwo = parseInt(userInput2);

var randomNumber = Math.floor(Math.random() * (numOne + numTwo) - numTwo);
alert("Your random number is " + randomNumber);