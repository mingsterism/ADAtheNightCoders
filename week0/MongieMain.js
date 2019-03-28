console.log("no strings on me")
console.log((52*42 > 0))
var name = "Ted"
console.log("My name is", name)
var land1 = 8
var land2 = 2
console.log("the number of the land", (land1 + land2) > 0)
var sea1 = 0
var sea2 = -2
console.log("the number of the sea is", (sea1 + sea2) >0)
function AgeGenerator (SeniorCitizen) {
    if (SeniorCitizen < 60) {
        console.log("Not a Senior")
    } else if (SeniorCitizen > 60) { 
        console.log("Probably Dead") 
    } else { 
        console.log("Congratulations")
    }
}
AgeGenerator(88)
AgeGenerator(100)
AgeGenerator(5)
AgeGenerator(30)
AgeGenerator(60)
