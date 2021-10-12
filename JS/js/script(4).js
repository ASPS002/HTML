
function multiply(x,y){
    return x*y;
}
console.log(multiply(5,3));
console.log(multiply);

function makemultiplier(multiplier){
   var myFunc=function(x){
    return multiplier*x;
   };
   return myFunc;
}
var multiplyby3=makemultiplier(3);
console.log(multiplyby3(10));

var doubleall=makemultiplier(2);
console.log(doubleall(100));

//passing function by arguments
function dooperationon(x,operation)
{
    return operation(x);
}
var result=dooperationon(5,multiplyby3);
console.log(result);
result=dooperationon(100,doubleall);
console.log(result);