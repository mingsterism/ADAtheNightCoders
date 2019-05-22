// function add10(x) {
//   return x + 10;
// }

// const add2 = x => {
//   return x + 2;
// };

// function combinor(fn, x) {
//   return fn(x);
// }

// console.log(combinor(add2, 10));
class Req {

    constructor() 
}

class Resp {
constructor () {}
send(val) {
    console.log()
}

}

class Express2 {
  constructor(age, height) {
    this.age = age;
    this.height = height;
  }
  shoutAge(age) {
    return `Heyyyy my age is ${age}`;
  }
  get(stringVal, fn) {
    console.log("route to ", stringVal);
    return fn(new Express2());
  }
}
const myApp = new Express2(10, 1000, new Request(), new Response());
console.log(o1.shoutAge(100));
