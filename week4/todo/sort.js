var fruits = ["apple", "orange", "watermelon", "kiwi"];

fruits.sort(function(a, b) {
  return a.length - b.length;
});

console.log(fruits);
// var my_array = ["my", "super", "awesome", "list", "of", "strings"];
//
// my_array.sort(function(a, b) {
//   return a.length - b.length; //ASC, For Descending order use: b - a
// });
//
// console.log(my_array);
