// UI vars
const rulesBtn = document.querySelector(".rules");
const modal = document.querySelector("#modal");
const closeIcon = document.querySelector(".close");
const choices = document.querySelectorAll(".choice");
const stepOne = document.querySelector(".step-one");
const stepTwo = document.querySelector(".step-two");
const stepTwoChoices = document.querySelector(".choices");
const scoreUpdate = document.querySelector("#scoreUpdate");
const playAgainBtn = document.querySelector("#playAgain");

// Event listeners
rulesBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  modal.style.display = "none";
});

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    let playersChoice = e.target.getAttribute("data-choice");
    displayStepTwo(playersChoice);
    let computersChoice = Math.floor(Math.random() * 9);

    if (computersChoice <= 2) {
      computersChoice = "paper";
    } else if (computersChoice <= 5) {
      computersChoice = "scissors";
    } else {
      computersChoice = "rock";
    }

    displayStepThree(playersChoice, computersChoice);

    let result = computeResult(playersChoice, computersChoice);
    if (result === "Player") {
      scoreUpdate.textContent++;
    }

    playAgain();

    // setTimeout(displayStepOne, 1000);
  });
});

function computeResult(player, computer) {
  if (player === computer) {
    return "Draw";
  }
  if (player === "paper") {
    if (computer === "scissors") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (player === "scissors") {
    if (computer === "rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (player === "rock") {
    if (computer === "paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }
}

// function displayStepOne() {
//   stepOne.style.display = "block";
//   stepTwo.style.display = "none";
// }

function displayStepTwo(choice) {
  stepOne.style.display = "none";
  stepTwo.style.display = "block";

  stepTwoChoices.innerHTML = `
  <div class="${choice} choice playersChoice" data-choice="${choice}">
  <div class="border ${choice}-border"></div>
    <img
      src="images/icon-${choice}.svg"
      data-choice="${choice}"
      alt=""
      class="${choice}-img"
    />
  </div>

  <div class="empty-choice"></div>`;
}

function displayStepThree(playersChoice, computersChoice) {
  stepTwoChoices.innerHTML = `
  <div class="${playersChoice} choice playersChoice" data-choice="${playersChoice}">
  <div class="border ${playersChoice}-border"></div>
    <img
      src="images/icon-${playersChoice}.svg"
      data-choice="${playersChoice}"
      alt=""
      class="${playersChoice}-img"
    />
  </div>

  <div class="computersChoice">
    <div class="${computersChoice} choice" data-choice="${computersChoice}">
    <div class="border ${computersChoice}-border"></div>
      <img
        src="images/icon-${computersChoice}.svg"
        data-choice="${computersChoice}"
        alt=""
        class="${computersChoice}-img"
      />
  </div>
  </div>`;
}
