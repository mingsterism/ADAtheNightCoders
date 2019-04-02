//Loops
//
//code block

// print the even number between 1 to 100

//Loops Erin even
// var i = 0
// for (i = 0; i < 1000; i++) {
//     if ((i % 2) !== 0)
//         console.log(i)
// }

// // count the number of even numbers between 1 to 10 ---1
// var evenCounter = 0;

// for (x = 0; x < 10; x++) {
//     //print only the even number
//     if (x % 2 == 0) {
//         evenCounter = evenCounter + 1
//     }
// }

// console.log(evenCounter);

// // count the number of even numbers between 1 to 10 --2
// var evenCounter = 0;
// var round = 1
// var totalRound = 10
// for (round; round < totalRound; round++) {
//     //print only the even number
//     if (round % 2 == 0) {
//         console.log("there was an even number.Add 1 to the counter");
//         evenCounter = evenCounter + 1
//     }
// }

// console.log("there was", evenCounter, "even values");


// count the number of odd and even numbers between 1 to 100 ---3 
// var oddCounter = 0
// var evenCounter = 0
// var primeCounter = 0
// var number = 0
// var finalnumber = 10


// for (number; number < finalnumber; number++) {
//     if (number % 2 == 0) {
//         console.log(number, "******", "even")
//         evenCounter = evenCounter + 1
//     } else if (number % 3 == 0 || number % 5 == 0) {
//         console.log(number, "++++++", "odd")
//         oddCounter++

//     } else {
//         console.log(number, "-------", "prime")
//         primeCounter++
//     }
// }

// console.log("there was", oddCounter, "odd values");
// console.log("there was", evenCounter, "even values");
// console.log("there was", primeCounter, "prime values");

// sum all the even number  1 and 1000
function sum_even_numbers(arg1, arg2) {
    if (arg1 + arg2 == 0) {
        return true;
    }
    return false;
}

function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }

}

function isOdd(x) {
    if (x % 3 == 0 || x % 5 == 0) {
        return true;
    } else {
        return false;
    }

}

function isEvenOrOdd(oddCounter, evenCounter,primeCounter,rounds){
    for (var number = 0; number < rounds; number++){
        if (number % 2 ==0){
            evenCounter = evenCounter +1;
            return evenCounter;
        }else if ( number % 3 == 0 || number % 5 == 0){
            oddCounter++;
        }
    }
} 

function isEvenOrOdd(rounds){
    var sumEven = 0;
    var sumOdd = 0;
    for (var x = 0; x < rounds; x++){
        if (isEven(x)){
            sumEven = sumEven + 1;

        }else if (isOdd(x)){
            sumOdd = sumOdd +1;
        }
    }

    return ' the number of even $(sumEven) and number of odd is $(sumOdd)'
}

console.log (isEvenOrOdd(100))

//find the total count of even numbers between any 2 number .EG: function  sum(X,Y)
// where x < y
// eg sumEvent (1,10)>> Ans is 4
// eg sumEvent (2,248) >> Ans is
function isEvenOrOdd(x,rounds){
    var sumEven = 0;
    var sumOdd = 0;
    for (x ; x < rounds; x++){
        if (isEven(x)){
            sumEven = sumEven + 1;

        }if (isOdd(x)){
            sumOdd = sumOdd +1;
        }
    }

    return `the number of even ${sumEven} and number of odd is ${sumOdd}`
}

console.log (isEvenOrOdd(2,100))



// count the number of odd and even numbers between 1 and 100 using
// only functions above

// sum the number of even numbers between any 2 numbers

// sum the number of all the odd numbers between any 2 numbers

// find the total of all sum of even numbers minus sum of
// all odd numbers between 1 and 1000

// find the total of all sum of even numbers minus sum of
// all odd numbers between any 2 values

// convert all of them to functions

// while loops

// datastructures
// arrays
