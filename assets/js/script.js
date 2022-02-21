// js will:
//     -start quiz timer at 75 s 
//          -create a var for timer
// -set it to 75
// -display it in Header

//     -deduct 10s for every question answered incorrectly
//     -dynamically create quiz questions
//     -display whether answers are correct or incorrect upon selection(click) 
//     -store high score data and display them upon completion of quiz

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
    timeLeft = 75;
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
    quiz();
};


var quizQuestions = {
    one: "What does the acronym HTML stand for?",
    two: "What does the acronym CSS stand for?",
    three: "How does Java relate to JavaScript?",
    four: "In CSS, what defines class?",
    five: "In Javascript, what does JSON.parse do?",
    six: "In HTML, what does the <p> tag represent?",
    seven: "Which of these If statements is in the correct order?",
    eight: "Which is NOT a date type?",
    nine: "Which of these stops a loop?",
    ten: "What is the terminology for a loop that doesn't end?",
};
var q1Answers = {
    A: "Hyper Text Markup Language",
    B: "Hit Them Massive Lumbers",
    C: "High Test Math Liquid",
    D: "Hyper Technical Mathematical Language",
};
var q2Answers = {
    A: "Candid Screen Standards",
    B: "Cascading Style Sheets",
    C: "Creating Slick Styles",
    D: "Creating Style Simply",
};
var q3Answers = {
    A: "No relation twixt the two",
    B: "Both are named after coffee",
    C: "Both were invented on the island of Java",
    D: "Java requires no scripting",
};
var q4Answers = {
    A: "Properties that influence the styling and layout of HTML elements",
    B: "Good manners, politeness, pride without showboating, empathy, humility, and an abundance of self - control",
    C: "An attribute used to define a group of HTML elements in order to apply unique styling and formatting to those elements",
    D: "Specifies how to style the targeted HTML elements",
};
var q5Answers = {
    A: "Parses Jasons",
    B: "Converts infidels into believers",
    C: "Converts numbers into strings",
    D: "Converts strings into numbers",
};
var q6Answers = {
    A: "Parentheses",
    B: "Processing",
    C: "Penguin",
    D: "Paragraph",
};
var q7Answers = {
    A: "Else, If, Else if",
    B: "Else if, If, Else",
    C: "If, Else, Else if",
    D: "If, Else if, Else",
};
var q8Answers = {
    A: "Number",
    B: "Boolean",
    C: "String",
    D: "Data",
};
var q9Answers = {
    A: "Return",
    B: "Break",
    C: "Stop",
    D: "Cease",
};
var q10Answers = {
    A: "Endless Cycling",
    B: "Interminable Iteration",
    C: "Infinite Loop",
    D: "Unceasing Loop of Horror",
};


function quiz() {
    for (var i = 0; i < quizQuestions.length; i++) {
        if (quizQuestions[i]) {

        }
    };
    questionEl.textContent = quizQuestions.one; //iterated and indexed questions
    answerAEl.textContent = q1Answers.A;
    answerBEl.textContent = q1Answers.B;
    answerCEl.textContent = q1Answers.C;
    answerDEl.textContent = q1Answers.D;


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