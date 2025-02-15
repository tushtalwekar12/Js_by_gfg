// Airthmetic Operator in Js 
const x = 12;
const y = 3;

console.log("Addition : x + y = "+ (x+y));
console.log("Subtraction : x - y = "+ (x-y));
console.log("Multiplication : x * y = "+ (x*y));
console.log("Division: x / y = "+ (x/y));
console.log("Remainder : x % y = "+ (x%y));

console.log("Square of : "+ (y ** 2));
console.log("Cube of : "+ (y ** 3));

//Type conversion automatic - string to number except + 
const a = "12";
const b = "3";
console.log(a + b);  //output :  123
console.log(a - b);  // output : 9
console.log(a * b);  // output : 36
console.log(a / b);  // output : 4

//handling non-numeric string
const val1 = "apple";
const val2 = "banana";
console.log(val1 + val2);  // output : applebanana
console.log(val1 - val2);  // output : NaN - Not-a-Number show

//Best Practice : Suppose you are taking input from a user and want to perform arithmetic operations:
const userInput = "42"; // Simulating user input
const numberInput = Number(userInput);

if (!isNaN(numberInput)) {
    console.log(numberInput + 8); // Outputs: 50
} else {
    console.log('Invalid input');
}