console.log(1234 % 2)


var number = 15
if (number % 2 == 0) {
    console.log("number is even")
} else if (number % 3 == 0) {
    console.log("number is odd")
} else {
    console.log("number is a prime number")
}


var examResults = 34
if (examResults < 50) {
    console.log("I failed")
} else if (examResults > 50 && examResults > 70) {
    console.log("My grade is B")
} else {
    console.log("My grade is A+")
}



function gradeCalculator (examResults) {
if (examResults < 50) {
    console.log("I failed")
} else if (examResults > 50 || examResults < 70) {
    console.log("My grade is B")
} else {
    console.log("My grade is A+")
}
}

gradeCalculator(100)
gradeCalculator(52)
gradeCalculator(66)


var studentName = "Erin"

function gradeCalculator (examResults) {
    if (examResults < 50) {
        console.log("I failed")
        return "cat"
    } else if (examResults > 50 || examResults < 70) {
        console.log("My grade is B")
        return "dog"
    } else {
        console.log("My grade is A+")
        return "sheep"
    }
    }
    
    console.log(studentName, "has a score of" , gradeCalculator(100))
    gradeCalculator(52)
    gradeCalculator(66)


