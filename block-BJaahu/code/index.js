// Prototypal pattern

let quizMethods = {
  isAnswerCorrect: function (index) {
    return this.correctAnswerIndex === index;
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  },
};

function createQuiz(title, options, correctAnswerIndex) {
  let obj = Object.create(quizMethods);
  obj.title = title;
  obj.options = options;
  obj.correctAnswerIndex = correctAnswerIndex;
  return obj;
}

let question = createQuiz('Capital of India?',['Dehradun','Delhi','Mumbai'],1);

// Pseudoclassical Pattern

function CreateQuiz(title, options, correctAnswerIndex) {
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

CreateQuiz.prototype = {
  isAnswerCorrect: function (index) {
    return this.correctAnswerIndex === index;
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  },
};

let questionOne = new CreateQuiz(
  "Capital of India?",
  ["Dehradun", "Delhi", "Mumbai"],
  1
);

// Class Pattern

class Quiz {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }

  isAnswerCorrect(index) {
    return this.correctAnswerIndex === index;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

let questiontwo = new Quiz(
  "Capital of India?",
  ["Dehradun", "Delhi", "Mumbai"],
  1
);
