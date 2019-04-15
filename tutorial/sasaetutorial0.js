// exercise 1:

// function calculate(age) {
//   var price = 100;

//   if (age < 18) {
//     price = price * 0.5;
//     console.log("the price is ", price);
//   } else if (age < 40) {
//     console.log("the price is ", price);
//   } else if (age < 65) {
//     price = price * 0.75;
//     console.log("the price is ", price);
//   } else {
//     price = price * 0.5;
//     console.log("the price is ", price);
//   }
// }

// calculate(17);
// calculate(19);
// calculate(50);
// calculate(77);

// exercise 2:

// var table = 3;
// var lines = 12;

// for (i = 1; i <= lines; i++) {
//   console.log(i + "x" + table + "=" + i * table);
// }

// function table(x, y) {
//   var num = 1;
//   for (num; num <= y; num++) {
//     var total = num * x;
//     console.log("the multiplication is", total);
//   }
// }
// table(5, 5);

// exercise 4:

// function fizzBuzz(x, y) {
//   for (x; x <= y; x++) {
//     if (x % 15 == 0) {
//       console.log("FizzBuzz");
//     } else if (x % 5 == 0) {
//       console.log("Buzz");
//     } else if (x % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log(x);
//     }
//   }
// }
// fizzBuzz(1, 30);

// exercise 5:

//exercise 6:

// function isPrime(number) {
//   if (number == 2) {
//     return true;
//   }
//   if (number % 2 == 0) {
//     return true;
//   }
//   for (i = 3; i < number; i += 2) {
//     if (number % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(2);

// console.log(isPrime(121));

// exercise 3:

// var hash = "#";
// function drawHash()

// for (i = 0; i < 5; i++) {
//   console.log(hash);
//   hash = hash + "#";
// }
// for (i = 4; i > 0; i--) {
//   for (j = 0; j < i; j++) {
//     process.stdout.write("#");
//   }
//   process.stdout.write("\n");
// }

// drawHash(1, 6);

// var hash = "#";
// function drawHash(row) {
//   for (var i = 0; i < row; i++) {
//     var stair = hash + hash;

//     console.log(stair);
//   }
// }
// drawHash(8);

// var row = 8;
// var board = "";

// for (var y = 0; y < row; y++) {
//   for (var x = 0; x < row; x++) {
//     if ((x + y) % 2 == 0) {
//       board = board + "#";
//     } else {
//       board = board + "00";
//     }
//   }
//   board = board + "\n";
// }

// console.log(board);

// var lines = 10;
// var board = "";
// for (i = 0; i < lines; i++) {
//   for (j = 0; j < lines; j++) {
//     if ((i + j) % 2 == 0) {
//       process.stdout.write("#");
//     } else {
//       process.stdout.write("0");
//     }
//   }

//   process.stdout.write("\n");
// }

// exercise 7:

function prime(x, y) {
  var sum = 0;
  for (x; x <= y; x++) {
    sum = sum + x;
    console.log(sum);
  }
}

prime(0, 20);
