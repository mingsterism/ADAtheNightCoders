exercise 1:

function calculate(age) {
  var price = 100;

  if (age < 18) {
    price = price * 0.5;
    console.log("the price is ", price);
  } else if (age < 40) {
    console.log("the price is ", price);
  } else if (age < 65) {
    price = price * 0.75;
    console.log("the price is ", price);
  } else {
    price = price * 0.5;
    console.log("the price is ", price);
  }
}

calculate(17);
calculate(19);
calculate(50);
calculate(77);

exercise 2:

var table = 3;
var lines = 12;

for (i = 1; i <= lines; i++) {
  console.log(i + "x" + table + "=" + i * table);
}

function table(x, y) {
  var num = 1;
  for (num; num <= y; num++) {
    var total = num * x;
    console.log("the multiplication is", total);
  }
}
table(5, 5);

exercise 3:

var hash = "#";
for (i = 0; i < 5; i++) {
  console.log(hash);
  hash = hash + "#";
}
for (i = 4; i > 0; i--) {
  for (j = 0; j < i; j++) {
    process.stdout.write("#");
  }
  process.stdout.write("\n");
}

FAILLL
function drawing(x, y, a, b) {
  var draw = "#";
  for (x; x < y; x++) {
    draw = draw + "#";
    console.log(draw);
  }

  for (; a < b; a++) {
    draw = draw - "#";
    console.log(draw);
  }
}
drawing(1, 6, 2, 4);

exercise 4:

function fizzBuzz(x, y) {
  for (x; x <= y; x++) {
    if (x % 15 == 0) {
      console.log("FizzBuzz");
    } else if (x % 5 == 0) {
      console.log("Buzz");
    } else if (x % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(x);
    }
  }
}
fizzBuzz(1, 30);

exercise 5:

//exercise 6:

function prime(x, y) {
  for (x; x <= y; x++) {
    if (x % 2 == 0) {
      console.log(x, "is not a prime");
    } else if (x % 3 == 0 || x % 5 == 0) {
      console.log(x, "is not a prime");
    } else {
      console.log("PRIME NUMBER IS", x);
    }
  }
}
prime(1, 30);

exercise 7:

function prime(x, y) {
  var sum = 0;
  for (x; x <= y; x++) {
    sum = sum + x;
    console.log(sum);
  }
}

prime(0, 10);
