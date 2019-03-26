var number = 1239
if (number % 2 == 0) {
    console.log("even")
}else if (number % 3 == 0){
    console.log("odd")
}else {
    console.log("number is a prime number")
}

function gradecalculator (examresults){
    if (examresults < 50) {
        console.log("You still got lot more to work on")
        return ("You still got lot more to work on")
    }else if (examresults > 50 && examresults < 80){
        console.log("Not Bad")
        return ("Not Bad")
    }else if (examresults > 80 && examresults <100){
        console.log("You are excellant")
        return ("You are excellant")
    }else {
        console.log("Don't play play ya")
        return ("Don't play play la")
    }
}
gradecalculator (20)
gradecalculator (70)
gradecalculator (130)

console.log ("James", gradecalculator(101))


