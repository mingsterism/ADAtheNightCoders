// Transform hour to military format

// Given a time in -hour AM/PM format, convert it to military (-hour) time.
// Note: Midnight is on a -hour clock, and on a -hour clock. Noon is on a -hour clock, and on a -hour clock.
// Input Format
// A single string containing a time in -hour clock format (i.e.: or ), where 00 <= h <= 23 and 00 <= m <= 59.
// Output Format
// Convert and print the given time in -hour format, where .
// Sample Input = Sample Output
// 07:05:45PM = 19:05:45 12:05:45AM = 00:05:45 12:05:45PM = 12:05:45

// var hh = Number;
// var mm = Number;
// var ss = Number;

// function clockTime(hh, mm, ss, amPm) {
//   if (amPm == `AM` && hh == 12) {
//     hours = hh - 12;
//     console.log(hours, ":", mm, ":", ss, ":", amPM);
//   } else if (amPM == `PM` && hh < 12) {
//     hours = hh + 12;
//     console.log(hours, ":", mm, ":", ss);
//   }
//   return clockTime;
// }

// console.log(clockTime(10, 28, 10, "PM"));
// var time = "00:00:00:PM";
// var timeSplit = time.split(`:`);
// console.log(timeSplit);

// var time = "00:00:00:PM";
// var timeSplit = time.split(`:`);
// console.log(timeSplit);
// var amPM = timeSplit.charAt(7);
// console.log(amPM);

// if (timeSplit.charAt(7) == `P`) {
//   hh = timeSplit.slice(0, 2) + 12;
//   console.log(hh + `:` + timeSplit.slice(3, 5) + `:` + timeSplit.slice(6, 8));
// }

// function timeConverter(hh,mm,ss,amPM)
function timeConverter(time) {
  var timeArr = time.split(`:`);
  // console.log(timeArr);
  var timeIndic = timeArr[2].charAt(2);
  //   console.log(timeIndic);
  if (timeIndic === "P") {
    var hour = parseInt(timeArr[0]) + 12;
    var answer = hour + ":" + timeArr[1] + ":" + timeArr[2].substring(0, 2);
    console.log(answer);
  } else {
    var answer =
      timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2].substring(0, 2);
    console.log(answer);
  }
}

timeConverter("10:22:39PM");

// Sum of even Fibonnaci

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first
// 10 terms will be:
// 1,1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// find the sum of the even-valued terms for all Fibonacci number less than 1000.

// var NumSeq1 = 0
// var NumSeq2 = NumSeq1
// var NumSeq3 = NumSeq1 + NumSeq2
