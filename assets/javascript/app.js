
// bug somewhere in JS and it is not allowing any of my questions to populate
// created two additional pages of html to try to get the style of the pages (questions page is designed for easier HW choice)
$(document).ready(function () {


    // pushes first question to screen
$("#btnstart").click(function () {
        pushQuestion();
    });

    // sets logic for keeping score
$("body").on("click", ".answer",  function() {
        chosenAnswer = $(this).text();
        if (chosenAnswer === correctAnswer[questionsAnswered]) {
            clearInterval (countdown);
            playerWin();
        }
        else {
            clearInterval (countdown);
            playerLoss();
        }
    });

});

// click to reset game
$("body").on("click", ".reset", function(event) {
        resetQuestions();
    });
    // need reset button on score page

// loss due to timeout
function lossTimeout () {
    unansweredQ++;
    triviaHTML = "<p>Seconds Remaining: </p>";
    $(".questionArea").html(triviaHTML);
    setTimeout(wait, 3000);
}

// per slide correct answer
function playerWin () {
    correctTotal++;
    clockStart = $("#countdown").html("<p>Seconds Remaining: " + countdown + "</p>");
    $(".questionArea").html(triviaHTML);
    setTimeout(wait, 3000);
}

// per slide incorrect answer
function playerLoss () {
    incorrectTotal++;
    clockStart = $("#countdown").html("<p>Seconds Remaining: " + countdown + "</p>");
    triviaHTML = "<p class='text-center'>" + questionArray[questionsAnswered] + "</p><p class='first-answer answer'>" + answerArray[questionsAnswered][0] + "</p><p class='answer'>B. " + answerArray[questionsAnswered][1] + "</p><p class='answer'>C. " + answerArray[questionAnswered][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
    $(".questionArea").html(triviaHTML);
    setTimeout(wait, 3000);
}

// sending question to bottom of index.html
function pushQuestion () {
    clockStart = $("#countdown").html("<p>Seconds Remaining: " + countdown + "</p>");
    triviaHTML = $(".questionArea").html("<p>" + questionArray[questionsAnswered] + "</p><p class='answer'>A. " + answerArray[questionsAnswered][0] + "</p><p class = 'answer'>B. " + answerArray[questionsAnswered][1] + "</p><p = class'answer'>C. " + answerArray[questionsAnswered][2] + "</p><p class ='answer'>D. " + answerArray[questionsAnswered][3] + "</p>");
    $(".questionArea").html(clockStart);
    $(".questionArea").html(triviaHTML);
}

// separating screens
function wait () {
    if (questionsAnswered < 9) {
        questionsAnswered++;
        triviaHTML ();
        countdown = 15000;
        timeLeft ();
    }
    else {
        gameComplete ();
    }
}

// building to use in above functions
function timeLeft() {
    timer = setInterval(countdownAmount, 1000)
    function countdownAmount () {
        if (countdown === 0) {
            clearInterval(timer);
            lossTimeout ();
        }
        if (countdown > 0) {
            countdown--;
        }
        $(".timer").html(countdown);
    }
}

//   
function gameComplete () {
    clockStart = "Seconds Remaining: ";
    triviaHTML = 
    $(".questionArea").html(triviaHTML)
}

function resetQuestions () {
    questionsAnswered = 0;
    correctTotal = 0;
    incorrectTotal = 0;
    unansweredQ = 0;
    countdown = 15000;
    triviaHTML ();
    timeLeft ();
}

var startScreen;
var triviaHTML;
var countdown = 15000;
var questionArray = ["1. What Chicago sports franchise has the most total championships (including prior leagues)?", "2. What Chicago baseball player has the most career hits?", "3. Which player has the most rebounds in Bulls' history?",
"4. What Chicago Bear has the most Pro Bowl selections?", "5. Who is the career leader in goals for the Chicago Blackhawks?", "6. What Chicago Cub player admitted to urinating on his hands to toughen them up during the season?",
"7. What Chicago Bear player is known as the Kansas Comet?", "8. Who has accrued the most wins as the Blackhawks' coach?", "9. Who was the defensive coordinator for the '85 Chicago Bears?", "10. How many losses does Michael Jordan have in the NBA Finals against his 24 victories?"]
var answerArray = [["Chicago Cubs", "Chicago Bears", "Chicago Bulls", "Chicago Blackhawks"], ["Cap Anson", "Paul Konerko", "Ernie Banks", "Frank Thomas"],
["Scottie Pippen", "Joakim Noah", "Horace Grant", "Michael Jordan"], ["Brian Urlacher", "Walter Payton", "Mike Singletary", "Dick Butkus"],
["Jonathan Toews", "Bobby Hull", "Patrick Kane", "Stan Mitika"], ["Sammy Sosa", "Kerry Wood", "Moises Alou", "Billy Williams"],
["Devin Hester", "Tarik Cohen", "Willie Gault", "Gale Sayers"], ["Joel Quenneville", "Bob Pulford", "Rudy Pilous", "Billy Reay"],
["Rex Ryan", "Rob Ryan", "Buddy Ryan", "Matt Ryan"], ["8", "11", "14", "17"]]
var correctAnswer = ["Chicago Bears", "Cap Anson", "Michael Jordan", "Mike Singletary", "Bobby Hull", "Moises Alou", "Gale Sayers", "Billy Reay", "Buddy Ryan", "11"]
var questionsAnswered = 0;
correctTotal = 0;
incorrectTotal = 0;
unansweredQ = 0;
















// Code started for option two
// var questionCounter = 0;
//     var time = 15;
//     var answersCorrect = 0;
//     var answersIncorrect = 0;

//     var trivia = [
//         {
//             question: "1. What Chicago sports franchise has the most total championships (including prior leagues)?",
//             options: ["Chicago Cubs", "Chicago Bears", "Chicago Bulls", "Chicago Blackhawks"],
//             correctOption: "Chicago Bears",

//         },
//         {
//             question: "2. What Chicago baseball player has the most career hits?",
//             options: ["Cap Anson", "Paul Konerko", "Ernie Banks", "Frank Thomas"],
//             correctOption: "Cap Anson",

//         },
//         {
//             question: "3. Which player has the most rebounds in Bulls' history?",
//             options: ["Scottie Pippen", "Joakin Noah", "Horace Grant", "Michael Jordan"],
//             correctOption: "Michael Jordan",

//         },
//         {
//             question: "4. What Chicago Bear has the most Pro Bowl selections?",
//             options: ["Brian Urlacher", "Walter Payton", "Mike Singletary", "Dick Butkus"],
//             correctOption: "Mike Singletary",

//         },
//         {
//             question: "5. Who is the career leader in goals for the Chicago Blackhawks?",
//             options: ["Jonathan Toews", "Bobby Hull", "Patrick Kane", "Stan Mikita"],
//             correctOption: "Bobby Hull",

//         },
//         {
//             question: "6. What Chicago Cub player admitted to urinating on his hands to toughen them up during the season?",
//             options: ["Sammy Sosa", "Kerry Wood", "Moises Alou", "Billy Williams"],
//             correctOption: "Moises Alou",

//         },
//         {
//             question: "7. What Chicago Bear player is known as the 'Kansas Comet'?",
//             options: ["Devin Hester", "Tarik Cohen", "Willie Gault", "Gale Sayers"],
//             correctOption: "Gale Sayers",

//         },
//         {
//             question: "8. Who has accrued the most wins as the Blackhawks' coach?",
//             options: ["Joel Quenneville", "Bob Pulford", "Rudy Pilous", "Billy Reay"],
//             correctOption: "Billy Reay",

//         },
//         {
//             question: "9. Who was the defensive coordinator for the '85 Chicago Bears?",
//             options: ["Rex Ryan", "Rob Ryan", "Buddy Ryan", "Matt Ryan"],
//             correctOption: "Buddy Ryan",

//         },
//         {
//             question: "10. How many losses does Michael Jordan have in the NBA Finals against his 24 victories?",
//             options: ["8", "11", "14", "17"],
//             correctOption: "11",

//         }
//     ];