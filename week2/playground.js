function foo(x=100) {
  if (x % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

function boo() {
  console.log("yaa");
}

module.exports = {
  foo,
  boo: boo // same as boo
};

