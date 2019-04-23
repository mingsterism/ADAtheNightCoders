// const isOdd = require("is-odd");

// console.log(isOdd("1")); //=> true
// console.log(isOdd("3")); //=> true

// console.log(isOdd(0)); //=> false
// console.log(isOdd(2)); //=> false

function foo(x) {
  if (x % 2 === 0) {
    return "WOAHH";
  } else {
    return "BOOHHHH!!";
  }
}

function boo(y) {
  console.log("1-1-1-1");
}

module.exports = {
  foo,
  boo: boo
};
