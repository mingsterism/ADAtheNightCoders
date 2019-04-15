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

class Dog {
  constructor() {}
  bark() {
    console.log("Woff");
    return "Wof";
  }
  eat() {
    console.log("I am eating");
    return "eat";
  }
}

var Fluffy = new Dog();
Fluffy.bark();

console.log(Math.random());
class Magician {
  constructor(name, agi, int, hp, mana) {
    this.name = name;
    this.agi = agi;
    this.int = int;
    this.hp = hp;
    this.mana = mana;
  }

  attack(other) {
    this.mana = this.mana - 10;
    other.hp = other.hp - 30 * Math.random();
    return {
      attacker: this.name,
      attakee: other.name
    };
  }

  attackCritical(other) {
    this.mana = this.mana - 10;
    other.hp = other.hp * Math.random();
  }

  superAttack(other) {
    for (var round = 0; round < 3; round++) {
      console.log("Attacking on round", round);
      var hitOrMiss = Math.random();
      if (hitOrMiss > 0.5) {
        this.attack(other);
        console.log("attacked");
      } else {
        console.log("missed");
      }
    }
  }
}

var magician1 = new Magician("Amy", 50, 50, 80, 200);
var magician2 = new Magician("Shark", 45, 45, 90, 180);
var attackAction = magician1.attack(magician2);
console.log(attackAction);
console.log(
  `${magician1.name} is attacking ${magician2.name}. ${magician2.name} hp is ${
    magician2.hp
  }.`
);
console.log(`${magician1.name} mana left ${magician1.mana}`);

magician2.attackCritical(magician1);
magician1.superAttack(magician2);
