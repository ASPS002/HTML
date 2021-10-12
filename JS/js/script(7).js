var array=new Array();
array[0]="ujjwal srivastava";
array[1]=2;
array[2]=function(name){
 
    console.log("Hello "+name);
};
array[3]={course:"HTML,CSS,JAVASCRIPT"};
console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);


var arr=["dd","ddff","ddffgg"];
arr[100]="kk";
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


var obj={

    name:"ujjwal",
    course:"html,css,js",
    platform:"coursera",
};
for(var prop in obj)
{
    console.log(prop +":"+ obj[prop]);
}
for(var prop in arr)
{
    console.log(prop +":"+ arr[prop]);
}