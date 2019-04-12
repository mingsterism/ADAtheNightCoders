// My name is Karumun. Ive been working in MNS for 5 years.
// I wish I was dead. My favourite color is turquoise. My favourite
// animal is turtles.
// This class is filed with happy bubbly optimistic people that love to laugh
// and sing song.
// One of the students erin she always like to dance around the bush because
// she seems to be having a good time. but i cant seem to think what is her real deal.
// She always does it that i feel annoyed. But i cant tell people this because
// this is my secret thoughts. But i still like everyone. Sort of. Also this
// instructor is too good. I need to engage him more for my company. Hmm, not too sure
// have to see how it goes. Ok time to sleep. I sleep early for bed everyday because my boyfriend
// tells me to.

// var erinProfile = {
//   name: "Erin",
//   hobbies: ["dancing", "dreamy"],
//   essentricLevel: 0.8
// };

// var mingProfile = {
//   name: "Ming",
//   skills: ["teaching", "typing"],
//   coolLevel: 0.99
// };

// var karmunBoyfriendProfile = {
//   name: "KarMunBF",
//   characteristic: ["loving", "caring"]
// };

// var karmunFavourites = {
//   favouriteAnimalType: "reptiles",
//   favouriteColor: "turquoise",
//   hobbies: ["sing", "laugh"]
// };

// var karmunTestimonial = {
//   name: "Karmun",
//   workingExperienceInYears: 5,
//   expertise: "fashion",
//   favourite: karmunFavourites,
//   characteristics: ["pessimictic", "introvert", "observant", "shy"],
//   greatestFear: erinProfile,
//   favouriteLecturer: mingProfile,
//   partner: karmunBoyfriendProfile,
//   relationshipStatus: "In A Relationship",
//   relationshipIdentity: "submissive",
//   passionateLevelForHumans: 0.7
// };

// var Friendss = [
//   { name: "Karmun1", company: "MNS" },
//   { name: " Weevian2", company: "MoneyChanger" },
//   { name: "WeiNing3", company: "MoneyChanger" },
//   { name: "Charles4", company: "ADA" },
//   { name: "Pung5", company: "TBA" }
// ];

// var melProfile = {
//   name: "Melissa",
//   age: 27,
//   friends: Friendss
// };

// console.log(melProfile.friends);

var melissaProfile = {
  namee: "Melissa",
  age: 27,
  height: 155,
  hobbies: ["tv", "laptop"],
  family: [
    { name: "Jimmy", age: 56, height: 165, hobbies: ["badminton", "tv"] },
    {
      name: "Jacqueline",
      age: 56,
      height: 165,
      hobbies: ["cooking", "reading"]
    },
    {
      name: "Jeremy",
      age: 31,
      height: 171,
      hobbies: ["running", "programming"]
    },
    { name: "Ben", age: 28, height: 170, hobbies: ["drinking", "gym"] },
    { name: "Aaron", age: 17, height: 175, hobbies: ["drinking", "pc"] }
  ]
};

var louisProfile = {
  name: "Louis",
  age: 30,
  height: 179,
  hobbies: ["phone", "yoga"],
  family: [
    { name: "Dato", age: 65, height: 172, hobbies: ["cooking", "buying"] },
    { name: "Datin", age: 67, height: 160, hobbies: ["cooking", "feeding"] },
    { name: "Preston", age: 32, height: 183, hobbies: ["baking", "shopping"] },
    { name: "Ashton", age: 25, height: 170, hobbies: ["studying", "gaming"] },
    { name: "Ultron", age: 17, height: 175, hobbies: ["drinking", "looking"] }
  ]
};

function calculateAverage(x, y) {
  var x = x.family;
  var total = 0;
  for (var i = 0; i < x.length; i++) {
    total = total + x[i][y];
  }
  {
    var average = total / x.length;
    console.log(average);
  }
}

calculateAverage(melissaProfile, "age");
calculateAverage(melissaProfile, "height");
calculateAverage(louisProfile, "age");
calculateAverage(louisProfile, "height");

// console.log(melissaProfile.family[1]);
// console.log(melissaProfile.family[1].hobbies[1]);
// console.log("My name is", melissaProfile.namee);
// console.log("My age is", melissaProfile.age);
// console.log("My height is", melissaProfile.height);
// console.log("My mothers name is", melissaProfile.family[1].name);
// console.log(
//   melissaProfile.family[4].name,
//   "is always",
//   melissaProfile.family[4].hobbies[0],
//   "with",
//   melissaProfile.family[3].name

var ming = { name: "ming", age: 10 };
var charles = { name: "charles", age: 14 };

var myProfile = { name: "Melissa", friends: [ming, charles] };

console.log(myProfile.friends[0].age);
