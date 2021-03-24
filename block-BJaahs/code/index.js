let data = {
  title,
  options,
  correctAnswerIndex,
  isAnswerCorrect(index) {
    return index === correctAnswerIndex;
  },
  getCorrectAnswer() {
    return options[correctAnswerIndex];
  },
};
