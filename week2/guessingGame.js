<<<<<<< HEAD
=======

/**
 * Lets play a guessing game
 * 
 *
 **/

>>>>>>> origin/ming-branch
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

<<<<<<< HEAD
readline.question(`what is your name \n`, (ans) => {
    console.log(ans)
    readline.close()
})
=======
// readline.question("WHat is your name", (ans) => {
//   var name = ans
// })
// readline.question("WHat is your age", (ans) => {
//   var age = ans
// })
// readline.question("WHat is your hobbies", (ans) => {
//   var hobbies = ans
// })

// const height = readline.question("what is your height")
// console.log(height)
// console.log(`your name is ${name}. your age is ${age} and your hobby is ${hobbies}`)




















function runTheGame(answer) {
  readline.question(`what is your guess \n`, (ans) => {
    if (ans.toString() !== answer.toString()) {
      console.log("you guessed wrong")
      runTheGame(answer)
    } else {
      console.log("Yaaa you guessed right")
      readline.close()
    }
  })
}

runTheGame(100)


>>>>>>> origin/ming-branch
