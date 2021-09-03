const firstSideInput = document.querySelector("#first-side");
const secondSideInput = document.querySelector("#second-side");
const thirdSideInput = document.querySelector("#third-side");

const checkButton = document.querySelector("#check-btn");
const output = document.querySelector("#output");

let firstSide = "";
let secondSide = "";
let thirdSide = "";

firstSideInput.addEventListener("change", function (event) {
  firstSide = event.target.value;
});

secondSideInput.addEventListener("change", function (event) {
  secondSide = event.target.value;
});

thirdSideInput.addEventListener("change", function (event) {
  thirdSide = event.target.value;
});

function isTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  else return true;
}

function checkButtonHandler() {
  if (firstSide !== "" && secondSide !== "" && thirdSide !== "") {
    if (
      isTriangle(parseInt(firstSide), parseInt(secondSide), parseInt(thirdSide))
    ) {
      output.innerText = "The triangle is a valid triangle";
      setTimeout(() => {
        output.innerText = "";
        firstSide = "";
        secondSide = "";
        thirdSide = "";
        firstSideInput.value = "";
        secondSideInput.value = "";
        thirdSideInput.value = "";
      }, 3000);
    } else {
      output.innerText = "Sorry the sides does'nt make a triangle";
      setTimeout(() => {
        output.innerText = "";
        firstSide = "";
        secondSide = "";
        thirdSide = "";
        firstSideInput.value = "";
        secondSideInput.value = "";
        thirdSideInput.value = "";
      }, 3000);
    }
  } else {
    output.innerText = "Please fill all the fields";
    setTimeout(() => {
      output.innerText = "";
    }, 1500);
  }
}

checkButton.addEventListener("click", checkButtonHandler);
