const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`what is your name \n`, (ans) => {
    console.log(ans)
    readline.close()
})