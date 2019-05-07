// var str = "Hello World";
// var n = str.charCodeAt(0);
// var a = n + 13;
// var res = String.fromCharCode(a);
// console.log(res);

//Caesar Cipher
function rot13(sentence) {
  var upperCase = sentence.toUpperCase();
  var answer = "";
  for (var i = 0; i < upperCase.length; i++) {
    if (upperCase.charCodeAt(i) >= 65 && upperCase.charCodeAt(i) <= 90) {
      var number = upperCase.charCodeAt(i) + 13;
      if (number > 90) {
        answer += String.fromCharCode((number % 91) + 65);
      } else {
        answer += String.fromCharCode(number);
      }
    } else {
      answer += upperCase.charAt(i);
    }
  }
  console.log(answer);
  return answer;
}

rot13("Uryyb jbeyq");
