class Req {
  constructor() {}
}

class Resp {
  constructor() {}
  send(val) {
    console.log("I am sending");
    return val;
  }
}

class Express2 {
  constructor(req, resp) {
    this.req = req
    this.resp = resp
  }
  get(stringVal, fn) {
    console.log("route to ", stringVal);
    return fn(this.req, this.resp);
  }
}

const myApp = new Express2(new Req(), new Resp());
myApp.get("/", (req, res) => res.send("Hello world"))

app.get("/", (req, res) => res.send("Hello World!"));

















function add10(x) {
  return x + 10;
}

const addNum = (x, y) => { return x + y; }; 
const addNum = (x, y) => x + y; ; 

function combinor(fn, x) {
  return fn(x);
}

// const anotherCombinor = (x, fn) => {
//   return fn(x, y);
// };

// app.get("/", (req, res) => res.send("Hello World!"));
// anotherCombinor(2, (x, y) => x + y);

// console.log(combinor(add10, 10));
