let input  = document.getElementById("input1");
let button = document.getElementById("submit");
let enigmes = document.getElementsByClassName("enigme");
let victory = document.getElementsByClassName("victory");
var display1 = setInterval(setOpacity1, 8000);
var display2 = setInterval(setOpacity2, 12000);
var display3 = setInterval(setOpacity3, 5000);

let numberPuzzle = 1
let answers = ["13 avril 2431", "285,340", "71.81.7"]


input.addEventListener("keyup", function(event){
      if (event.keyCode === 13){
            event.preventDefault();
            button.click();
      }
});



 
function setOpacity1() {
  var x = document.getElementsByClassName("number81")[0];
  if (x.style.opacity == "0"){
        x.style.opacity = "100%";
  }
  else{
        x.style.opacity = "0%";
  }
}

function setOpacity2() {
      var x = document.getElementsByClassName("number71")[0];
      if (x.style.opacity == "0"){
            x.style.opacity = "100%";
      }
      else{
            x.style.opacity = "0%";
      }
    }

    function setOpacity3() {
      var x = document.getElementsByClassName("number7")[0];
      if (x.style.opacity == "0"){
            x.style.opacity = "100%";
      }
      else{
            x.style.opacity = "0%";
      }
    }



button.addEventListener("click", async function(event){
      event.preventDefault();
      let inputValue = input.value;

      if (inputValue == answers[numberPuzzle - 1]){
            
            
            if(numberPuzzle < 3) {
                  enigmes[numberPuzzle].style.opacity= "100%";
            }

            if (numberPuzzle == 3) {
                  console.log(victory);
                  document.getElementsByClassName("victory")[0].style.display = "flex";
                  document.getElementsByClassName("machine")[0].style.opacity = "20%";
            }
            numberPuzzle++;
            input.value = "";
            location.hash = '#enigme' + numberPuzzle;
      }else{
           document.getElementsByClassName("ordi")[0].classList.add("shake");
           await new Promise(resolve => setTimeout(resolve, 1000));
           document.getElementsByClassName("ordi")[0].classList.remove("shake");
      }
});