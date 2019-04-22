// function findLongestWord(str) {
//   var strArr = str.split(" "); //8
//   var longest = " ";
//   for (var i = 0; i < strArr.length; i++) {
//     if (strArr[i].length > longest.length) {
//       longest = strArr[i];
//     }
//   }
//   console.log(longest.length);
// }

// findLongestWord("The quick brown fox jumped over the fence");

// function countVowel(str) {
//   var vowel = ["a", "e", "i", "o", "u"];
//   var strSplit = str.toLowerCase().split("");
//   var totalVowel = 0;

//   for (var i = 0; i < strSplit.length; i++)
//     if (
//       strSplit[i] === "a" ||
//       strSplit[i] === "e" ||
//       strSplit[i] === "i" ||
//       strSplit[i] === "o" ||
//       strSplit[i] === "u"
//     ) {
//       totalVowel++;
//     }
//   console.log(totalVowel);
// }

// countVowel("The quick brown fox jumped over the fence");
// countVowel("I love Asia Developer Academy");

// var array = [3, 6, -2, -5, 7, 3, 9, 1];
// var array = [-1, 3, -2, 1, -5, 3];
// var x = 0;
// var y = 0;
// var z = array[0] * array[1];
// for (var i = 0; i < array.length - 1; i++) {
//   console.log("highest now is", z);
//   x = array[i];
//   y = array[i + 1];
//   if (x * y > z) {
//     z = x * y;
//   }
// }
// console.log(z);

// var totalEvenFib = 0;
// var fib = [0, 1];
// for (var i = fib.length; i < 7; i++) {
//   fib[i] = fib[i - 2] + fib[i - 1];
//   {
//     if (fib[i] % 2 === 0) {
//       totalEvenFib = totalEvenFib + fib[i];
//     }
//   }
// }
// console.log(totalEvenFib);

// const convertTime12to24 = time12h => {
//   const [time, modifier] = time12h.split(" ");

//   let [hours, minutes, seconds] = time.split(":");

//   if (hours === "12") {
//     hours = "00";
//   }

//   if (modifier === "PM") {
//     hours = parseInt(hours, 10) + 12;
//   }

//   return time;
// };

// console.log(convertTime12to24("01:02:45 PM"));
// console.log(convertTime12to24("05:06:15 PM"));
// console.log(convertTime12to24("12:00:25 PM"));
// console.log(convertTime12to24("12:00:35 AM"));

function convert24hr(time) {
  var split = time.split(":");
  var amPM = split[2].charAt(3);

  if (split[0] === "12") {
    split[0] = "00";
  }

  if (amPM === "P") {
    split[0] = parseInt(split[0]) + 12;
    console.log(split[0] + ":" + split[1] + ":" + split[2].substring(0, 2));
  } else {
    var answer = split[0] + ":" + split[1] + ":" + split[2].substring(0, 2);
    console.log(answer);
  }
}

convert24hr("1:15:15 AM");
convert24hr("1:45:45 PM");
