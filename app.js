let input  = document.getElementById("input1");
let button = document.getElementById("submit");
let planks = document.getElementsByClassName("planche");
let victory = document.getElementsByClassName("victory");

let numberPuzzle = 1
let answers = [42, "key", 852]


input.addEventListener("keyup", function(event){
      if (event.keyCode === 13){
            event.preventDefault();
            button.click();
      }
});

button.addEventListener("click", function(event){
      event.preventDefault();
      let inputValue = input.value;
      console.log(inputValue);

      if (inputValue == answers[numberPuzzle - 1]){
            
            
            if(numberPuzzle < 3) {
                  planks[numberPuzzle].style.opacity= "100%";
            }

            if (numberPuzzle == 3) {
                  console.log(victory);
                  document.getElementsByClassName("victory")[0].style.opacity = "100%";
            }
            numberPuzzle++;
      }
});