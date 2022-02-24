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
var startButtonEl = document.querySelector("#start-button");
var timerEl = document.querySelector("#time");
var timeLeft = 75;
var questionAnswerEl = document.querySelector(".q-a");
var questionEl = document.querySelector("#question");
var answerAEl = document.querySelector("#answer-a");
var answerBEl = document.querySelector("#answer-b");
var answerCEl = document.querySelector("#answer-c");
var answerDEl = document.querySelector("#answer-d");

timerEl.innerHTML = timeLeft;


function countDown() {
    // timeLeft = 75;
    var countInterval = setInterval(function() {
        if (timeLeft === 0) {
            clearInterval(countInterval);
            timerEl.textContent = timeLeft;
        } else {
            timeLeft--;
            timerEl.textContent = timeLeft;
        }
    }, 1000);
};

function quizStart() {
    startButtonEl.remove();
    questionAnswerEl.style.display = "block";
    countDown();
    nextQuestion(QuestIndex);
};


var quizQuestions = [
    //q1
    {
        q: "What does the acronym HTML stand for?",
        qAnswers: ["A: Hyper Text Markup Language", "B: Hit Them Massive Lumbers", "C: High Test Math Liquid", "D: Hyper Technical Mathematical Language"],
        qCorrect: "A: Hyper Text Markup Language",
    },
    //q2
    {
        q: "What does the acronym CSS stand for?",
        qAnswers: ["A: Candid Screen Standards", "B: Cascading Style Sheets", "C: Creating Slick Styles", "D: Creating Style Simply"],
        qCorrect: "B: Cascading Style Sheets",
    },
    //q3
    {
        q: "How does Java relate to JavaScript?",
        qAnswers = ["A: No relation twixt the two", "B: Both are named after coffee", "C: Both were invented on the island of Java", "D: Java requires no scripting"],
        qCorrect: "A: No relation twixt the two",
    },
    //q4
    {
        q: "In CSS, what defines class?",
        qAnswers = ["A: Properties that influence the styling and layout of HTML elements", "B: Good manners, politeness, pride without showboating, empathy, humility, and an abundance of self - control", "C: An attribute used to define a group of HTML elements in order to apply unique styling and formatting to those elements", "D: Specifies how to style the targeted HTML elements"],
        qCorrect: "C: An attribute used to define a group of HTML elements in order to apply unique styling and formatting to those elements",
    },
    //q5
    {
        q: "In Javascript, what does JSON.parse do?",
        qAnswers = ["A: Parses Jasons", "B: Converts infidels into believers", "C: Converts numbers into strings", "D: Converts strings into numbers"],
        qCorrect: "D: Converts strings into numbers",
    },
    //q6
    {
        q: "In HTML, what does the <p> tag represent?",
        qAnswers = ["A: Parentheses", "B: Paragraph", "C: Processing", "D: Penguin"],
        qCorrect: "B: Paragraph",
    },
    //q7
    {
        q: "Which of these If statements is in the correct order?",
        qAnswers: ["A: Else, If, Else if", "B: Else if, If, Else", "C: If, Else, Else if", "D: If, Else if, Else"],
        qCorrect: "C: If, Else, Else if",
    },
    //q8
    {
        q: "Which is NOT a data type?",
        qAnswers = ["A: Number", "B: Boolean", "C: String", "D: Data"],
        qCorrect: "D: Data",
    },
    //q9
    {
        q: "Which of these stops a loop?",
        qAnswers = ["A: Return", "B: Break", "C: Stop", "D: Cease"],
        qCorrect: "B: Break",
    },
    //q10
    {
        q: "What is the terminology for a loop that doesn't end?",
        qAnswers = ["A: Endless Cycling", "B: Interminable Iteration", "C: Infinite Loop", "D: Unceasing Loop of Horror"],
        qCorrect: "C: Infinite Loop",
    },
];

function nextQuestion(index) {
    var container1 = document.getElementsByClassName("answers");
    var parent = document.getElementsByClassName("q-a");
    container1.remove();
    var container = document.createElement("div");
    container.classList.add("answers");
    var current = quizQuestions[index];
    //display question current.q using createelement like line 126 and assign text content to it

    for (var i = 0; i < current.qAnswers.length; i++) {
        //createElement append to container, add event listener buttonHandler
        // for loop here vv for answer buttons (append to container)
        // hard part right here
    }

    questionEl.textContent = quizQuestions.q1; //iterated and indexed questions
    answerAEl.textContent = current. //whatever;
    answerBEl.textContent = q1Answers.B;
    answerCEl.textContent = q1Answers.C;
    answerDEl.textContent = q1Answers.D;

    parent.append(container);
};

function buttonHandler() {
    //logic for comparing questions and answers goes in here. deduct in here too w new conditional. need check for time
    if (QuestIndex + 1 <= quizQuestions.length) {
        nextQuestion(QuestIndex + 1);
    } else {
        endGame();
    }

};

function deduct10s() {
    timeLeft = timeLeft - 10;
};

function endGame() {
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) { // <= could also be "highScore = highScore || 0;""
        highScore = 0;
    }

    if (timeLeft === 0) // or iteration of questions finishes) 
    {
        var highScore = timeLeft
        highScore = localStorage.setItem("highscore", timeLeft);
        var initials = window.prompt("You've set a new high score! Please enter your initials");
        initials = localStorage.setItem("initials", initials);
    }
};

startButtonEl.addEventListener("click", quizStart);







// questions: (buttons)

// 1: What does HTML stand
// for ?
// A: Hyper Text Markup Language
// B: Hit Them Massive Lumbers
// C: High Test Math Liquid
// D: Hyper Technical Mathematical Language

// 2: What does CSS stand
// for ?
// A: Candid Screen Standards
// B: Cascading Style Sheets
// C: Creating Slick Styles
// D: Creating Style Simply



// 3: How does Java relate to JavaScript
// A: No Relation twixt the two
// B: Both are named after coffee
// C: Both were invented on the island of Java
// D: Java requires no script


// 4: In CSS, what defines class ?
//     A : Properties that influence the styling and layout of HTML elements
// B: Good manners, politeness, pride without showboating, empathy, humility, and an abundance of self - control
// C: An attribute used to define a group of HTML elements in order to apply unique styling and formatting to those elements
// D: Specifies how to style the targeted HTML elements


// 5: In Javascript, what does JSON.parse do?
//     A: Parses Jason
//     B: Converts infidels into believers
//     C: Converts numbers into strings
//     D: Converts strings into numbers


// 6: In HTML, what does the <p> tag stand for?
//     A: Parentheses
//     B: Processing
//     C: Penguin
//     D: Paragraph

// 7: Which of these If statements is in the correct order?
//     A: Else, If, Else if
//     B: Else if, If, Else
//     C: If, Else, Else if
//     D: If, Else if, Else

// 8: Which is NOT a date type?
//     A: Number
//     B: Boolean
//     C: String
//     D: Data

// 9: Which of these stops a loop?
// A: Return
// B: Break
// C: Stop
// D: Cease


// 10: What is the terminology for a loop that doesn't end?
//     A: Endless Cycling
//     C: Interminable Iteration
//     B: Infinite Loop
//     D: Unceasing Loop of Horror