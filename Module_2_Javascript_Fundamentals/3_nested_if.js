// nested if else 
const readLineSync = require('readline-sync');
const number = Number(readLineSync.question('Enter a number :'));

const remainder = number % 2;
if(remainder === 0){
    console.log("Number is even");

    if(number % 4 === 0){
        console.log("Number is divisible by 4");
    }else{
        console.log("Number is not divisible by 4");
    }
}else{
    console.log("Number is odd");

    if(number % 3 === 0){
        console.log("Number is divisible by 3");
    }else{
        console.log("Number is not divisible by 3");
    }
}