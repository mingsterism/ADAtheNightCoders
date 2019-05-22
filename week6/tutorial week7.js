// function findLongestWord(str) {
//   var strSplit = str.split(" ");
//   var answer = " ";
//   for (var i = 0; i < strSplit.length; i++) {
//     if (answer.length < strSplit[i].length) {
//       answer = strSplit[i];
//     }
//   }
//   console.log(answer.length);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
function translatePigLatin(str) {
  if (
    str.charAt(0) == "a" ||
    str.charAt(0) == "e" ||
    str.charAt(0) == "i" ||
    str.charAt(0) == "o" ||
    str.charAt(0) == "u"
  ) {
    return str + "way";
  } else {
    //for loop
    var consonant = str.charAt(0);
    for (var i = 1; i < str.length; i++) {
      if (
        str.charAt(i) == "a" ||
        str.charAt(i) == "e" ||
        str.charAt(i) == "i" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u"
      ) {
        var pigLatin = str.substring(i) + consonant + "ay";
        return pigLatin;
      } else {
        consonant += str.charAt(i);
      }
    }
    return str;
  }
}

console.log(translatePigLatin("cccddd"));
