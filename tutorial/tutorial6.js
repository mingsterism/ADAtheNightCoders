// function ceaserCipher(str) {
//   str = str.toLowerCase();
//   var decoded = {
//     a: "n",
//     b: "o",
//     c: "p",
//     d: "q",
//     e: "r",
//     f: "s",
//     g: "t",
//     h: "u",
//     i: "v",
//     j: "w",
//     k: "x",
//     l: "y",
//     m: "z",
//     n: "a",
//     o: "b",
//     p: "c",
//     q: "d",
//     r: "e",
//     s: "f",
//     t: "g",
//     u: "h",
//     v: "i",
//     w: "j",
//     x: "k",
//     y: "l",
//     z: "m"
//   };
//   var decipher = "";
//   for (var i = 0; i < str.length; i++) {
//     decipher += decoded[str[i]];
//     console.log(decipher);
//   }

//   //return the output
//   return decipher;
// }

// ceaserCipher("abcd");

// var str = "";

function rot13(phara) {
  var answer = "";
  for (i = 0; i < phara.length; i++) {
    if (phara.charCodeAt(i) >= 65 && phara.charCodeAt(i) <= 90) {
      var number = phara.charCodeAt(i) + 13;
      if (number > 90) {
        answer += String.fromCharCode((number % 91) + 65);
      } else {
        answer += String.fromCharCode(number);
      }
    } else {
      answer += phara.charAt(i);
    }
  }
  return answer;
}

console.log(rot13("SERR PBQR PNZC"));
