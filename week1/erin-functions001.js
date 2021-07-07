// function cat(name) {
//   console.log("calling cat .....");
//   console.log("My cat's name is", name);
// }


function foo(z){
    console.log("calling foo ****",z);
    z = z + 1;
    return z;
}

function boo (y){
    y = y + 1;
    console.log("calling boo ----",y);
    foo (y);
    
}
 var counter = 0;
 boo(counter);




function roo( a, b, z,q){
    var sum = b + a + z + q;
    return sum;
}

console.log(roo(1,2,3,4));