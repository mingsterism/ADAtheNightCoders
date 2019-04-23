const pung = {
    age: 27, 
    girlfriendName: "Charles", 
    ethinicty: "Chinese",
    friends: [
        {
            name: "Charles", 
        }, 
        {
            name: "Erin"
        }
    ]
}

const object1 = {}

console.log(pung.ethinicty)
console.log(pung.friends[1])


function charles () {
    console.log("CHARLES")
}
function erin () {
    console.log("ERIN")
}
function shino () {
    console.log("SHINO")
}

function melissa () {
    console.log("GOOD")
}

function weining (){
    console.log("HAPPY")
}
function Charles2 (){
    return new Promise( (resolve) => {
        resolve("Charles")
    })
}

function charlesShout () {
    console.log("Charles shout is delayed")
    // setTimeout(() => {console.log("CHARLES")}, 3000)
    return new Promise((resolve) => {
        for (var x = 0; x < 1000; x++ ){
            console.log(x)
        }
        resolve("I am done")
    })
}

charlesShout().then( () => {
    console.log("I am done")
})
console.log("Waiting for you charles")