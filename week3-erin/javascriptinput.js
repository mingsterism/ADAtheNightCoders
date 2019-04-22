// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

/**
 * Creating classes.Object oriented programming
 */

// class Kitty{
//     constructor (love, dog , hp ){
//         this.dog =dog;
//         this.hp =hp;
//         this.love =love;

//     }
//    attack(){
//         this.kitty = this.kitty -10;
        
//     }

//     attacked(){
//         this.kitty -20;
//     }
// }

// var kitty = new Kitty(100, 100, 100);
//   kitty.attack()
//   kitty.attacked()
//   console.log ("kitty love dog ", kitty.love);
//   console.log ("kitty forget bring hp",kitty.hp);


class orge{
    constructor (name,agi,int,hp,mana =300){
        this.agi=100,
        this.int =int,
        this.hp =hp,
        this.mana =mana;
        this.name =name;
    }

    attack(otherOrge){
        this.mana = this.mana-10;
        otherOrge.hp = otherOrge.hp + otherOrge.mana -20 * otherOrge.agi;
        return {
            attacker : this.nama,
            attackee:otherOrge.name,

        };
    }

    attacked(){
        this.hp -20;
    }
}

var ogre1 = new Ogre ("Pung",10, 20, 20);
var ogre2 = new Ogre ("Erin",20, 20, 100);
var ogre3 = new Ogre ("Charles",20, 20, 100);
var attackAction = ogre1.attack(ogre2);
console(attackAction);
console.log("Orge 2 hp is", ogre2.hp);
console.log (`After being attacked Ogre 2 hp is ${ogre2.hp}`);




class Human {
    constructor(name, age , height , location , job ,startingSalary, retirementAge){
        this.name = name;
        this.age = age;
        this.height = height;
        this.location = location;
        this.job = job;
        this.startingSalary = startingSalary;
        this.etirementAge = setirementAge;
        

    }

}



