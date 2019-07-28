//variable for countdown
var number =60;
var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

//questions array
var questions = [{
    question: "The rubber tree is native to which contenent?",
    answerList: ["North America", "Asia", "South America", "Europe", "Africa"],
    answer: 2
}, {
    question: "What is the name of Harry Potter's owl?",
    answerList: ["Windhook", "Blitzfluff", "Ponial", "Rushhoof", "Hedwig"],
    answer: 4
}, {
    question: 'What pop singer refers to her fans as "little monsters"?',
    answerList: ["Justin Bieber", "Lady Gaga", "Ariana Grande", "Taylor Swift", "One Direction"],
    answer: 1
}, {
    question: "About what percentage of Turkey is geographically in Asia?",
    answerList: ["55","38","67","95","17"],
    answer: 3
}, {
    question: "What animal would you  find painted on the tail of a Qantas airplane?",
    answerList: ["Kangaroo","Koala","Platypus","Wombat","Dugong"],
    answer: 0
}, {
    question: "In which of these countries are cars not driven on the left hand side of the road?",
    answerList: ["Japan","Ireland","Morocco","Australia","Hong Kong"],
    answer: 2
}];

//on click start function
$("#start").on("click", function() {

    //hides button
    $(this).hide();
    $("#time").html("<h2>Time Remaining: 60 seconds!</h2>");

    run(this);

    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + questions[0].answerList[0]
        + "<input type='radio' name='answer1' value='1'>" + questions[0].answerList[1]
        + "<input type='radio' name='answer1' value='2'>" + questions[0].answerList[2]
        + "<input type='radio' name='answer1' value='3'>" + questions[0].answerList[3]
        + "<input type='radio' name='answer1' value='4'>" + questions[0].answerList[4]

    );
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + questions[1].answerList[0]
        + "<input type='radio' name='answer2' value='1'>" + questions[1].answerList[1]
        + "<input type='radio' name='answer2' value='2'>" + questions[1].answerList[2]
        + "<input type='radio' name='answer2' value='3'>" + questions[1].answerList[3]
        + "<input type='radio' name='answer2' value='4'>" + questions[1].answerList[4]

    );

    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + questions[2].answerList[0]
        + "<input type='radio' name='answer3' value='1'>" + questions[2].answerList[1]
        + "<input type='radio' name='answer3' value='2'>" + questions[2].answerList[2]
        + "<input type='radio' name='answer3' value='3'>" + questions[2].answerList[3]
        + "<input type='radio' name='answer3' value='4'>" + questions[2].answerList[4]

    );

    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + questions[3].answerList[0]
        + "<input type='radio' name='answer4' value='1'>" + questions[3].answerList[1]
        + "<input type='radio' name='answer4' value='2'>" + questions[3].answerList[2]
        + "<input type='radio' name='answer4' value='3'>" + questions[3].answerList[3]
        + "<input type='radio' name='answer4' value='4'>" + questions[3].answerList[4]

    );

    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + questions[4].answerList[0]
        + "<input type='radio' name='answer5' value='1'>" + questions[4].answerList[1]
        + "<input type='radio' name='answer5' value='2'>" + questions[4].answerList[2]
        + "<input type='radio' name='answer5' value='3'>" + questions[4].answerList[3]
        + "<input type='radio' name='answer5' value='4'>" + questions[4].answerList[4]

    );
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + questions[5].answerList[0]
        + "<input type='radio' name='answer6' value='1'>" + questions[5].answerList[1]
        + "<input type='radio' name='answer6' value='2'>" + questions[5].answerList[2]
        + "<input type='radio' name='answer6' value='3'>" + questions[5].answerList[3]
        + "<input type='radio' name='answer6' value='4'>" + questions[5].answerList[4]

    );

    //submit button
    $("#submit").html("<button id = 'finished' class = 'btn'>Finish!</button>");
    $("#finished").on("click", function() {
        
  

        keepingScore();

        displayResults();
        
    });
});
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

// decrement timer
function decrement() {

    number--;

    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {

        stop();

        keepingScore();
        displayResults();

    }
};

function stop() {

    clearInterval(intervalId);
};
//display results
function displayResults() {

    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#submit").hide();

    $("#results").html("<h3>Finished!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
};


function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();

    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }
};