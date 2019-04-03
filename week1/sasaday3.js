// // for (step 0' step 1' step 3)
// // {step 2}
// var evenCounter = 0;
// var round = 0;
// var totalRound = 21;
// var sumEven = 0;
// var sumOdd = 0;
// for (round; round < totalRound; round++) {
//     if (round % 2 == 0){
//         sumEven = sumEven + round
//     }
//     else if (round % 3 == 0 || round % 5 == 0){
//         sumOdd = sumOdd + round
//     }

// }

// console.log("the sum for even number between 1 to 21 is ", sumEven)
// console.log("the odd for even number between 1 to 21 is ", sumOdd)

// function machine(number) {
//     if (number % 2 == 0) {
//     return true
// }
//     else {
//     return false
// }
// }

// console.log(machine(10))
// console.log(machine(11))
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

function isEvenOrOdd(round) {
  var sumEven = 0;
  var sumOdd = 0;
  for (var x = 0; x < round; x++) {
    if (isEven(x)) {
      sumEven = sumEven + 1;
    }
    if (isOdd(x)) {
      sumOdd = sumOdd + 1;
    }
  }

  return `the number of even is ${sumEven} and the number of odd is ${sumOdd}`;
}
console.log(isEvenOrOdd(100));
