const joker = require("./onejoker_testddos");

var oneLinerJoke = require("one-liner-joke");
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);

var getRandomJoke = oneLinerJoke.getRandomJoke({
  exclude_tags: ["dirty", "racist", "marriage"]
});
console.log(getRandomJoke);
