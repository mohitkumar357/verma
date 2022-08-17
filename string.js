//Count Characters
const countCharacters = (S) => 
{
    let B=[0,0]; 
    
    for(let i=0; i< S.length;i++){
      if(S[i]==="A"){
        B[0]=B[0]+1;
      }
      else if(S[i]==="D"){
        B[1]=B[1]+1;
      }
    }
    return B;
};

// Count the Heads
var Count_Occ = (s) => 

  {
   let count=1;
let string='';
let string1="";
for(let i=0;i<s.length;i++){
for(j=i+1;j<s.length;j++){
if(s[i]==s[j]){
count++;
}
}
if(count>1){
string=s[i];
string1=string1+" "+s[i]+count;
s=s.replace(string,' ');
s=s.split(string).join('');
}
count=1;
}
return string1.split(' ').sort().join(''); 
};

// count vowel

var Count_Vowels= (S) => 
{
    let vowels=0;
    vowels = S.match(/[aeiou]/gi).length;
    return vowels;  
};

// Concatenate the Strings

var Concatenate_Strings = (S1, S2) => 
{
     let string1=S1.concat(S2)
     return string1
};

// find the length
const findLength = (S) => 
{
  let length=S.length; 
  return length;
};

// find the winner
var Game_Winner = (S) => 
{
  let a=0,d=0;
  let n=S.length
  for(let i=0;i<n;i++)
  {
    if(S[i]=='A')
    a++;
    else
    d++;
  }
  if(a>d)
  return 'Aditya';
    
  
  else if(a<d)
  return 'Danish';
  
  else(a=d)
  return 'Draw';
  
};
// join string
const joinStrings = (S, P) => 
{
    let string1=(S.concat(P));
    return string1;
};

// Plaindrome Check
 
var Palin_Check = (str) =>
{
	  const n = str.length;

    for (let i = 0; i < n / 2; i++) {

        if (str[i] !== str[n - 1 - i]) {
            return 'False';
        }
    }
    return 'True';
};

// Reverse the String
var Reverse_String = (str) => 
{
      return str.split("").reverse().join("");
};

// Match the Strings
var String_Match = (S1,S2) => 
{
    if(S1===S2){
      return "YES";
      
    }
    else{
      return "NO"}
};

// String Replace

var Replace = (S, pattern , text) => 
{
      let string1=S.replace(pattern,text);
      return string1
};
// Split the String

var Split_the_string = (S) => 
{
  return S.split(" ")
        
};

//  Count the Vowels and Consonants

var Count_Vowels= (S) => 
{
    let vowels=0;
    vowels = S.match(/[aeiou]/gi).length;
    return vowels;  
};
var Count_Consonants= (S) => 
{
      let consonents=0;
    consonents = S.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    return consonents; 
};

