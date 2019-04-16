// const aboutMe = {
//     name:"Pung",
//     countryOfOrigin: ["Malaysia","Asia","West Malaysia"],
//     height: 180,
//     friends: ["Ming","Charles"]
// }

// const Ming = {
//     name: "Ming yu",
//     age: 25,
//     hobies: ["swimming","reading"]
// }
// const Charles = {
//     name: "charles",
//     age: 29,
//     hobies: ["swimming","reading"]
// }

// console.log(aboutMe.friends[0]


var pungProfile = {
    name: "pung",
    age: 28,
    family:
    [
    { name: "Lanny", age: 5, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Peter", age: 12, height: 100, hobbies: ["swimming", "dancing"] },
    { name: "Lim", age: 12, height: 100, hobbies: ["swimming", "dancing"] }]
}

console.log(pungProfile.family[0].height)
var totalAge =pungProfile.family[0].age + pungProfile.family[1].age + pungProfile.family[2].age
var averageAge = totalAge / pungProfile.family.length

console.log(averageAge)