import _ from "lodash";
Console.log(_);

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body1")

color1.addEventListener("input", function(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
})

color2.addEventListener("input", function() {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
});