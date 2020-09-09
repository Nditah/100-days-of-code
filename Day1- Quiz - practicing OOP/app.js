// Fetch api
// Populate UI
function populateUI() {
  // show question text
  const questionOutput = document.querySelector("#question");
  questionOutput.innerHTML = quiz.getCurrentQuestion().text;

  // show options
  const buttons = document.querySelectorAll(".buttons>*");
  buttons.forEach((btn, index) => {
    btn.textContent = quiz.getCurrentQuestion().choices[index];
  });

  // Footer
  document.querySelector("#progress").innerHTML = `<p id="progress">Question ${
    quiz.index + 1
  } of ${questions.length}</p>`;
}

// Go to next
function onClick() {
  // When clicked on a button
  document.querySelectorAll(".buttons>*").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      if (quiz.index === questions.length - 1) {
        // End of quiz
        document.getElementById(
          "quiz"
        ).innerHTML = `<h2>Your final score is: ${quiz.score}</h2> <br> <button id="playAgain">Play Again?</button>`;
        document.getElementById("playAgain").addEventListener("click", () => {
          location.reload();
        });
      } else {
        // If correct
        if (e.target.textContent === quiz.getCurrentQuestion().answer) {
          quiz.score++;
        }
        // Go to next question
        quiz.updateQuestion();
        populateUI();
      }
    })
  );
}

const questions = [
  new Question(
    "The term 'EGOT'—which stands for Emmy, Grammy, Oscar, Tony—was coined by which 'Miami Vice' actor?",
    [
      "Michael Talbott",
      "Philipp MIchael Thomas",
      "Don Johnson",
      "Eddie Murphy",
    ],
    "Philipp MIchael Thomas"
  ),
  new Question(
    "What's the european currency?",
    ["US Dollar", "Euro", "Yen", "Pound"],
    "Euro"
  ),
  new Question(
    "What does rgb stand for?",
    ["Red Green Blue", "Run Gravy Blue", "Rat Goofie Boolean", "Red Gulp Butt"],
    "Red Green Blue"
  ),
  new Question(
    "These birds are excellent parents and can find their way back to their nest from 1300 miles away.",
    ["Starlings", "Blue Jays", "Pigeons", "Cucubaras"],
    "Pigeons"
  ),
  new Question(
    "Where is Toronto?",
    ["US", "Germany", "England", "Canada"],
    "Canada"
  ),
  new Question(
    "What's the name of the actor Pitt",
    ["Manuel", "Joe", "Jake", "Brad"],
    "Brad"
  ),
];

const quiz = new Quiz();

populateUI();
onClick();
