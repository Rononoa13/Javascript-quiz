const game = document.querySelector("#game");
const form = document.querySelector(".quiz-options");
// console.log(form)

let questionIndex = 0;
let score = 0;
let availableQuestions = [];
let currentQuestion = {};
let questionCounter = 0;

let quiz = [
  {
    question: "The tallest building in the world is located in which city?",
    option: ["Bhutan", "Nepal (Dharahara)", "None", "Burj Khalifa"],
    ans: 4,
  },
  {
    question: "Name the longest river in the UK.",
    option: ["River Karnali", "BhoteKoshi", "River Severn", "None"],
    ans: 3,
  },
  {
    question: "What is the capital city of Nepal?",
    option: ["China", "Russia", "USA", "Kathmandu"],
    ans: 4,
  },
  {
    question: "How many hearts does an octopus have?",
    option: ["1", "2", "3", "4"],
    ans: 3,
  },
  {
    question: "A screwdriver cocktail is orange juice, ice and which spirit?",
    option: ["Vodka", "Rum", "Whisky", "Gin"],
    ans: 1,
  },
];

availableQuestions = [...quiz];

renderQuestion = () => {
  questionCounter++;
  // Redirect to end page after end of question.
  if (questionCounter > availableQuestions.length) {
    window.location.replace("./end.html");
  }
  //
  for (let i = 0; i < availableQuestions.length; i++) {
    // console.log(questionCounter);
    currentQuestion = availableQuestions[questionIndex];
    // console.log(currentQuestion.question)
    game.innerHTML =
      "<h3>" +
      "Q" +
      `${questionIndex + 1}.` +
      "  " +
      `${currentQuestion.question}` +
      "</h3>";
    // for (let i = 0; i < availableQuestions.length; i++) {
    form.innerHTML = `
            <li class="options">
              <input type="radio" name="answer" id="myRadio" value="1" data-number="1"/>${currentQuestion.option[0]}
            </li>
            <li class="options">
              <input type="radio" name="answer" id="myRadio" value="2" data-number="2"/>${currentQuestion.option[1]}
            </li>
            <li class="options">
              <input type="radio" name="answer" id="myRadio" value="3" data-number="3"/>${currentQuestion.option[2]}
            </li>
            <li class="options">
              <input type="radio" name="answer" id="myRadio" value="4" data-number="4"/>${currentQuestion.option[3]}
            </li>
          `;
  }
  checkRadioButton();
};
renderQuestion();

var userAnswer = [];
// Disable Next button if no radio button is selected.
function checkRadioButton() {
  let selectedRadio = document.getElementsByTagName("input");

  for (let i = 0; i < selectedRadio.length; i++) {
    if (selectedRadio[i].checked == false) {
      document.getElementById("next").disabled = true;
    }
    selectedRadio[i].onclick = function () {
      if (selectedRadio[i].checked == true) {
        //enable Next button if radio button is checked.
        document.getElementById("next").disabled = false;
        userAnswer = selectedRadio[i].value;
      }
      selectedRadio[i].checked == false;
    };
  }
  return userAnswer;
}

//Correct Answer from object quiz
// let correctAnswers = [];
// for (let i = 0; i < availableQuestions.length; i++) {
//   correctAnswers.push(availableQuestions[i].ans);
// }
// console.log(correctAnswers);

// Changes questions on clicking next button
next = () => {
  let currentAnswer = availableQuestions[questionIndex];
  if (Number(userAnswer) == currentAnswer.ans) {
    score++;
    localStorage.setItem("RecentScore", score);
  }

  questionIndex++;
  renderQuestion();
};
// FUnction gets the input value.
// checkForAnswers = () => {
//   let checkedRadio = document.getElementsByName("answer");
//   for (let i = 0; i < checkedRadio.length; i++) {
//     // console.log(checkedRadio[i]);
//     // break;
//     // console.log(checkedRadio[i].value);
//     // break;
//   }
//   return checkedRadio;
//   // alert("This Works");
// };

// Go back to previous question
previous = () => {
  if (questionIndex == 0) {
  } else {
    --questionIndex;
    renderQuestion();
  }
};
