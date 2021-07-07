// var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
// console.log(str.charCodeAt(str.length - 1));

// var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var n = str.charCodeAt(str.length-13);

// var res = String.fromCharCode(n);
// console.log (res)

// function rot13(phara){
//     var answer = "";
//     for (i = 0; i< phara.length; i++){
        
//       var number = phara.charCodeAt(i)+13
//       if (number>90){
//           answer += String.fromCharCode((number%91)+65)
//       }
//       else{
//         answer += String.fromCharCode(number)
//       }
//     }
//     return answer;
  
//   }
  
//   console.log(rot13("SERR PBQR PNZC"))


function rot13(phara){
    var answer = "";
    for (i = 0; i< phara.length; i++){
      if(phara.charCodeAt(i)>= 65 && phara.charCodeAt(i)<=90){
      var number = phara.charCodeAt(i)+13
      if(number>90){
        answer += String.fromCharCode((number%91)+65)
     }
      else{
      answer += String.fromCharCode(number)
    }
      }
      else{
          answer += phara.charAt(i)
      }
    }
    console.log(answer);
    return answer;
   
  
  }
  
  rot13("SERR PBQR PNZC");