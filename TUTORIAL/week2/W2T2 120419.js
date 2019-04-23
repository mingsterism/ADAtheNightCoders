// 6. A prime number (or a prime) is a natural number greater than 1 that has no positive divisors
// other than 1 and itself. Print all the prime number between 1 - 1000.

// for (var x = 0; x < 1000; x++) {
//   if (x % 2 == 0 || x % 3 == 0 || x % 5 == 0) {
//     console.log(x, "is not the number you are looking for");
//   } else {
//     console.log(x);
//   }
// }

// console.log(x);

// for (var x = 0; x < 1000; x++) {
//   if (x == 2) {
//     console.log(x);
//   } else if (x == 3) {
//     console.log(x);
//   } else if (x == 5) {
//     console.log(x);
//   } else if (x == 7) {
//     console.log(x);
//   } else if (
//     x % 2 == 0 ||
//     x % 3 == 0 ||
//     x % 5 == 0 ||
//     (x % 7 == 0 && x / x == 1)
//   );
//   else {
//     console.log(x);
//   }
// }

// console.log(x);

// function isPrime(num){
//     for (x = 2; x < 1000; x++){
//         if (num % x === 0)
//     }
// }

// function isPrime(n) {
//   for (x = 2; x <= n - 1; x++) {
//     if (n % x == 0) {
//       return false;
//     }
//     return true;
//   }
// }

// isPrime(200);

// function isPrime(n) {
//   if (n == 2) {
//     return true;
//   }
//   {
//     if (n % 2 == 0) {
//       return true;
//     }
//   }
//   for (x = 3; x < n; x += 2) {
//     if (n % x == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(2);
// console.log(isPrime(1000));

// function printPrime(y) {
//   if (isPrime(y) == true) {
//     console.log(y, "is a prime number");
//   } else {
//     console.log(y, "is not a prime number");
//   }
// }

// function primeRange(range) {
//   for (r = 1; r < range; r++) {
//     printPrime(r);
//   }
// }

// var range = 1000;

// console.log(printPrime(range));

// 5. Write a program that creates a string that represents an 8x8 grid, using newline characters
// to separate lines. At each position of the grid there is either a space or a "#" character. The
// characters should form a chess board. Passing this string to console.log should show something
// like this:

// function printChecker(x, y) {
//   for (x = 1; x <= y; x++) {
//     if (x % 2 == 0) {
//       console.log("0#0#0#0#");
//     } else {
//       console.log("#0#0#0#0");
//     }
//   }
// }

// printChecker(1, 8);

// function chessBoard(n) {
//   var hash = "#";
//   var OOO = "O";
//   for (x = 0; x < n; x++) {
//     hash += "\n";
//     for (y = 0; y < n; y++) {
//       if ((x + y) % 2 == 0) {
//         hash += OOO;
//       } else {
//         hash += "#";
//       }
//     }
//   }
// }

var lines = 10;
for (i = 0; i < lines; i++) {
  for (j = 0; j < lines; j++) {
    if ((i + j) % 2 == 0) {
      // j does the job to print #
      process.stdout.write("#");
    } else {
      process.stdout.write("0");
    }
    // i does the job to 'enter' to next row
  }
  process.stdout.write("\n");
}

// "\n" means go to next row

// 7. FIbonacci

function fibo(x, y) {
  for (x = 1; x < y; x++) var y = x++;
  var sum = sum + y;
}

fibo(1, 20);
