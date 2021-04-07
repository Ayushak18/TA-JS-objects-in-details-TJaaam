class Question {
  constructor(title, options, answer) {
    this.title = title;
    this.options = options;
    this.answer = answer;
  }

  isCorrect(answer) {
    return answer === this.answer;
  }

  getCorrectAnswer() {
    return this.answer;
  }

  createUI() {}
}

class Quiz {
  constructor() {
    this.allQuestions = [];
  }
}
