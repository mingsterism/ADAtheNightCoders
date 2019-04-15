//Challenge 1
var age = 50;
var price = 10;
var finalPrice = price;
if (age < 18) {
  finalPrice = price * 0.5;
} else if (age < 40) {
  finalPrice = price;
} else if (age < 65) {
  finalPrice = price * 0.75;
} else {
  finalPrice = price * 0.5;
}
console.log("The price is", finalPrice);

function ticketvalidator(age) {
  var ticket = 10;
  if (age < 18) {
    console.log("The ticket price is", ticket * 0.5);
  } else if (age > 19 && age < 40) {
    console.log("The ticket price is", ticket);
  } else if (age > 40 && age < 65) {
    console.log("The ticket price is", ticket * 0.75);
  } else {
    age > 65;
    console.log("The ticket price is", ticket * 0.5);
  }
}
ticketvalidator(50);

//Challenge 2
var table = 3;
var lines = 12;
for (i = 1; i <= lines; i++) {
  var results = i * table;
  console.log(i + "x" + table + "=" + results);
}

function multiplier(table, lines) {
  for (i = 1; i <= lines; i++) {
    var results = i * table;
    console.log(i + "x" + table + "=" + results);
  }
}
multiplier(3, 12);

//Challenge 3
var hash = "#";
for (i = 0; i < 5; i++) {
  console.log(hash);
  hash = hash + "#";
}
for (i = 4; i > 0; i--) {
  for (j = 0; j < i; j++) {
    process.stdout.write("#"); //print it side by side
  }
  process.stdout.write("\n"); //refer to Enter
}

//Challenge 4
for (var x = 0; x <= 100; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(x);
  }
}

//Challenge 5
var length = 7;
var width = 9;
var board = "";

for (var y = 0; y < length; y++) {
  for (var x = 0; x < width; x++) {
    if ((x + y) % 2 == 0) board += "#";
    else board += " ";
  }
  board += "\n";
}

console.log(board);

var lines = 10;
for (i = 0; i < lines; i++) {
  //i is row
  for (j = 0; j < lines; j++) {
    //j is column
    if ((i + j) % 2 == 0) {
      process.stdout.write("#");
    } else {
      process.stdout.write(" ");
    }
  }
  process.stdout.write("\n");
}

//Challenge 6
// function isPrime(num) {
//   if (num < 2) return false;
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }
// for (var i = 0; i < 1000; i++) {
//   if (isPrime(i)) console.log(i);
// }

function primeNumber(num) {
  if (num == 2) {
    return true;
  }
  if (num % 2 == 0) {
    return true;
  }
  for (var i = 3; i < num; i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(101));

//Challenge 7
