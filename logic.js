//Socks Draws
const sockDraws = (n) => {
    return n+1
    
 };
 //Square Fit
 const squareFit = (m,n) => {
    if (m%2 ===0||n%2===0){
      return (m*n)/2;
    } 
    else{
      return(m*n-1)/2;
    }
 };
 
 
// Age calculation
const ageCalculation = (f,s) => {
    return Math.abs(f-2*s) ;
 };
 
// Atom Combine
const atomCombine = (s) => {
    return (2**s)-1;
 };
 //Discount Value
 const discountValue = (p,d) => {
    let discount =(p*d)/100;
    let price = (p-discount);
    return price;
 };
// Range Victory
const LargestNumber = (l,r) => 
{
    if (l==r){
      return l;
    }
    else{
      return 1;
    }
};

//Divisibility Test
const DivTest = (n) => 
{
   if(n%10 ===0){
     return 0;
   } 
   else if ((n*2)%10===0)
   {
     return 1;
   }
   else{
     return -1;
   }
};
//Building Up Ten
const BuildTen = (A,B) => {
    if(A==10||B==10||A+B==10) {
      return true;
    }
    else{
      return false;
    }
 };
// Play with Boolean
const ChangeBool = (A) => 
{
   if(A=="true"||A==1){
     return "0";
   } 
   else{
     return "1";
   }
};
//Checking Range
const CheckRange = (A,B,C) => 
{
   if (Number.isInteger(A)&& (A>B && A<c)||(A>C && A<B) );
   {
     return true;
   }
   else{
     return false;
   }
};
//Pattern Puzzle
const CompletePattern = (N) => 
{
    for(let r=0;r<=N;r++)
    {
      let r1="";
      for(let c =0;c<r;c++)
      {
        r1+="x";
      }
      console.log(r1);
    }
};

//Pattern Puzzle 1

const CompletePattern = (N) => 
{
    
    for(let r=0;r<=N;r++)
    {
      let r1="";
      for(let c =0;c<r;c++)
      {
        r1+=r+" ";
      }
      console.log(r1);
    }
};
//Pattern Puzzle 3
const CompletePattern = (N) => 
{
    
    for(let r=0;r<=N;r++)
    {
      let r1="";
      for(let c =0;c<r;c++)
      {
        r1+=r+" ";
      }
      console.log(r1);
    }
//Pattern Puzzle 2
const CompletePattern = (N) => 
{
    for(let i=1;i<=N;i++)
    {
      let space=" ";
      for(let j=0;j<N-i;j++)
      {
        space+="?"
      }
      for(let j1=0;j1<2*i-1;j++)
      {
        space+="x"
      }
      for(let j2=0;j2<N-i;j2++)
      {
        space+="?"
      }
      console.log(space);
    }
};
//Armstrong Number.
const CheckArm = (N) => 
{
    let sum=0;
    let t=N;
    while(N!==0)
    {
      let num=N%10;
      N=parseInt(N/10);
      sum+=Math.pow(num,3)
    }
    if(sum ==t)
    {
      return 'Yes';
    }
    else{
      return 'No';
    }
};
//Unique Array

const UniqueElements = (N,arr) => 
{
    let res =[]
    for(let i=0;i<N;i++)
    {
      for(var j=0;j<N;j++)
      if(arr[i]==arr[j])
      break;
      if(i==j)
      res.push(arr[i]);
    }
    console.log(res.join(' '));
};

//Find Duplicates
const DuplicateElements = (N,arr) => 
{
    for(let i=0 ; i<N; i++)
    {
      for(let j=i+1;j<N;j++)
      {
        if(arr[i]==arr[j])
        {
          console.log(arr[i]);
        }
      }
    }
};
