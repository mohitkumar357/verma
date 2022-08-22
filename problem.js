// Find the Smaller Angle
var Minimal_Angle = (h, m) => 
{
  let hour_angle = 0.5 * (h * 60 + m);
            let minute_angle = 6 * m;
            let angle = Math.abs(hour_angle - minute_angle);
             let angle1 = Math.min(360 - angle, angle);
            return angle1;       
};
// Check whether the year is Leap year or not.

var Check_Leap = (year) => 
{
 
 return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? "Leap Year" : "Non Leap Year"

};
// Perfect Number Check.
var Perfect_Check = (N) => 
{
  let count=0
  for(let i=1;i<=N/2;i++)
  {
    if(N%i==0)
    count+=i
  }
  
  if(count==N && Count<N)
  return "YES"
  else
  return "NO"
        
};
// Reverse a Number.
var Reverse_Number = (N) => 
{
  
let res = 0;
      let last;
      while(N!==0){
        last = N % 10;
        res = res * 10 + last;
        N = Math.floor(N/10);
      }
    return res;
};
// Substring Check.
var Substring_Check = (S1, S2) => 
{
   if(S1.includes(S2)){
        return "YES";
      }else{
        return "NO";
      }     
};
