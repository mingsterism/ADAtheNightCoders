// 1. ticket validator
// Create a validator for 1 ticket service with the following rules:
// a. For less than 18 years old, the ticket price will be 50% of normal ticket price
// b. For 19 - 40 years old, the ticket price will be normal price
// c. For 40 - 65 yeras old, there will be a discount of 25%
// d. For senior citizens, 65 years old and above, it will be same discount as kids (50%)

// var normtixprice = 100;
// function tixvalidator(age) {
//   if (age < 18) {
//     console.log("Less than 18 y/o, ticket price is", normtixprice / 2);
//     return normtixprice / 2;
//   } else if (age >= 19 && age <= 40) {
//     console.log("Adults, ticket price is", normtixprice);
//     return normtixprice;
//   } else if (age > 40 && age < 65) {
//     console.log("Above 40 less than 65, ticket price is", normtixprice * 0.75);
//     return normtixprice * 0.75;
//   } else {
//     console.log("Senior Citizens, ticket price is", normtixprice / 2);
//     return normtixprice / 2;
//   }
// }
// console.log("The ticket price is", tixvalidator(70));

// 2. Create a multiplication table where you will enter the number, multiplier and results.

// var mult = 3;

// for (num = 1; num <= 12; num++) {
//   var results = num * mult;
//   console.log(num + "x" + mult + "=" + results);
// }

// Alternative method using Function

// function multable(x, y) {
//   for (x = 1; x <= 12; x++) {
//     var results = x * y;
//     console.log(x + "x" + y + "=" + results);
//   }
// }

// multable(16, 3);

// 3. Write a loop that makes seven calls to console.log to output the following triangle

// var hash = "#";
// for (var x = 0; x < 4; x++) {
//   console.log(hash);
//   hash = hash + "#";
// }
// for (x = 4; x > 0; x--) {
//   for (y = 0; y < x; y++) {
//     process.stdout.write("#");
//   }
//   process.stdout.write("\n");
// }

// process.stdout.write is to print side by side

// 4. Write a program that uses console.log to print all the numbers from 1 to 100, within two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible
// by 5 (and not 3), print "Buzz" instead and "FizzBuzz" for numbers that are divisble by both 3 & 5.

// for (num = 1; num <= 100; num++) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(num);
//   }
// }

// 5. Write a program that creates a string that represents and 8 x 8 grid, using newline characters
// to separate lines. At each position of the grid there is either a space or a "#" character. The
// characters should form a chess board. Passing this string to console.log should show something
// like this:
