var a=7;
var b=a;
console.log("a:"+a);
console.log("b:"+b);

b=5;
console.log("a after update:"+a);
console.log("b after update:"+b);

var a={x:7};
var b=a;
console.log(a);
console.log(b);

b.x=5;
console.log(a);
console.log(b);

//pass by reference vs pass by value

function changeprimitive(pv){
  
    console.log(pv);
    pv=5;
    console.log(pv);
}
var value=7;
changeprimitive(value);
console.log(value);


function changeobject(pv){
  
    console.log(pv);
    pv.x=5;
    console.log(pv);
}
var value={x:7};
changeobject(value);
console.log(value);