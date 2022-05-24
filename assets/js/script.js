// js will:
//     -start quiz timer at 75 s
//          -create a var for timer
// -set it to 75
// -display it in Header

//     -deduct 10s for every question answered incorrectly
//     -dynamically create quiz questions
//     -display whether answers are correct or incorrect upon selection(click)
//     -store high score data and display them upon completion of quiz
var QuestIndex = 0;
var index = 0;
var timeLeft = 75;
var timerEl = document.querySelector("#time");
var startButtonEl = document.querySelector("#start-button");
var questionAnswerEl = document.querySelector(".q-a");
var questionEl = document.querySelector("#question");
var answerAEl = document.querySelector("#answer-a");
var answerBEl = document.querySelector("#answer-b");
var answerCEl = document.querySelector("#answer-c");
var answerDEl = document.querySelector("#answer-d");
var answers = document.querySelector("#answers");
var instructionsEl = document.querySelector("#instructions");
var scoresButtonEl = document.querySelector("#high-scores-button");
var scoresEl = document.querySelector("#scores-div");
var countInterval;
timerEl.innerHTML = timeLeft;

function countDown() {
  // timeLeft = 75;
  countInterval = setInterval(function () {
    if (timeLeft === 0) {
      clearInterval(countInterval);
      timerEl.textContent = timeLeft;
    } else {
      timeLeft--;
      timerEl.textContent = timeLeft;
    }
  }, 1000);
}

function quizStart() {
  startButtonEl.remove();
  questionAnswerEl.style.display = "block";
  countDown();
  nextQuestion(QuestIndex);
  if (timeLeft === 0) {
    endGame();
  }
}

var quizQuestions = [
  //q1
  {
    q: "What does the acronym HTML stand for?",
    qAnswers: [
      "A: Hyper Text Markup Language",
      "B: Hit Them Massive Lumbers",
      "C: High Test Math Liquid",
      "D: Hyper Technical Mathematical Language",
    ],
    qCorrect: "A: Hyper Text Markup Language",
  },
  //q2
  {
    q: "What does the acronym CSS stand for?",
    qAnswers: [
      "A: Candid Screen Standards",
      "B: Cascading Style Sheets",
      "C: Creating Slick Styles",
      "D: Creating Style Simply",
    ],
    qCorrect: "B: Cascading Style Sheets",
  },
  // q3
  {
    q: "How does Java relate to JavaScript?",
    qAnswers: [
      "A: No relation twixt the two",
      "B: Both are named after coffee",
      "C: Both were invented on the island of Java",
      "D: Java requires no scripting",
    ],
    qCorrect: "A: No relation twixt the two",
  },
  //q4
  {
    q: "In CSS, what defines class?",
    qAnswers: [
      "A: Properties that influence the styling and layout of HTML elements",
      "B: Good manners, politeness, pride without showboating, empathy, humility, and an abundance of self - control",
      "C: An attribute used to define a group of HTML elements in order to apply unique styling and formatting to those elements",
      "D: Specifies how to style the targeted HTML elements",
    ],
    qCorrect:
      "C: An attribute used to define a group of HTML elements in order to apply unique styling and formatting to those elements",
  },
  //q5
  {
    q: "In Javascript, what does JSON.parse do?",
    qAnswers: [
      "A: Parses Jasons",
      "B: Converts infidels into believers",
      "C: Converts numbers into strings",
      "D: Converts strings into numbers",
    ],
    qCorrect: "D: Converts strings into numbers",
  },
  //q6
  {
    q: "In HTML, what does the <p> tag represent?",
    qAnswers: ["A: Parentheses", "B: Paragraph", "C: Processing", "D: Penguin"],
    qCorrect: "B: Paragraph",
  },
  //q7
  {
    q: "Which of these If statements is in the correct order?",
    qAnswers: [
      "A: Else, If, Else if",
      "B: Else if, If, Else",
      "C: If, Else, Else if",
      "D: If, Else if, Else",
    ],
    qCorrect: "C: If, Else, Else if",
  },
  //q8
  {
    q: "Which is NOT a data type?",
    qAnswers: ["A: Number", "B: Boolean", "C: String", "D: Data"],
    qCorrect: "D: Data",
  },
  //q9
  {
    q: "Which of these stops a loop?",
    qAnswers: ["A: Return", "B: Break", "C: Stop", "D: Cease"],
    qCorrect: "B: Break",
  },
  //q10
  {
    q: "What is the terminology for a loop that doesn't end?",
    qAnswers: [
      "A: Endless Cycling",
      "B: Interminable Iteration",
      "C: Infinite Loop",
      "D: Unceasing Loop of Horror",
    ],
    qCorrect: "C: Infinite Loop",
  },
];

function nextQuestion(index) {
  var containerQ = document.querySelector("#question");
  //   var containerA = document.getElementsByClassName("answers");
  //   var parent = document.getElementsByClassName("q-a");

  var current = quizQuestions[index];
  containerQ.textContent = current.q;

  answers.innerHTML = `
    ${current.qAnswers
      .map(
        (option, index) => `
        <button class="" data-answer="${option}"> ${option} </button>
  `
      )
      .join("")}`;
  answers.addEventListener("click", buttonHandler);
}

function buttonHandler(event) {
  console.log(event.target.dataset.answer);
  //logic for comparing questions and answers goes in here. deduct in here too w new conditional. need check for time
  console.log(QuestIndex);
  answers.removeEventListener("click", buttonHandler);
  let answerClicked = event.target.dataset.answer;
  checkAnswer(answerClicked);
  QuestIndex++;
  if (QuestIndex < quizQuestions.length) {
    nextQuestion(QuestIndex);
  } else {
    endGame();
  }

  //   setTimeout(nextQuestion, 1500);
}

function deduct10s() {
  var scoreTime = timeLeft - 10;
  if (scoreTime <= 0) {
    timeLeft = 0;
  } else {
    timeLeft = scoreTime;
  }
}

function checkAnswer(answerClicked) {
  if (answerClicked !== quizQuestions[QuestIndex].qCorrect) {
    deduct10s();
  }
}

function endGame() {
  var highScore = timeLeft || 0;
  //   var highScore = localStorage.getItem("highscore");
  clearInterval(countInterval);
  questionAnswerEl.style.display = "none";
  instructionsEl.innerHTML = `<h1>THE GAME HAS ENDED! CHECK OUT THE HIGH SCORES!`;
  var initials = window.prompt(
    "You've set a new high score! Please enter your initials"
  );
  var newScore = {
    highscore: highScore,
    initials: initials,
  };
  var highScoreZ = [];
  highScoreZ = JSON.parse(localStorage.getItem("highScoreZ")) || [];
  console.log(highScoreZ, "string for differentiation");
  highScoreZ.push(newScore);
  console.log(highScoreZ, "string for 5");
  initials = localStorage.setItem("highScoreZ", JSON.stringify(highScoreZ));
}

function displayScores() {
  var savedScores = localStorage.getItem("highScoreZ");
  savedScores = JSON.parse(savedScores);
  for (var i = 0; i < savedScores.length; i++) {
    var li = document.createElement("li");
    // li.setAttribute("class",);
    li.textContent =
      savedScores[i].initials + " - " + savedScores[i].highscore + " points";
    document.getElementById("scores-ul").appendChild(li);
  }
}

scoresButtonEl.addEventListener("click", displayScores);
startButtonEl.addEventListener("click", quizStart);
