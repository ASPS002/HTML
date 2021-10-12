function makemultiplier(multiplier)
{ 
    function b(){
            console.log("multiplier is:" +multiplier);
    }
    b();
   return(
       function(x){
           return multiplier*x;
       }
   );
}
var dassll=makemultiplier(10);
console.log(dassll(2));