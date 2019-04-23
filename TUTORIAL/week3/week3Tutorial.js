// var text = "The quick brown fox jumped over the lazy dog.";
// function longestCount() {
// var split = text.split(" ");
// var highest = 0;
// for (var i = 0; i < split.length; i++) {
// if (split[i].length > highest) {
// highest = split[i].length;
// }
// }
// return highest;
// }

// console.log(longestCount(text));

// var myString = "Asia Developer Academy";
// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString.indexOf("e"));
// console.log(myString.indexOf("ev"));
// console.log(myString.lastIndexOf("e"));
// console.log(myString.substring(5, 14));
// console.log(myString.split(" "));
// for (var i = 0; i < myString.length; i++) {
//   console.log(i);
// }

// 2. Count the number of vowels in a given string.

// function countVowels(string) {
// var str = string.toLowerCase();
// var vowelcounts = 0;
// for (i = 0; i <= str.length; i++) {
// if (
// str.charAt(i) == "a" ||
// str.charAt(i) == "e" ||
// str.charAt(i) == "o" ||
// str.charAt(i) == "i" ||
// str.charAt(i) == "u"
// ) {
// vowelcounts++;
// }
// }
// return vowelcounts;
// }

// console.log(countVowels("The quick brown fox jumped over the lazy dog"));

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// function adjacentProduct(arrayNum) {
// var arrayNumber = arrayNum;
// for (i = arrayNumber.[0]; i <= arrayNum.length; i++) {
// i = i * i++;
// }
// }

// var arrayNum = [2, 3, 4, 9, -3, 1, 6];
// console.log(adjacentProduct(arrayNum));

// function adjacentProduct(arrayNum){
//   var x = arrayNum.[0]
//   for (i = x; i <= arrayNum.length; x++){
//     y = i*x++
//     console.log(i*x++)
//   }
// }

// console.log(arrayNum = [2,3,4,9,-3,1,6]);

// var numbers = [3, 6, 7, -2, 4];
// var highest = 0;
// for (i = 0; i < numbers.length - 1; i++) {
// if (numbers[i] * numbers[i + 1] > highest) {
// highest = numbers[i] * numbers[i + 1];
// }
// }
// console.log(highest);

var buggyNumbers = [-1, 3, -2, 1, -5, 3];
var highest = buggyNumbers[0] * buggyNumbers[1];
for (i = 1; i < buggyNumbers.length - 1; i++) {
  if (buggyNumbers[i] * buggyNumbers[i + 1] > highest) {
    highest = buggyNumbers[i] * buggyNumbers[i + 1];
  }
}
console.log(highest);
