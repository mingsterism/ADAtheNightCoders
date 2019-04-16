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

class Batman {
  constructor (hp, strenght, money,) {
    this.hp = hp;
    this.strenght = strenght;
    this.money = money;
  }

  attack() {
    this.money = this.money - 10;
  }

  attacked() {
    this.hp = this.hp - 10;
  }
}
  var batman = new Batman(100, 100, 100);
  batman.attack()
  batman.attacked()
  console.log ("batman money left ", batman.money);
  console.log ("batman hp left", batman.hp);