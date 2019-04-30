// Object destructuring
const a = require("./playground.js");
// const { foo, boo } = require("./playground.js");
//  The above is similar to below --------
// const a = {
//     foo,
//     boo
// }

// const {foo, boo} = {
//     foo,
//     boo
// }
console.log(a.foo(100));
console.log(a.boo());
// console.log(isOdd(100))
