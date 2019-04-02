// print even numbers between 1 to 100

//for(var x = 0; x <101; x = x + 1){
//  if(x % 2 == 0)
//console.log("You get an even number here :", x)
//}

// count the number of even numbers between 1 - 10

// var evenCounter = 0
// for(var x = 0; x <10; x++){
//     if(x % 2 == 0){
//         evenCounter = evenCounter + 1
//     }
// }
// console.log(evenCounter)

// // count the number of odd and even numbers between 1 and 10, and prime number

// var oddCounter = 0
// var evenCounter = 0
// var primeCounter = 0
// for(var x = 0; x <= 10; x++){
//     if(x % 2 == 0){
//         console.log(x, "is an even number")
//         evenCounter = evenCounter + 1
//     }
//     else if (x % 3 == 0){
//         console.log(x, "is an odd number")
//         oddCounter = oddCounter + 1}
//         else{
//             console.log(x, "is a prime number")
//             primeCounter = primeCounter + 1}
//         }
// console.log("Total odd number count between 1 to 10 is", oddCounter)
// console.log("Total even number count between 1 to 10 is", evenCounter)
// console.log("Total prime number count between 1 to 10 is", primeCounter)

function isEvenOrOdd(OddCounter, evenCounter, prmieCounter, rounds) {
  for (var number = 0; number < rounds; number++) {
    if (number % 2 == 0) {
      evenCounter = evenCounter + 1;
      return evenCounter;
    } else if (number % 3 == 0 || number % 5 == 0) {
      oddCounter++;
    }
  }
}

// // sum the number of even numbers between 1 and 10

// var evenSum = 0
// for(var x = 0; x <= 10; x++){
//     if(x % 2 == 0){
//    evenSum = evenSum + x;
// }
// }
// console.log(evenSum)

// turn below into a function which returns true given an even number in argument

// function blackandwhite(ARG1, ARG2) {
//   if (arg1 + arg2 == 0) {
//     return true;
//   }
//   return false;
// }

// function isEven(x) {
//   if (x % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // console.log(isEven(209));
// // console.log(isEven(888));

// function isOdd(x) {
//   if (x % 3 == 0 || x % 5 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isOdd(21));
// console.log(isOdd(25));

// function isEvenOrOdd(rounds) {
//   var sumEven = 0;
//   var sumOdd = 0;
//   for (var x = 0; x < rounds; x++) {
//     if (isEven(x)) {
//       sumEven = sumEven + 1;
//     } else if (isOdd(x)) {
//       sumOdd = sumOdd + 1;
//     }
//   }
//   return `the number of even is ${sumEven} and number of odd is ${sumOdd}`;
// }
// console.log(isEvenOrOdd(88));

//count the number of odd and even numbers between

// find the total count of even numbers between any 2 numbers. eg: function countEven(x,y)

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

function countEven(x, max) {
  var sumEven = 0;
  for (x; x < max; x++) {
    if (isEven(x)) {
      sumEven = sumEven + 1;
    }
  }
  return `the number of even is ${sumEven}`;
}
console.log(countEven(0, 10));

// find the difference between the sum of even numbers and the sum of all odd numbers between 1 and 10

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

function countEven(x, max) {
  var sumEven = 0;
  for (x; x < max; x++) {
    if (isEven(x)) {
      sumEven = sumEven + 1;
    }
  }
  return `the number of even is ${sumEven}`;
}

console.log(countEven(0, 10));

var evenSum = 0;
for (var x = 0; x <= 10; x++) {
  if (x % 2 == 0) {
    evenSum = evenSum + x;
  }
}
// console.log(evenSum)

function roo(a, b, c, d) {
  var sum = a + b + c + d;
  return sum;
}
console.log(roo(1, 2, 3, 4));

function foo(z) {
  console.log("calling foo....", z);
  z = z + 1;
  return z;
}

function boo(y) {
  y = y + 1;
  console.log("calling boo", y);
  foo(y);
}
var counter = 0;
boo(counter);
