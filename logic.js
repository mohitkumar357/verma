//Create one function with zero parameter having a console statement;
function zero(){
    console.log("this is a function with zero parameters.");
}
zero();

//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a,b){
    let total=a+b;
    console.log("sum of "+ a +","+b +" is "+ total);
}
sum(3,4);

//Create one arrow function

let multiply=(a,b) => {
    return a*b;
}
console.log(multiply(4,5));

//Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
        //output is "undefined","undefined".

 //"Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
      //output is 21.

//"Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };

    //output:=uncaught referenceError:a is not defined.

//Write a function that accepts parameter n and returns factorial of n.

function factorial(n){
    if(n===0){
        return "1";
    }
    if(n===1){
        return n;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));