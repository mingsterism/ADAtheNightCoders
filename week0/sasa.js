console.log("hello world")
console.log("i am a string")
console.log((12 + 12) > 20)

var name = "Melissa"
console.log ("My name is ", name)
var age = 27
var score = 99

console.log("my score and my age total is", age + score)
var total = age + score
console.log("my score and my age total is", total)

var petname = "feimao"
var petage = 4

console.log("my age and my pet age is", age + petage)
console.log("my pet name is" , petname)

console.log("my name is", name, "and my pet is", petname)


var number = 1234
if (number % 2 == 0) {
    console.log("number is Even")
} else if (number % 3 == 0) {
    console.log("number is Odd")
} else if (number < 10) {
console.log("the number is smaller than 10")
} else {
    console.log ("number is a prime number")
}



function gradeCalculator (examResults) {
    if (examResults < 50) {
    console.log("I failed")
    return "cat"
} else if (examResults > 50 && examResults < 70)  {
    console.log("My grade is B")
    return "dog"
} else if (examResults > 70 && examResults < 85)  {
    console.log("My grade is A")
    return "sheep"
} else {console.log("My grade is A++++")
    return "cow"
}
}
console.log(name, "has a score of" ,gradeCalculator(100))
gradeCalculator(49)
gradeCalculator(54)
console.log(name, "has a score of" ,gradeCalculator(26))
gradeCalculator(100)
gradeCalculator(71)



