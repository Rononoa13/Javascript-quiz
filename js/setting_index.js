console.log(quiz);

var allQuestions = [{
    question: "Before Mt. Everest was discovered, whaich mountain was considered to be the highest mountain in the world?",
    choices: ["Mt. Kilimanjaro", "Kanchenjunga", "Mount Everest"],
    correctAnswer: 1
  },

  {
    question: "Does England have a 4th of July?",
    choices: ["Yes", "No", "I don't know"],
    correctAnswer: 0
  },

  {
    question: "What is Rupert the bear's middle name?",
    choices: ["Bear", "He doesn't have one!", "The", "Rupert"],
    correctAnswer: 2
  }
];

function QuizQuestion(question, choices, correctAnswer) {
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
}

QuizQuestion = new QuizQuestion("question", ["choices","choices", 0]);
