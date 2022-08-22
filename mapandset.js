var s='abcadeecfb';
var n=s.length;
var set=new Set();
for(let i=0;i<n;i++){
    set.add(s.charAt(i));
}
console.log(set);


// "Problem:2
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1
const str = "abcadeecfb";
const map1 = new Map();
let count0 = 0;
let len= str.length
for(let i = 0; i < len; i++){
   for(let j = 0; j < len; j++){
        let a = str[i];
        if(a === str[j]){
            count0++;
        }
   }
   if(count0){
    map1.set(str[i],count0);
    count0 = 0;
   }
}
console.log(map1); 