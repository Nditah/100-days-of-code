function Quiz(index = 0, score = 0) {
  this.index = index;
  this.score = score;
}

Quiz.prototype.addToIndex = function () {
  return (this.index += 1);
};

Quiz.prototype.updateQuestion = function () {
  questions[quiz.addToIndex()];
};

Quiz.prototype.getCurrentQuestion = function () {
  return questions[quiz.index];
};
