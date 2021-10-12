//object creation
// var company=new Object();
// company.name="Amazon";
// company.ceo=new Object();
// company.ceo.firstname="Jeff";
// company.ceo.favcolor="Blue";
// console.log(company);
// console.log(company["name"]);
// company["$stock of company"]=175;
// console.log(company);

//better way:object literal

var amazon={
    name:"Amazon",
    ceo:{
        name:"Jeff Bezos",
        favcolor:"blue"

    },
    $stock:110

};
console.log(amazon);