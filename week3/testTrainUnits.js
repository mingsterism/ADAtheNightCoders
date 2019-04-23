function trainUnits() {
  for (x = 0; x < 20; x++) {
    if (x % 2 == 0) {
      console.log("peon", x);
    } else if (x % 3 == 0) {
      console.log("peon", x);
    } else {
      console.log("peon", x);
    }
  }
}
console.log(trainUnits(1));
