//ticket validtor

var age = 23;
var price= 100;
var finalPrice =price;
if (age < 18){
    price = price*0.5;
    
}else if (age <40){
    finalPrice = price;
    

}else if ( age <65){
    price = price *0.75;
  

}else{
    finalprice = price /2;

}
console.log("The price is "+finalPrice)

//multiplication table
var table =3;
var line = 12;
for (i = 0; i <= 10; i++){
    console.log(i + "x" +table+ "=" +i*table)
}

//For loop
//String concentenation (+)
//#
var hash = "#";
for ( i = 0; i <=5 ; i++){
    console.log(hash);
    hash = hash +"#";
    
}

for (i=4; i > 0; i--){
   for(j =0; j <i; j++){
       process.stdout.write("#")
   }

   process.stdout.write("\n")


}

//Fizz Buzz
for (i =1; i <=100 ; i++){
    if (i%15==0){
        console.log ("FizzBuzz");
    }

//Check divisible  by 5
//Check divisible by 5

    else if( i % 3 ==0){
        console.log("Fizz");
    }
    
    else if ( i %3 == 5){
        console.log("Buzz")

    }

    else{
        console.log(i);
    }
  
   

   

}



