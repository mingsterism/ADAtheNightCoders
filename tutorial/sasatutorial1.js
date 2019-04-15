// function findLongestWord(str) {
//   var strSplit = str.split(" ");
//   var longestWord = 0;

//   for (var i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//     }
//   }
//   console.log(longestWord);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

function inside(vowel) {
  var letter = ["a", "b", "c", "a", "a", "a"];
  var count = 0;
  var letterlength = letter.length; //3
  for (i = 0; i < letterlength; i++) {
    if (letter[i] == vowel) {
      count = count + 1;
      console.log(count);
    }
  }
}
inside("a");
