// var message="in global";
// console.log("global:message =" + message);

// var a =function()
// {
//     var message="inside a";
//     console.log("a:message =" + message);
//     function b(){
//         console.log("b:message ="+message)
//      }
//     b();
   
// }
// // function b(){
// //    console.log("b:message ="+message)
// // }
// a();

// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);





