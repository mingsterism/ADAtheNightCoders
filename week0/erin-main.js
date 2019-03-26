console.log("no string on me")
console.log("I am string . I must be inside the double appostrope")

console.log((123456 + 123234 /10 -3)>0)
var name = "erin"
console.log("My name is ", name)

var age = 28
var score = 100
var total = age + score 
name = "Charles"

console.log ("name score is score and my age total is" , age + score)
console.log ("my score and my age total is",total)




function gradeResult (examResults){
    if (examResults <50){
        console.log ("i pass it")
     } else if (examResults > 50 || examResults < 70){
        console.log ("My grade is A")
    } else if (examResults > 70 && examResults < 85){
        console.log("My grade is A+" )
    } else {
        console.log("Yes!!")
    }
}

gradeResult(88)
gradeResult(100)
gradeResult(200)