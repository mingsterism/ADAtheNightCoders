// Objects
var me = {
  name: "Ming",
  age: 10,
  height: 100,
  hobbies: ["swimming", "hiking", "dancing"],
  friends: "amy"
};

// Arrays

// Data Structure
/**
 * Explaination of Data Structures. 
 * You have a piece of human data below
 human data
 my name is Pung. I like doing sports. I have experience in selling diapers.
 Diapers is all i think about. I love the smell, i love it's texture and i love everything about diapers.
 I am hardworking and can do this job very well. * 
  * you want to parse it to computer data. 
  * you can do it using 2 data structures, JSON (javascript object notation and arrays)
  * Determinting the type of data structure to use is in the field of data modelling. 
 */

var hobbies = ["swimming", "dancing", "laughing", [12, 3, 4, 5]];
var friends = [{ name: "hello" }, { name: "hello" }];

var pungProfile = {
  name: "Pung",
  hobby: "sports ",
  strength: "selling diapers ",
  weirdHabbits: ["smelling ", "touching texture "],
  character: "hardworking",
  passionLevel: 0.8,
  hisHobbies: hobbies
};

// var object = {}
// var array = []
// var nestedArrays = [ [], [], [] ]
// var nestedObjects = {
//     {}, {}, {}
// }
var charlesTestimonial = `
My name is Charles. Im a resident of nigeria, from a small city of 
delta state.
It is a multicultral city which is less populated because it is a rural area. 
my dreams is after my study i really want to go back to my 
country to impact my country economy by what you studied in Malaysia. 
I'm a part time student of ADA and I 
lvoe all the poeple here
they are really awesome. Love it. 100%
`;
var deltaState = {
  country: "Nigeria",
  cityName: "deltaState",
  populationDensity: 0.5,
  ethcinityDivercityRatio: 0.5
};

var charlesProfile = {
  name: "Charles",
  countryOfOrigin: "Nigeria",
  stateOfOrigin: deltaState,
  currentCountry: "Malaysia",
  dream: ["improve economic homeland", "be a businessman"],
  character: "lovable Person"
};

var erinProfile = {};
var melissaProfile = {
  name: "Melissa",
  address: "Mars",
  hobby: ["swimming", "dancing", "hiking"]
};

var charlesADATestimonial = {
  profile: charlesProfile,
  codingPassionRatio: 0.8,
  adaStudentsRating: 0.9,
  // bestStudents = [erinProfile, melissaProfile,],
  bestStudents: [melissaProfile]
};

var karmunADATestimonial = {
  bestStudents: [melissaProfile]
};

//  PARSING UNSTRUCTURED DATA INTO STRUCUTRED DATA
/**
 * You are working for Miracles Inc whereby God has asked you to parse the thoughts of millions of
 * humans into a machine readable format that they can input into Miracle Inc's data parsing machine
 * so God can analyze the trends of humanity's thoughts. You have to take into account what god wants
 * which is trends, analysis and timelines of the data. So the data structure you come up with
 * needs to be able to be analyzed and disected whilst still maintaining the information that God needs
 * to make the best informtion on how to help humanity.
 **/

// Rants of an individual named Karmun
/**
 * My name is Karumun. Ive been working in MNS for 5 years.
 * I wish I was dead. My favourite color is turquoise. My favourite
 * animal is turtles.
 * This class is filed with happy bubbly optimistic people that love to laugh
 * and sing song.
 * One of the students erin she always like to dance around the bush because
 * she seems to be having a good time. but i cant seem to think what is her real deal.
 * She always does it that i feel annoyed. But i cant tell people this because
 * this is my secret thoughts. But i still like everyone. Sort of. Also this
 * instructor is too good. I need to engage him more for my company. Hmm, not too sure
 * have to see how it goes. Ok time to sleep. I sleep early for bed everyday because my boyfriend
 * tells me to.
 */

var karmunProfile = {
  name: "Karmun",
  occupationPlace: "MNS",
  workingYears: 5,
  characteristics: [
    "with happy bubbly optimistic people that love to laugh",
    " sing song"
  ],
  favorite: ["color is turquoise", "animal is turtles"],
  favourites: [
    {
      type: "color",
      value: "turquoise"
    },
    {
      type: "animal",
      value: "turtles"
    }
  ],
  favouriteAnimals: ["turtles"],
  favouriteColor: ["red"]
};

var name = "john";
// console.log("my age is ", age);
var age = 10;

/**
 * Learning how to access data
 */

var weiningProfile = {
  name: "Erin",
  age: 10,
  height: 100,
  hobbies: ["swimming", "dancing"]
};

var erinProfile = {
  name: "Erin",
  age: 10,
  height: 100,
  hobbies: ["swimming", "dancing"],
  favouriteFriend: [weiningProfile],
  friends: [
    { name: "Lanny", age: 12, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Bunny", age: 100, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 999999, height: 100, hobbies: ["swimming", "dancing"] }
  ]
};
var pangProfile = {
  name: "Erin",
  age: 10,
  height: 100,
  hobbies: ["swimming", "dancing"],
  favouriteFriend: [weiningProfile],
  friends: [
    { name: "Lanny", age: 12, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Bunny", age: 100, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 9, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Rani", age: 999999, height: 100, hobbies: ["swimming", "dancing"] }
  ]
};

// console.log(erinProfile);
console.log(erinProfile.name);
// console.log(erinProfile.'name');  // WRONG !!!
console.log(erinProfile["name"]);
// console.log(erinProfile.hobbies[1]);
// console.log("=================");
// // console.log(erinProfile.friend[0]);
// console.log(erinProfile.friends[2].hobbies[1]);
// console.log("=================");

// var arr1 = [1, 2, 3, 4, 5, 6];
// console.log(arr1[0], "...............");
// console.log(arr1[5], "---------------");

function calculateAverage(profile, attributes) {
  var profileFriends = profile.friends;
  var totalAge = 0;
  for (var x = 0; x < profileFriends.length; x++) {
    var totalAge = totalAge + profileFriends[x][attributes];
  }
  var averageAge = totalAge / 3;
  console.log(averageAge);
}

calculateAverage(erinProfile, "height");
calculateAverage(pangProfile, "age");



