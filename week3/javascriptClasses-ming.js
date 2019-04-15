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

/**
 * Creating classes. Object oriented programming
 * Example 1 using an ogre
 */

console.log(Math.random());
class Ogre {
  constructor(name, agi, int, hp, mana = 300) {
    this.agi = 100;
    this.int = int;
    this.hp = hp;
    this.mana = mana;
    this.name = name;
  }

  attack(otherOgre) {
    console.log("ATTACKING OTHER OGRE. HEALTH NOW IS: ", otherOgre.hp);
    this.mana = this.mana - 10 * Math.random();
    otherOgre.hp = otherOgre.hp + otherOgre.mana - 20 * otherOgre.agi;
    return {
      attcker: this.name,
      attakee: otherOgre.name,
      attackeeHealth: otherOgre.hp
    };
  }

  superAttack(fluffles) {
    for (var round = 0; round < 3; round++) {
      console.log("Attacking on round", round)
      var hitOrMiss = Math.random();
      if (hitOrMiss > 0.5) {
        this.attack(fluffles);
        console.log("attacked");
        return 'noooo'
      } else {
        console.log("missed");
        return 'hi'
      }
    }
    console.log("FINISHED THE ROUND")
  }

  attacked() {
    this.hp - 20;
  }
}

var ogre1 = new Ogre("Pung", 10, 20, 20);
var ogre2 = new Ogre("Charles", 20, 20, 100);
var ogre3 = new Ogre("Erin", 20, 20, 100);
var attackAction = ogre1.attack(ogre2);
ogre1.superAttack(ogre2);
console.log(ogre2.hp);
console.log(attackAction);
console.log(`After being attacked Ogre 2 hp is ${ogre2.hp}`);

// class Human {
//   constructor(name, age, height, location, job, startingSalary, retirementAge) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.location = location;
//     this.job = job;
//     this.startingSalary = startingSalary;
//     this.retirementAge = retirementAge;
//   }
// }

// var fluffy = new Dog();
// console.log(fluffy);
// fluffy.bark();

// function foo() {
//   console.log("Hello from foo!");
// }
// function caller(f) {
//   // Call the given function
//   f();
// }
// function indirectCaller(f) {
//   // Call `caller`, who will in turn call `f`
//   caller(f);
// }
// // Do it
// indirectCaller(foo); // alerts "Hello from foo!"

// function add2(x) {
//   return x + 2;
// }
// function add3(x) {
//   return x + 2;
// }

// function test1(x, fn) {
//   return fn(x);
// }

// var result = test1(100, add2);
// console.log(result);

// var result = test1(100, (ans) => {
//     return ans * 100
// })

// function foo(a, b) {
//   console.log(a + " + " + b + " = " + (a + b));
// }
// function caller(f, v1, v2) {
//   // Call the given function
//   f(v1, v2);
// }
// function indirectCaller(f, v1, v2) {
//   // Call `caller`, who will in turn call `f`
//   caller(f, v1, v2);
// }
// // Do it
// indirectCaller(foo, 1, 2); // alerts "1 + 2 = 3"
