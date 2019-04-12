function average(x, y) {
  var total = 0;
  for (x; x <= y; x++) {
    total = total + x;
  }
  console.log(total);
}

module.exports = {
  average
};
