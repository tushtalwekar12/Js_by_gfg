// ex-2 : check if user enter the correct paaword or not 
const userInput = require('readline-sync');

const username = userInput.question("Enter your username : ");
const password = userInput.question("Enter your password : ", { hideEchoBack: true }); // hideEchoBack will hide the password while typing

// Regular expression to check password criteria
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@]).{6,12}$/;

if(username.length > 6 && username.length < 20 && password.length > 6 && password.length < 20 && passwordRegex.test(password)){
    console.log("Login Successfull");
} else {
    console.log("Login Failed: Password must be 6-20 characters long and contain at least one uppercase letter, one number, and '@'.");
}