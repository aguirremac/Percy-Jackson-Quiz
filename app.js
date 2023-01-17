const data = [
  {
    id: 1,
    question: "What color of food does Percy's mother always make him?",
    answers: [
      { answer: "red", isCorrect: false },
      { answer: "green", isCorrect: false },
      { answer: "blue", isCorrect: true },
      { answer: "yellow", isCorrect: false },
    ],
  },

  {
    id: 2,
    question: "What building in New York City currently houses Mt. Olympus?",
    answers: [
      { answer: "Chrysler Building", isCorrect: false },
      { answer: "Empire State Building", isCorrect: true },
      { answer: "Central Park Tower", isCorrect: false },
      { answer: "Seagram Building", isCorrect: false },
    ],
  },

  {
    id: 3,
    question: "Who wrote Percy Jackson and the Olympians?",
    answers: [
      { answer: "Rick Riordan", isCorrect: true },
      { answer: "C. S. Lewis", isCorrect: false },
      { answer: "J. R. R. Tolkien", isCorrect: false },
      { answer: "J. K. Rowling", isCorrect: false },
    ],
  },

  {
    id: 4,
    question: "Who created the labyrinth?",
    answers: [
      { answer: "Daedalus", isCorrect: true },
      { answer: "Athena", isCorrect: false },
      { answer: "Theseus", isCorrect: false },
      { answer: "Ariadne", isCorrect: false },
    ],
  },

  {
    id: 5,
    question: "Who is Charybdis' sister?",
    answers: [
      { answer: "Medusa", isCorrect: false },
      { answer: "Circe", isCorrect: false },
      { answer: "Alecto", isCorrect: false },
      { answer: "Scylla", isCorrect: true },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const selectQuestion = document.querySelector(".question");
const choicesContainer = document.querySelector(".choices");
const submit = document.querySelector(".submit");
const playAgain = document.querySelector(".play");
const correctAnswers = document.querySelector('.correct');
const wrongAnswers = document.querySelector('.wrong');
const total = document.querySelector('.score');

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let totalScore = 0;
let pinilingAnswer;
//if selection is true or false



//adding function for result screen

const showResult = () => {
    resultScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    correctAnswers.textContent = `Correct Answers: ${correctCount}`;
    wrongAnswers.textContent = `Wrong Answers: ${wrongCount}`;
    total.textContent = `Total Score: ${(correctCount - wrongCount) *10}`;
}



const ShowQuestion = (qNumber) => {

if (qIndex === data.length) return showResult()  //if this is true, program will stop here
  pinilingAnswer = null;
  selectQuestion.textContent = data[qNumber].question;
  choicesContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        ` <div class="choices">
            <input name='answer' type="radio" id=${index} value=${item.isCorrect}>
            </input>
            <label for=${index}>${item.answer}</label>
          </div> `

      //take note of the back tick `` closing the html div class='choices'
    )
    .join("");

  selectAnswer();
};

//function for slecting an answer
const selectAnswer = () => {
  choicesContainer.querySelectorAll("input").forEach((element) => {
    element.addEventListener("click", (e) => {
      pinilingAnswer = e.target.value;
    });
  });
};

//adding funtion for submitting an answer

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (pinilingAnswer !== null) {

      pinilingAnswer === 'true' ? correctCount++ : wrongCount++;
      qIndex++;
      ShowQuestion(qIndex);
    } else alert('Select an Answer!');
  }); 
};


const pressPlayAgain = () => {
    playAgain.addEventListener('click', () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    totalScore = 0;
    resultScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    ShowQuestion(qIndex);

    });
};


ShowQuestion(qIndex);
submitAnswer();
pressPlayAgain();

