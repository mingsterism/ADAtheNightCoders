// function findTheLargestWord (str){
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i=0;strSplit.length;i++){
//         if(strSplit[i].length > longestWord){
//             longestWord = strSplit[i].length;
//         }

//     }return longestWord =0;
// }
// findTheLargestWord("The quick brown fox jumped over the lazy dog");


// //Largest length in a sentence 
// function longestWord(sentense){

// var sentenseArr = sentense.split("");
// var highest = 0;
// for ( var i = 0; i <sentenseArr.length; i++){
//     if (sentenseArr[i].length>highest){
//         highest = sentenseArr[i].length;
//     }
// }
// return highest
// }

// console.log(longestWord("Welcome to Asia Developer Academy"))

// //Vowel Counter

// var sentence = "The quick brown fox jumped over the lazy dog"
// var anotherSentence = "I love Asia Developer Academy"
// var lowerCaseSentence = anotherSentence.toLowerCase();
// var counter = 0;
// for ( var i = 0; i < lowerCaseSentence.length; i++){
//     if(lowerCaseSentence.charAt(i) == 'a' ||
//        lowerCaseSentence.charAt(i) == 'e' ||
//        lowerCaseSentence.charAt(i) == 'o' ||
//        lowerCaseSentence.charAt(i) == 'i' ||
//        lowerCaseSentence.charAt(i) == 'u' ){
//            counter++;
//        }
// }

// console.log(counter)


//Largest Adjacent Product
// var numbers = [3,6,7.-2,4];
// var buggyNumbers = [-1,3,-2,1,-5,3]
// console.log(largestAdjacent(numbers))
// console.log(largestAdjacent(buggyNumbers))

// function largestAdjacent(numbers){
// var highest = numbers[0]*numbers[1];
// for (i =1 ;i <numbers.length-1; i++){
//     console.log('highest is now' + highest)
//     console.log('product is ' + numbers[i] * numbers [i+1])
//     if (numbers[i]*numbers [i +1]>highest){
//         highest = numbers [i]* numbers [i+1];
//     }
// }
// return highest
  
// }


// Transform hour to military format

var time = "07:45:15pm"
var timeArr = time.split(":")
 
console.log (timeArr)
var timeIndic = timeArr[2].charAt(2)
console.log(timeIndic)
if (timeIndic === 'P'){
    if (timeArr[0] !=12){
        newHour = parseInt(timeArr[0]) +12;
    }

    else {
        newHour = timeArr[0]
    }
    var newHour = parseInt(timeArr[0])+12
    var answer = newHour+":" +timeArr[1]+ ":"+timeArr[2].substring(0,2)

    
    console.log(answer)

}else {

    var answer = "00:" + timeArr[1]+ ":" + timeArr[2].substring(0,2)
    console.log(answer)
}
 




// length of String

// var myString = "Asia developer academy"
// console.log(myString.length)
// console.log(myString.toLocaleUpperCase) 
// console.log(myString.toLowerCase())
// console.log(myString.indexOf('e'))
// console.log(myString.indexOf('ev'))
// console.log(myString.lastIndexOf('e'))
// console.log(myString.substring('e'))
// console.log(myString.substring(5,14))
// console.log(myString.split(""))
// var words = myString.split("")
// for (var i = 0; i<words.length;i++){
//     console.log(words[i])
// }
