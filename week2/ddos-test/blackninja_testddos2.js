const black = require("./blackninja_testddos");

console.log(black.foo(201));

const { foo, boo } = require("./blackninja_testddos");

const XYZ = { foo, boo };

console.log(XYZ.foo(201));
