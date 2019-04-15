// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What do you think of Node.js? ", answer => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// funcion outerFunction(x, innerFunc) {

class human {
  constructor(name, hp, mp, int, money) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
  }

  heal(otherHuman) {
    this.mp = this.mp - 10;
    otherHuman.hp = otherHuman.hp + 20;
    return { healer: this.name, healee: otherHuman.name };
  }
}

var human1 = new human("lisa", 100, 100, 100, 100);
var human2 = new human("sasa", 100, 100, 100, 100);
var healSkill = human1.heal(human2);
console.log(healSkill);
console.log(`After use heal skill, my mp is decreased to ${human1.mp}`);
console.log(`After being healed, my friend hp is increased to ${human2.hp}`);
