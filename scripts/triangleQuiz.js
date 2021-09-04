const optionInput = document.querySelectorAll(".radio-button");
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector("#output");
const checkButton = document.querySelector("#btn-check");
// optionInput.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     console.log(event.target.value);
//   });
// });
const correctAnswers = [
  "90 degree",
  "Right Angled",
  "One Right Angle",
  "12,16,20",
  "Equilateral Triangle",
  "100 degree",
  "30 degree",
  "a + b + c",
  "No",
  "45 degree",
];

function calculateScore() {
  const formResults = new FormData(quizForm);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    // console.log(
    //   "form input : ",
    //   index + 1,
    //   value,
    //   "answer :",
    //   correctAnswers[index]
    // );
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // console.log("The score is "+score);
  output.innerText = "The score is " + score;
}

checkButton.addEventListener("click", calculateScore);
