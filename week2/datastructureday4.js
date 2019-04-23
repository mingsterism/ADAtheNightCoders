var educationBackground = {
  primary: "SJKCPM",
  secondary: "SJKKH",
  tertiary: "TUC",
  professional: "acca"
};

var myProfile = {
  name: "Wee Vian",
  age: 28,
  stateBorn: "Kedah",
  hobbies: "play computer and console games",
  education: educationBackground,
  loves: "msexcel",
  friends: [
    { name: "erin", age: 27, height: 158, hobbies: ["swimming", "dancing"] },
    { name: "melissa", age: 28, height: 163, hobbies: ["swimming", "dancing"] },
    { name: "weining", age: 25, height: 165, hobbies: ["swimming", "dancing"] },
    { name: "pung", age: 33, height: 173, hobbies: ["swimming", "dancing"] },
    { name: "charles", age: 25, height: 179, hobbies: ["swimming", "dancing"] },
    { name: "karmun", age: 28, height: 162, hobbies: ["swimming", "dancing"] },
    { name: "bapak", age: 70, height: 157, hobbies: ["swimming", "dancing"] }
  ]
};

var myProfile = {
  name: "Wee Vian",
  age: 28,
  stateBorn: "Kedah",
  hobbies: "play computer and console games",
  education: educationBackground,
  loves: "msexcel",
  friends: [
    { name: "erin", age: 27, height: 158, hobbies: ["swimming", "dancing"] },
    { name: "melissa", age: 28, height: 163, hobbies: ["swimming", "dancing"] },
    { name: "weining", age: 25, height: 165, hobbies: ["swimming", "dancing"] },
    { name: "pung", age: 33, height: 173, hobbies: ["swimming", "dancing"] },
    { name: "charles", age: 25, height: 179, hobbies: ["swimming", "dancing"] },
    { name: "karmun", age: 28, height: 162, hobbies: ["swimming", "dancing"] },
    { name: "bapak", age: 70, height: 157, hobbies: ["swimming", "dancing"] }
  ]
};

// console.log(
//   `My name is ${myProfile.name}, Im from ${myProfile.stateBorn} and Im ${
// myProfile.age
//   } years old this year.`
// );

// Find the average age of weevian's friends

// console.log(myProfile.friends.length);
// console.log(myProfile.friends[1].age);

function friendsAveAgeCalc() {
  var wvFriends = myProfile.friends;
  var totalAge = 0;
  for (var x = 0; x < wvFriends.length; x++) {
    totalAge = totalAge + wvFriends[x].age;
  }
  var aveAge = totalAge / wvFriends.length;
  console.log(totalAge);
  console.log(aveAge);
}

friendsAveAgeCalc();

function AveCalc(profile, y) {
  var wvFriends = myProfile.friends;
  var total = 0;
  for (var x = 0; x < wvFriends.length; x++) {
    total = total + wvFriends[x][y];
  }
  var Average = total / wvFriends[x][y];
  console.log(total);
  console.log(Average);
}

friendsAveAgeCalc(myProfile.friends, "age");
friendsAveAgeCalc(myProfile.friends, "height");
