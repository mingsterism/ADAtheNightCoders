// Refresh your memory with data structures

const charles = {
  name: "Charles",
  age: 100,
  hobbies: ["running"]
};
const erin = {
  name: "Charles",
  age: 12,
  hobbies: ["running"]
};
const pung = {
  name: "Charles",
  age: 34,
  hobbies: ["running"]
};

const myProfile = {
  name: "Ming",
  age: 28,
  height: 170,
  hobbies: ["golf", "tennis", "chess"],
  friends: [charles, erin, pung]
}; // Pseudocode : Find the average age of your friends
/**
 * 1) Find the sum of all my friends ages
 * 2) Divide the sum by the count of my friends
 */
// Find the average age of my friends
console.log(
  `My name is ${myProfile.name} and my friends name is ${
    myProfile.friends[0].name
  }`
);

function findAverageAge(totalAge) {
  for (var x = 0; x < myProfile.friends.length; x++) {
    totalAge = totalAge + myProfile.friends[x].age;
  }
  var averageAge = totalAge / myProfile.friends.length;
  return {
    averageAge,
    totalAge
  };
}
// const output = findAverageAge();
console.log(findAverageAge(0));

function haha() {
  console.log("I am a cat");
  return {
    name: "Funny cat",
    age: 10
  };
}
const cat = haha();
console.log(cat.name);
