//Write the code to access element having id as "text"
const text=document.getElementById("text");
text.innerText="Hello changed";



//Write the code to access element having tag as "h1"
const text1=document.getElementsByTagName("h3");
text1[0].innerText="hello again children";

//Write the code to access element which is having code as "box"
const box=document.getElementsByClassName("box");
box[0].innerText="box again";

//change the heading from "hello" to "hello world" using DOM functions

const heading=document.getElementById("hello");
  hello.addEventListener('mouseenter',function(){
  hello.innerText="Hello World";
})

//Create three cards on html page and arrange them using flex property in row or horizontal direction and also create button at the botton
//named "change flex direction".when user clicks on this button ,the cards arrangement should be changed to vertical direction.

const btn=document.getElementById('btn');
const cards=document.getElementsByClassName('cards');
const card=document.getElementsByClassName('card');
btn.addEventListener('click',function(){
  cards[0].style.flexDirection="column";
  btn.style.border="2px solid red";
  btn.style.backgroundColor="aqua";
  btn.innerText="changed";
  console.log(cards);
})

//What is the difference between window vs document?

//1.Document represents any HTML document or web page that is loaded in the browser while window represents a frame that displays the contents of the web page.
//2.Document is loaded inside the window while window is loaded in the browser.
//3.document is object of window property while window is object if the browser.

//Add one style attribute in h1 and change text color as red and id attribute and give the id value as "heading" in the fiven h1 tag using DOM functions.

const head=document.getElementsByTagName('h1');
head[0].style.color="red";
head[0].setAttribute("id","heading");
console.log(document.getElementById('heading').id);

//create a html page having content as hello world and a button named replace text.when user clicks on button ,content should be changed to 
//"Welcome to Elevation Academy"

const elem=document.getElementById('elevation');
const ele=document.getElementById('btn-1');

ele.addEventListener('click',function(){
  elem.innerText="Welcome to Elevation Academy";
  ele.innerText="content changed";
})

//Write a code to implement timer clock using JS--display HH:MM:SS--the time should keep updating every second

function clock(){
  let date=new Date();
  let hrs=date.getHours();
  let mins=date.getMinutes();
  let secs=date.getSeconds();
  let period="AM";

  if(hrs==0){
      hrs=12;
  }
  else if(hrs>12){
      hrs=hrs-12;
      period="PM";
  }
  hrs=hrs<10?`0${hrs}` : hrs;
  mins=mins<10?`0${mins}`:mins;
  secs=secs<10?`0${secs}`:secs;

  let time=`${hrs}:${mins}:${secs}${period}`;
  setInterval(clock,1000);
  document.getElementById("clock").innerText=time;
}

clock();

//create a dropdown for selecting time in morning like 2PM-3PM,3PM-4PM.print the item text selected.

let morning=document.getElementById('morning');
let morningText=morning.options[morning.selectedIndex].text;
let output=document.getElementById('output');
output.innerText=morningText;


//Create a form having name,email,phone no,birth year.
//add validations-phone no should start with 91,it should be 10 digits
//email should be domain prepbytes.com
//birth year should be>95

function formDetails(){

  var form=document.createElement("form");
  var full_name=document.createElement("input");
  document.write('<br>');
  full_name.setAttribute("type","text");
  full_name.setAttribute("name","full_name");
  full_name.setAttribute("placeholder","fullname");
  document.write('<br>');
  document.write('<br>');


  var email=document.createElement("input");
  document.write('<br>');
  email.setAttribute("type","email");
  email.setAttribute("name","email");
  email.setAttribute("placeholder","email@prepbytes.com");
  document.write('<br>');
  document.write('<br>');
  
   var phoneno=document.createElement("input");
  document.write('<br>');
  phoneno.setAttribute("type","text");
  phoneno.setAttribute("name","phoneno");
  phoneno.setAttribute("placeholder","+91 - ");
  phoneno.setAttribute("maxlength","10");
  document.write('<br>');
  document.write('<br>');

  var year=document.createElement("input");
  document.write('<br>');
  year.setAttribute("type","date");
  year.setAttribute("name","year");
  year.setAttribute("placeholder","DD/MM/YYYY");
  year.setAttribute("min","1995-01-01");
  document.write('<br>');
  document.write('<br>');

  var submit=document.createElement("input");
  submit.setAttribute("type","submit");
 
  form.appendChild(full_name);
  document.write('<br>');

  form.appendChild(email);
  document.write('<br>');

  form.appendChild(phoneno);
  document.write('<br>');

  form.appendChild(year);
  document.write('<br>');
  
  form.appendChild(submit);
  document.write('<br>');

  document.getElementsByClassName("form")[0].appendChild(form);
  
}
formDetails();