console.log("working");


let element1 = document.getElementById("text");
console.log(element1);


let element2 = document.getElementsByTagName("h1");
console.log(element2[0]);

let element3 = document.getElementsByClassName("box");
console.log(element3[0]);

function changeText(){
    let element4 = document.getElementsByTagName("h1");
    element4[1].innerText = "Hello World"
    console.log(element4[1]);
}

function changeDirection() {
    let dummy = document.getElementsByClassName("flex-container");
    dummy[0].style.flexDirection = "column";
    dummy[0].style.alignItems = "center";
    console.log(dummy[0]);   
}

function changeColor(){
    let element4 = document.getElementById("trial");
    element4.style.color = "red";
    element4.id = "heading";
    console.log(element4);
}

function replaceText(){
    let element5 = document.getElementsByTagName("p");
    element5[0].innerText = "Welcome to Elevation academy";
    element5[0].style.color = "green"
    console.log(element5[0]);
}