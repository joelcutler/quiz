// js will:
//     -start quiz timer at 75 s 
//          -create a var for timer
// -set it to 75
// -display it in Header

//     -deduct 10s for every question answered incorrectly
//     -dynamically create quiz questions
//     -display whether answers are correct or incorrect upon selection(click) 
//     -store high score data and display them upon completion of quiz

var buttonEl = document.querySelector("button");

var timerEl = document.createElement("p");
var timeLeft = 75
timerEl.textcontent = "Time: " + timeLeft + "s";

function countdown() {
    var timeLeft = 75;
    var countInterval = setInterval(function() {
        if (timeLeft === 0) {
            clearInterval(countInterval);
            timerEl.textContent = '';
            displayMessage();
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        }
    }, 1000);

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {});
}

buttonEl.addEventListener("click", countdown);





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