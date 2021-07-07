function foo (x){
    if (x % 3 ===0){
        return true;
    }else{
        return false;
    }
    
}

function boo (){
    console.log("i am boo");

}

// mymodule.js
module.exports = {
    foo ,
       boo:boo
    };
 

