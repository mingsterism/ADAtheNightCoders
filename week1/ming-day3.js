/**
 * Variable reassignment
 */
// var number = 0
// number = number + 10
// number = number + 100
// number = number + 8
// var age = number + 10
// number = number + 10 + age
// console.log(number++)
// console.log(number)

/**
 * Understanding for loops
 *
 *  Explaination 1
 * step0 only runs once
 * ends when step1 is false
 * for (initialize; conditional; action) {
 *  do something
 * }
 *
 * explaination 2
 * for (step0; step1; step3) {
 *     step2
 * }
 *
 * explaination 3
 * for (intialise the variable, check the conditional, perform an action) {
 * code block
 * }
 */

// var sum = 0;
// for (var x = 6; x < 5; x = x + 1) {
//   console.log("The sum is: ", sum);
//   sum = sum + x; // sum = sum + 1
// }
// console.log(sum);

/**
 * understanding conditionals
 */
// function conditionals(number) {
//   if (number % 2 == 0) {
//     console.log("number is even");
//     return number;
//   } else if (number % 3 == 0) {
//     console.log("number is odd");
//   } else if (number == 7 ) {
//       console.log("Number is 7")
//    } else {
//       console.log("this is not a number")
//   }
// }
// conditionals(7)

// -----------------------------------------------
// console.log the even numbers between 1 and 10
// Do a for loop to run through the numbers from 1 and 10
// Check the number if its even
// If even, then print the number
// for (var x = 0; x < 10; x++) {
//   if (x % 2 == 0) {
//     console.log("the even number is: ", x);
//   }
// }
// -----------------------------------------------

// -----------------------------------------------
// count the number of even numbers between 1 and 10
// var evenCounter = 0;
// var round = 1
// var totalRound = 10
// for (round; round < totalRound; round++) {
//   if (round % 2 == 0) {
//     console.log("there was an even number. Add 1 to the counter")
//     evenCounter = evenCounter + 1
//   }
// }
// console.log("there was", evenCounter, "even values")
// -----------------------------------------------

// count the number of odd and even numbers between 1 and 100
// var oddCounter = 0;
// var evenCounter = 0;
// var primeCounter = 0;
// var number = 0;
function isEvenOrOdd(oddCounter, evenCounter, primeCounter, rounds) {
  for (var number = 0; number < rounds; number++) {
    if (number % 2 == 0) {
      evenCounter = evenCounter + 1;
      return evenCounter;
    } else if (number % 3 == 0 || number % 5 == 0) {
      oddCounter++;
    }
  }
  console.log("outside of the for loop");
}
// var outputValue = isEvenOrOdd(0, 0, 0, 100);
// console.log(outputValue, "-----------------");

// console.log("there was", oddCounter, "odd values");
// console.log("there was", evenCounter, "even values");
// console.log("there was", primeCounter, "prime values");

// sum all the even numbers between 1 and 1000

// turn below into a function which returns true given an
// event number in argument

function blablabla(arg1, arg2) {
  if (arg1 + arg2 == 0) {
    return true;
  }
  return false;
}

// Functions are REUSABLE
function isEven(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function isOdd(x) {
  if (x % 3 == 0 || x % 5 == 0) {
    return true;
  } else {
    return false;
  }
}



// count the number of odd and even numbers between 1 and 100 using
// only functions above
function countEvenOrOdd(rounds) {
  var countEven = 0;
  var countOdd = 0;
  for (var x = 0; x < rounds; x++) {
    if (isEven(x)) {
      countEven = countEven + 1;
    } else if (isOdd(x)) {
      countOdd = countOdd + 1;
    }
  }
  console.log("I will run after the for loop is finished", countEven, countOdd)
  return `the number of even is ${countEven} and number of odd is ${countOdd}`;
}

// find the total count of even numbers between any 2 numbers. EG: function sumEven(x, y) 
// where x < y
// eg sumEven(1, 10) >>  Ans is 4
// eg sumEven(2, 348) >>  Ans is _

// sum the number of all the odd numbers between any 2 numbers

// find difference between the sum of all even numbers and the sum of
// all odd numbers between 1 and 1000


// find the total of all sum of even numbers minus sum of
// all odd numbers between any 2 values

// convert all of them to functions

// while loops

// datastructures
// arrays
var hobbies = ["swimming", "cycling", "badminton"]
// objects
var myProfile = {
  name: "James",
  age: 10,
  hobbies: ["swimming", "cycling"]
};

// variables, loops , conditionals, datastructures