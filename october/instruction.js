//cd (change directory)
//cd D: (direct to Drive D)
//cd ..
//click Tab to show option
//ls (list folders)
//mkdir (make new directory)
//rmdir ()
//git clone http://
//git checkout -b (create new branch)
//clear (clear the record)
//git checkout (direct to other branch)
//git checkout master (direct to master branch)
//git add . (if push in my branch, if pull in master branch)
//git commit -am 'My new files' (Key in what have updated)
//git push (launch to github)
//git push --set-upstream origin weining-branch
//git fetch --all (fetches the latest update from github)
//git branch -r (see all latest branches)
//git rebase master

//"vim"
//click "i" to insert
//click "Esc" to change to control keypad (up"K" down"J" left"H" right"L")
//:q! (quit without saving)
//:q (quit & saved)

//touch week1/superfile
//mv superfile ../week2

//var a = 15
//function roo(inside the box){
// console.log(say something privately)
// return(shout out something);
//}
//console.log(roo(something to say))

//in same folder
//module.exports = {isOdd}
//const isOdd = require('playground'); -> look for folder_file
//const readline = require
//this.mana -> oriented
//Math.random()

//html:5 --> template
//<script>console.log()</script>
//Vuejs competitors: React (Facebook); Angular (Google)
//<button v-on:click ="attack()">Attack</button>

//curl or fetch -> pull data API
//computed:{} -> only load when data comes in
//callSwapi(){
//    fetch("https://api").then(resp =>{
//        resp.json().then(data => {
//    this.starWarsData = data.results[0].name
//}
//            )
//    })
//}

//create = insert
//read = find

function add10(x) {
  return x + 10;
}
const add2 = x => {
  return x + 2;
};
function combinor(fn, x) {
  return fn(x);
}
const anotherCombinor = (x, fn) => {
  return fn(x);
};

app.get("/", (req, res) => res.send("Hello World!"));
anotherCombinor(2, x => x + 2);
console.log(combinor(add10, 10));

// => equal to {return}
