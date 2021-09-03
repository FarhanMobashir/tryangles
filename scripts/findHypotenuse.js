const firstSideInput = document.querySelector("#first-side");
const secondSideInput = document.querySelector("#second-side");
const checkButton = document.querySelector("#check-btn");
const output = document.querySelector("#output");

let firstSide = "";
let secondSide = "";

firstSideInput.addEventListener("change", function (event) {
  firstSide = event.target.value;
});

secondSideInput.addEventListener("change", function (event) {
  secondSide = event.target.value;
});

function calculateHypotenuse() {
  if (firstSide !== "" && secondSide !== "") {
    let firstSideSquare = Math.pow(parseInt(firstSide), 2);
    let secondSideSquare = Math.pow(parseInt(secondSide), 2);
    console.log(firstSideSquare, secondSideSquare);
    let hypotenuse = Math.sqrt(firstSideSquare + secondSideSquare).toFixed(2);
    console.log(hypotenuse);
    output.innerText = "The Hypotenuse is => " + hypotenuse;
    setTimeout(() => {
      output.innerText = "";
      firstSide = "";
      secondSide = "";
      firstSideInput.value = "";
      secondSideInput.value = "";
    }, 3000);
  } else {
    output.innerText = "Please fill both the fields";
    setTimeout(() => {
      output.innerText = "";
    }, 1500);
  }
}

checkButton.addEventListener("click", calculateHypotenuse);
