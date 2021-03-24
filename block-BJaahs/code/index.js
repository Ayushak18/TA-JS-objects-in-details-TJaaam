let title = "Where is the capital of Jordan";
let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

let quizData = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
  isAnswerCorrect(index) {
    return index === quizData.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return quizData.options[quizData.correctAnswerIndex];
  },
};

function createObj(title, options, correctAnswerIndex) {
  let dataObj = {};
  dataObj.title = title;
  dataObj.options = options;
  dataObj.correctAnswerIndex = correctAnswerIndex;
  dataObj.isAnswerCorrect = function (index) {
    return index === dataObj.correctAnswerIndex;
  };
  dataObj.getCorrectAnswer = function () {
    return dataObj.options[dataObj.correctAnswerIndex];
  };

  return dataObj;
}

let ayu = createObj(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

function createObj(title, options, correctAnswerIndex) {
  let dataObj = {};
  dataObj.title = title;
  dataObj.options = options;
  dataObj.correctAnswerIndex = correctAnswerIndex;
  dataObj.isAnswerCorrect = function (index) {
    return index === this.correctAnswerIndex;
  };
  dataObj.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };

  return dataObj;
}
