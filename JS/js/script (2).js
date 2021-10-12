// should be undefined
// var x;
// console.log(x);

// if (x == undefined) {
//   console.log("x is undefined");
// }

// x = 5;
// if (x == undefined) {
//   console.log("x is undefined");
// }
// else {
//   console.log("x has been defined");
// }

// string operation
// var string="Hello"
// string+="World"
// console.log(string + "!");

//mathematical operation
// console.log((5+4)/3);
// console.log(undefined/5);

//equality
// var x="4",y=4;
// if(x==y)
// {
//   console.log("true");//due to typecasting
// }

//strict equality
// var x=4,y=4;
// if(x===y)
// {
//   console.log("true");
// }

// if(false||null||undefined||""||NaN||0)
// {
//   console.log("anyone true")
// }
// else
// {
//   console.log("All false")
// }

// if(true&&"hello"&&1&&-1&&"false")
// {
//   console.log("all true");
// }

// function a(){
//   return{
//     name:"ujjwal srivastava"
//   };
// }
// function b()
// {
//   return//basically js puts semicolon here, thereby it gets returned from here
//   {
//     name:"ujjwal srivastava"
//   };
// }
// console.log(a());
// console.log(b());


var sum=0;
for(var i=0;i<10;i++)sum+=i;
for( i=0;i<10;i++)sum+=i;
console.log(sum)