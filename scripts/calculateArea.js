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

function calculateArea(a, b, c) {
  let semiPerimeter = (a + b + c) / 2;
  let temp =
    semiPerimeter *
    (semiPerimeter - a) *
    (semiPerimeter - b) *
    (semiPerimeter - c);
  //   console.log(semiPerimeter, temp);
  let areaOfTriangle = Math.sqrt(temp);

  return areaOfTriangle;
}

function checkButtonHandler() {
  if (firstSide !== "" && secondSide !== "" && thirdSide !== "") {
    let area = calculateArea(
      parseInt(firstSide),
      parseInt(secondSide),
      parseInt(thirdSide)
    );
    output.innerText = "The area of triangle is " + area.toFixed(2);
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
    output.innerText = "Please fill all the fields";
    setTimeout(() => {
      output.innerText = "";
    }, 1500);
  }
}

checkButton.addEventListener("click", checkButtonHandler);
