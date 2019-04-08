var Charlestestimonial = {
  name: "Charles",
  nationality: "Nigeria",
  originState: "delta state",
  originStateDescription: ["multicultural", "rural area"],
  dreams: "impact country economy",
  affiliation: "parttime student in ADA",
  statisfactionOfClassmate: 1
};

//var myFunnyName = ""
//var my_funny_name = ""
// 1 btye = 8 bits
// 1 kilobtye = 1000 btyes
// 1 megabtye = 1024 kilobytes

// var objectInsideArrayInsideObject = {
//     [
//         {
//    type: "colour",
//    value: "purple"
//},
//         {},
//         {},
//     ]
// }

//make the contents more generic
//suggestion: convert string to number
var Occupation = {
  name: "Karmun",
  company: "M&S",
  workingYear: 5
};

var Favourite = {
  name: "Karmun",
  colour: "turquoise",
  animal: "turtles"
};

var erinProfile = {
  Hobby: "Dancing",
  karmunScoring: 0.5
};

var adaClass = {
  studentCharacteristic: ["happy", "bubbly", "optimistic"],
  studentActivity: ["laugh", "sing song"],
  classmate: erinProfile,
  lecturerScoring: 1
};

var karmunProfile = {
  name: "Karmun",
  occupation: Occupation,
  quote: "I wish I were dead",
  favourite: Favourite,
  study: adaClass,
  maritalStatus: "single",
  bestFriends: [
    { name: "Susan", numberOfBF: 50, skill: ["chatting", "shopping"] },
    { name: "Lucas", numberOfBF: 61, skill: ["Gaming", "spending"] },
    { name: "Mary", numberOfBF: 20, skill: ["Gaming", "spending"] },
    { name: "Fong", numberOfBF: 36, skill: ["Gaming", "spending"] }
  ]
};

//start with 0
//var array: ["0", "1", "2", "3"]
//var array:[
//    {0},
//    {1},
//    {2}
//]

console.log(karmunProfile);
console.log(karmunProfile.study.studentCharacteristic[0]);

//profile.friends = profile['friends'] //string

function calculateAverage(profile, attributes) {
  var erinsFriends = profile.friends;
  var totalAge = 0;
  for (var x = 0; x < profile.friends.length; x++) {
    var totalAge = totalAge + profileFriends[x][attributes];
  }
  var averageAge = totalAge / 3;
  console.log(averageAge);
}

calculateAverage(erinProfile.'age')
