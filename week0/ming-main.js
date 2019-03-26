console.log("hello world")
console.log("I am a string. I must be inside the double appostrophe")
console.log((123456 + 123234 / 10 - 3) > 0)
// this is not a code. the system will not read this line
// bla bla bla
/**
 * Another way to write comments and text
 */

var age = 28
var score = 100
var total = age + score
var name = "Charles"

console.log("my age and score is", age + score);
console.log("my score and my age total is", total)
console.log("my name is", name,"and my age is",age)

// var number = 23049340932
// if (number % 2 == 0) {
//     console.log("number is Even")
// } else if (number % 3 == 0 {
//     console.log("number is Odd")
//  else  (number < 10) 
//     console.log("the number is smaller than 10")
// } else {
//     console.log("number is a prime number")
// }

var studentName = "Erin"

if (studentName == "Erin") {
    console.log("My favourite food is Happy Meal")
} else if (studentName == "Charles") {
    console.log("My favourite food is Rice")
} else if (studentName == "Melissa") {
    console.log("My favourite food is Chiken Rice") 
} else {
    console.log("I got no favourite food")
}

function gradeCalculator (examResults) {
    if (examResults < 50) {
        console.log("I failed")
        return "dog"
    } else if (examResults > 50 || examResults < 70) {
        console.log("My grade is B")
        return "cat"
    } else if (examResults > 70 && examResults < 85) {
        console.log("My grade is A") 
        return "mouse"
    } else {
        console.log("My grade is A+")
        return "sheep"
    }
}
console.log(studentName, "has a score of", gradeCalculator(100))
gradeCalculator(30)
gradeCalculator(44)
gradeCalculator(10)



