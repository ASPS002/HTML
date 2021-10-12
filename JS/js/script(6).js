function test(){
    console.log("Hello Coursera!");
    console.log(this);
    this.myname="ujjwal srivastava";
}
test();
console.log(window.myname);

//function constructor
function Circle(radius)
{ 
    this.radius=radius;
    // this.getarea=function(){
    //   return Math.PI*Math.pow(this.radius,2);
    // };
}
Circle.prototype.getarea=//this betters processing as this has not to be created again and again
 function(){
    return Math.PI*Math.pow(this.radius,2);
};
var mycircle=new Circle(10);//new object
console.log(mycircle);
console.log(mycircle.getarea());

var myothercircle=new Circle(20);//new object
console.log(myothercircle);
console.log(myothercircle.getarea());


//object literals and this

var literalcircle={
    radius:10,
    getarea:function(){
        var self=this;
        console.log(this);
        var increaseradius=function(){
           self.radius=20;//this this points to global window object so we make self=this
        }
        increaseradius();
        console.log(this.radius);
        console.log(this);
        return Math.PI*Math.pow(this.radius,2);
    }
};
console.log(literalcircle.getarea());