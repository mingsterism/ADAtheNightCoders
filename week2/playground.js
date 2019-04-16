
function boo() {
  console.log("yaa");
}
function foo (x) {
  if (x % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

function boo() {
  console.log("yaa")
}

module.exports = {
  foo,
  boo: boo
};