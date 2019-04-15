function student(age) {
  if (age < 2) {
    return "P1";
  } else if (age > 2 && age < 4) {
    return "P2";
  } else if (age > 4 && age < 6) {
    return "K1";
  } else {
    age > 6;
    return "K2";
  }
}

module.exports = {
  student
};

function evening(day) {
  if (day == "Monday") {
    return "pudding";
  } else if (day == "Tuesday") {
    return "Chocolate Cake";
  } else if (day == "Wednesday") {
    return "ice cream";
  } else {
    day == "Saturday";
    return "Milo";
  }
}

console.log(student(9), "are having", evening("Saturday"), "as dessert today.");

//x++: x = x + 1
//x--: x = x - 1
//sum += x
//for (initialise the variable; check the conditional; perform an action)
//step0 only runs once end when step1 is false
//for (step0; step1; step3){
//    step2
//}

var sum = 0;
for (var x = 0; x <= 10; x++) {
  if (x % 2 == 0) {
    console.log("the number is:", sum);
    sum = sum + x; //sum all even number
  }
}
console.log(sum);

// var number = 0
// number = number + 10
// number = number + 100
// number = number + 8
// var age = number + 5
// number = number + 1 + age
// console.log (number)
// console.log (number++)

var sum = 0;
for (var x = 1; x < 10; x++) {
  if (x % 2 == 0) {
    console.log(x); //list the even number
    sum = sum + 1; //count of even number
  }
}
console.log(sum);

var number = 0;
var oddcounter = 0;
var evencounter = 0;
var primecounter = 0;
for (number; number < 10; number++) {
  if (number % 2 == 0) {
    console.log(number, "");
    evencounter = evencounter + 1;
  } else if (number % 3 == 0 || number % 5 == 0) {
    oddcounter++;
  } else {
    primecounter++;
  }
}
console.log(evencounter);
console.log(oddcounter);
console.log(primecounter);

//turn below into a function which returns true given an
//even number in argument
function check(x) {
  if (x % 2 == 0) {
    return "true";
  } else {
    return "false";
  }
}
console.log(check(6));

function isEven(x) {
  if (x % 2 == 0) {
    return true; //no "" as it is a function
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

function isEvenOrOdd(oddcounter, evencounter, primecounter, rounds) {
  for (var number = 0; number < rounds; number++) {
    if (number % 2 == 0) {
      console.log(number, "-----");
      evencounter = evencounter + 1;
    } else if (number % 3 == 0 || number % 5 == 0) {
      console.log(number, "&&&&");
      oddcounter++;
    } else {
      console.log(number, "#####");
      primecounter++;
    }
  }
}
isEvenOrOdd(0, 0, 0, 5);

function isEvenOrOdd(rounds) {
  var sumEven = 0;
  var sumOdd = 0;
  for (var x = 0; x < rounds; x++) {
    if (isEven(x)) {
      sumEven = sumEven + 1;
    }
    if (isOdd(x)) {
      sumOdd = sumOdd + 1;
    }
  }
  //string interpolation
  return `the number of even is ${sumEven} and number of odd is ${sumOdd}`;
}
console.log(isEvenOrOdd(100));

//total count of even or odd number between any 2 numbers
function sumEven(x, rounds) {
  var sumEven = 0;
  var sumOdd = 0;
  for (x; x < rounds; x++) {
    if (isEven(x)) {
      sumEven = sumEven + 1;
    }
    if (isOdd(x)) {
      sumOdd = sumOdd + 1;
    }
  }
  return `the total count of even number between any 2 is ${sumEven} and odd number between any 2 is ${sumOdd}`;
}
console.log(sumEven(5, 20));

//find the sum of all even number minus sum of all odd number between 1 and 100
function sumEven(x, rounds) {
  var sumEven = 0;
  var sumOdd = 0;
  for (x; x < rounds; x++) {
    if (isEven(x)) {
      sumEven = sumEven + x;
    }
    if (isOdd(x)) {
      sumOdd = sumOdd + x;
    }
  }
  var sum = sumEven - sumOdd;
  return sum;
}
console.log(sumEven(0, 10));

function foo(z) {
  console.log("calling foo ****", z);
  z = z + 1;
  return z;
}

function boo(y) {
  y = y + 1;
  console.log("calling boo ----", y);
  foo(y);
}
var counter = 0;
boo(counter);

function roo(a, b, z, q) {
  var sum = b + a + z + q;
  return sum;
}
console.log(roo(1, 2, 3, 4));
