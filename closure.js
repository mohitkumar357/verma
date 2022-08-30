//    question number1
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// question number 2

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();


//question number 3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); 
    }, 1000);
  }

//  question number 4.

var a = 12;
(function () {
  alert(a);
})();

// question number 5.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

// question number 6.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';

    (function innerFunc(innerArg) {
    var innerVar = 'b';

    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);

    })(456);
})(123);





//question number 8

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); 
  }, 1000);
} 