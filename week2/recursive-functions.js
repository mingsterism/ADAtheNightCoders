function countToX(startingValue, endingValue) {
  for (const startingValue; startingValue < endingValue; startingValue++) {
    console.log(startingValue)
  }
}

countToX(0, 10)

function recursiveCount(startingValue, endingValue) {
  if (startingValue === endingValue + 1) {
    console.log("I have reached the last value");
  } else {
    console.log(startingValue);
    recursiveCount(startingValue + 1, endingValue);
  }
}

// console.log(recursiveCount(0, 10));


