// Read user data - using readline-sync

const readlineSync = require("readline-sync"); // Import readline-sync module

const userdata = readlineSync.question("May i know your name?");  // Read user data
console.log(`Welcome ${userdata} to GFG`);

 