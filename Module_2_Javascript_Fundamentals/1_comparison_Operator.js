// comparison operator

// 1. Equality == operator : it checks the value of the variable
console.log("01" == 1);  // true
// 2.Strict equality (===): it checks the value and the type of the variable
console.log("01" === 1);  // false
// 3. Inequality (!=): This operator is used to compare the inequality of two operands. If equal then the condition is false otherwise true.
console.log(1 != 2);  // true

console.log(null == undefined);  // true
console.log(null === undefined);  // false

// checking null  - null is alwalys zero
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null < 1); // true
console.log(null == 0); // here null is always zero  // false
console.log (null === 0); // false

// check
console.log(3 <= 5); // true
console.log("mango" > "banana"); // true
console.log(undefined == null); // true
console.log(null < 0); //false