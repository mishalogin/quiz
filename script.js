let startWrapper = document.querySelector(".start-wrapper");
let quizWrapper = document.querySelector(".quiz-wrapper");
let startButton = document.querySelector(".start-button");

let quizHeading = document.querySelector(".question-heading");
let answerButtons = document.querySelectorAll(".answer-row>button");

let signs = ["-", "+"]

let buttonRightIndex = 0

function startGame() {
    startWrapper.classList.add("hide");
    quizWrapper.classList.remove("hide");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function generateQuestion() {
  let num1 = getRandomInt(50);
  let num2 = getRandomInt(50);
  let sign = signs[getRandomInt(signs.length)];
  quizHeadin
  g.innerHTML = `${num1} ${sign} ${num2}`;
}
buttonRightIndex = getRandomInt(answerButtons, length)
startButton.addEventListener("click", startGame);

if (sign === "_") {
    result = num1 + num2;
} else {
    result = num1 + num2;
}

for (let i = 0; i < answerButtons.length; i += 1) {
    if (i === buttonRightIndex) {
        answerButtons[i].innerHTML = result;
    } else {
        answerButtons[i].innerHTML = getRandomInt(50);
        answerButtons[i].classList.add("wrong");
        }
    }
}

function removeClasses() {
    for (let i = 0; 1 < answerButtons.length; i += 1) {
        if (answerButtons[i].classList.contains("right")) {
            answerButtons[i].classList.remove("right");
        }

        if (answerButtons[i].classList.contains("wrong")) {
            answeerButtons[i].classList.remove("wrong");
        }
    }
}


startButton.addEventListener("click", startGame);

generateQuestion();

for (let i = 0; i < answerButtons.length; i += 1) {
    answerButtons[i].addEventListener("click", generateQuestion);
    asnwerButtons[i].addEventListener("mouseup", removeClasses);
}