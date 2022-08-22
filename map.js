// Create a Function
function Check(obj1){
    obj1.setter = function(){
           console.log(this.name);
         };
 }
//  Delete a Parameter
function Check(obj1) {
    if(delete obj1.rollno)
    return true
    else
    return false
    }
    // Check whether the Package is Dream Package or not
    function Check(obj1) {
        if(obj1["salary"]>=500000)
        return "Dream"
        else
        return "NotDream"
      } 
    //   Check whether the Object has a parameter or not
    function Check(obj1) {
        for(var prop in obj1) {
                     if(obj1.hasOwnProperty(prop))
                         return "true";
                 }
             
                 return "false";
       }
    //    Merge the Objects
    function Check(obj1,obj2) {
        let obj3 = Object.assign(obj1,obj2);
                   return obj3;
       }
    //   Object Multiplyer
    function Check(a,obj1) {
        obj1.id = 2* (obj1.id)
        obj1.houseno = 2* (obj1.houseno)
        return obj1
      }
    //   Find the  sum of Object Members
    function Check(obj1) {
        return Object.values(obj1).reduce((a, b) => a + b, 0);
        
       }
    //    Check whether the Objects are same or not.
    function check(obj1,a,b) {
        if(obj1.name==a && obj1.id==b) 
        return true
        else
        return false
      }