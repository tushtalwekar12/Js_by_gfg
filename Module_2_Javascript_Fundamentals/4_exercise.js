// A program that reads 3 string and print the smallest string

const firstString = "Apple";
const secondString = "Banana";
const thirdString = "Blueberry";

const lengthOfFirstStr = firstString.length;
const lengthOfSecondStr = secondString.length;
const lengthOfThirdStr = thirdString.length;

if(lengthOfFirstStr < lengthOfSecondStr && lengthOfFirstStr < lengthOfThirdStr){
    console.log(`the smallest string is : ${firstString}`);
}
else if(lengthOfSecondStr < lengthOfFirstStr && lengthOfSecondStr < lengthOfThirdStr){
    console.log(`the smallest string is : ${secondString}`);
}
else if(lengthOfThirdStr < lengthOfFirstStr && lengthOfThirdStr < lengthOfSecondStr){
    console.log(`the smallest string is : ${thirdString}`);
}
else{
    console.log("found two or more strings with the same length");
}