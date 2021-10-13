let input  = document.getElementById("input1");
let button = document.getElementById("submit");
let planks = document.getElementsByClassName("planche");

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
            planks[numberPuzzle].style.display = "block";
            numberPuzzle++;
      }
});