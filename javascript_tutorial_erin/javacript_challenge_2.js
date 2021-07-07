
// //chees board #
// var number = 10; 

// var chessboard = "";

// for (var y = 1; y < number; y++) {  
//   for (var x = 1; x < number; x++) {
//     if ((x + y) % 2 == 0)
//      chessboard += " ";
//     else
//     chessboard += "#";
//   }
//   chessboard += "\n";
// }

// console.log(chessboard);



//prime number 

// for (var counter = 0; counter <= 100; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }

//prime number 2

function isPrime(number){
    if (number ==2){
      return true;
    }

    if (number %2 == 0){
      return true;
    }

    for(i =2 ;i <number;i+=2){
        if (number %i == 0){
          return false;
        }

    }

    return true
}

console.log(isPrime(121))


// //chees board #0 
// var number =9; 

// var chessboard = "";

// for (var y = 0; y < number; y++) {  
//   for (var x = 0; x < number; x++) {
//     if ((x + y) % 2 == 0)
//      chessboard += "#";
//     else
//     chessboard += "O";
    
   
//   }
  
//  chessboard += "\n";
// }

// console.log(chessboard);



//chees board #0 
var lines = 10; 
for (i=0; i <lines; i++) {  
  for (j = 0; j <lines; j++) {
    if ((i +j) % 2 == 0)
     process.stdout.write("#")
    else
    process.stdout.write("o")
    
   }
  
  process.stdout.write("\n")
}




