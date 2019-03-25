/**
 * you can assign
 * variable assignment
 * Assign different values to the variable
 */
var name = "james";
console.log("my name is ", name);
var loginName = "luke";
console.log(name, "logged in today");
console.log("my name is James");

/**
 * Functions can accept other functions. 
 * Functions can be inside other functions
 * Functions can return other functions
 * All of software ia about functions
 */
var penalty = 100;
var ratingMachine = score => {
  // anything inside this curly brace is a function instructions
  var someComplexCalculation = score => {
    // another complex thing
    var anotherComplexThing = score * 100 - 343 / 234 + 234;
    return anotherComplexThing;
  };
  var result = 100 * someComplexCalculation(1023);
  return result;
};
/**
 * running the rating machine and logging out the score
 */
console.log(ratingMachine(123213) - penalty < 0); // check if the rating is more than the penalty

/**
 * Variable assignment
 * try changing the values around
 */
var myName = "WeiNing";
myName = "Charles"; // variable reassignment
console.log(myName);
