//Q1. Largest length in a sentence
//Return the length of the longest word in the provided sentence.
// var txt = "The dog is super cute";
// console.log(txt.length);
// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());
// console.log(txt.indexOf("o"));
// console.log(txt.lastIndexOf("u"));
// console.log(txt.substring(4, 7));

function findLongestWord(txt) {
  var words = txt.split(" "); //with space " " means array "The" "dog" "is"...
  var longestWords = 0;
  for (var i = 0; i < words.length; i++) {
    //words.length = 0"The" 1"dog" 2"is" ...
    if (words[i].length > longestWords) {
      //words[i].length = 0"The" length is 3; 1"dog" length is 3; 2"is" length is 2...
      longestWords = words[i].length;
    }
  }
  console.log(longestWords);
  return longestWords;
}

findLongestWord("The dog is super cute");

//Q2. Vowel Counter
//Write a JavaScript function to count the number of vowels in a given string. ("a", "e", "i", "o", "u")
//console.log(txt.charAt())
function findVowel(sentence) {
  var lowerCase = sentence.toLowerCase();
  var lowerCaseSplit = lowerCase.split("");
  var vowelsCount = 0;
  for (var i = 0; i < lowerCaseSplit.length; i++) {
    if (
      lowerCaseSplit[i] === "a" ||
      lowerCaseSplit[i] === "e" ||
      lowerCaseSplit[i] === "i" ||
      lowerCaseSplit[i] === "o" ||
      lowerCaseSplit[i] === "u"
    ) {
      vowelsCount++;
    }
  }
  console.log(vowelsCount);
  return vowelsCount;
}

findVowel("The dog is super cute");

//Q3. Largest Adjacent Product
//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function adjacentElementsProduct(inputArray) {
  var highest = 0;
  for (i = 0; i < inputArray.length - 1; i++) {
    //stop at the end second number, as last number don't have number to calculate
    if (inputArray[i] * inputArray[i + 1] > highest) {
      highest = inputArray[i] * inputArray[i + 1];
    }
  }
  return highest;
}

console.log(adjacentElementsProduct([-3, 6, -2, 5, -6, 3])); //display 0 as 0 > negative number

function negativeElements(number) {
  var high = number[0] * number[1];
  for (i = 1; i < number.length - 1; i++) {
    if (number[i] * number[i + 1] > high) {
      high = number[i] * number[i + 1];
    }
  }
  return high;
}
console.log(negativeElements([-1, 3, -2, 5, -5, 3])); //display negative number

//Q4. Transform hour to military format
//parsting
function convertTime12to24(time12h) {
  var [time, modifier] = time12h.split(" ");
  var [hours, minutes, seconds] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12; //change hours (string) to number + 12
  } //else AM no need to + 12
  console.log(`${hours}:${minutes}:${seconds}`);
  return `${hours}:${minutes}:${seconds}`;
}

convertTime12to24("12:02:34 PM"); // PM hours = 12 = 00 + 12
convertTime12to24("12:18:55 AM"); // AM hours = 12 = 00

function militaryTime(twelveHour) {
  var split = twelveHour.split(":");
  var indicator = split[2].charAt(3);
  if (split[0] === "12") {
    split[0] = "00";
  }
  if (indicator === "P") {
    var hour = parseInt(split[0]) + 12;
    var answer = hour + ":" + split[1] + ":" + split[2].substring(0, 2); //substring show specific interger
    console.log(answer);
  } else {
    var answer = split[0] + ":" + split[1] + ":" + split[2].substring(0, 2);
    console.log(answer);
  }
  return answer;
}

// function militaryTime(twelveHour) {
//   var split = twelveHour.split(":");
//   var indicator = split[2].charAt(3);
//   // if (split[0] === "12"){
//   //split[0] = "00";
//   //}
//   if (indicator === "P") {
//     var newHour = "";
//     if (split[0] != 12) {
//       //!= not equal to
//       newHour = parseInt(split[0]) + 12;
//     } else {
//       newHour = split[0];
//     }
//     var answer = newHour + ":" + split[1] + ":" + split[2].substring(0, 2); //substring show specific interger
//     console.log(answer);
//   } else {
//     if (split[0] != 12) {
//       var answer = split[0] + ":" + split[1] + ":" + split[2].substring(0, 2);
//       console.log(answer);
//     } else {
//       var answer = "00:" + split[1] + ":" + split[2].substring(0, 2);
//       console.log(answer);
//     }
//   }
//   return answer;
// }
militaryTime("12:30:10 PM");
militaryTime("12:07:23 AM");

//Q5. Sum of even Fibonacci
