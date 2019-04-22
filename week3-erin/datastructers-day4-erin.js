// const myProfile = {
//     name: "Erin",
//     age : 29,
//     height :156,
//     hobbies: ["design","coding","typing"],
//     friends: [charles,Wevian,pung],
// }

const charles =  {
    name: "Erin",
    age : 100,
    hobbies: ["running"],
    
}


const pung =  {
    name: "Erin",
    age : 34,
    hobbies: ["hiking"],
    
}

const Wevian ={
    name : "Erin",
    age : 28,
    hobbies : ["swimming"]
}

const myProfile = {
    name: "Erin",
    age : 29,
    height :156,
    hobbies: ["design","coding","typing"],
    friends: [charles,Wevian,pung],
}




// console.log (`My name is ${myProfile.name} and my friends name is ${charles.name}`)

function findAverageAge (){
    var totalAge = 0 ;
    for (var x =0; x < myProfile.friends.length; x++){
        var totalAge = totalAge + myProfile.friends[x].age;
    }

    console.log (`The total age off all my friens is ${totalAge} `);
    var averageAge = totalAge /myProfile.friends.length;
    console.log (`The average age is ${averageAge} and my friends name is ${charles.name}`);

    return {
        averageAge,
        totalAge,
    };

}

