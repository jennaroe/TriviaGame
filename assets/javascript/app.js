
var questions = [{
    question: "What is Barack Obama\'s middle name?",
		choices:["Willard", "Hussein" ,"Chang", "Uhuru"],
		correctAnswer: "Hussien"
	},{
		question:"Barack Obama was born in what state?",
		choices:["llinois", "Georgia", "Alaska", "Hawaii"],
		correctAnswer: "Hawaii"
	},{
		question:"Barack Obama received his bachelor\'s degree from what university?",
		choices:["Columbia University", "Harvard University", "Howard University", "Northwestern University"],
		correctAnswer:"Columbia University"
	},{
		question:"Where did Barack Obama and wife Michelle first meet?",
		choices:["In a Harvard Law School class" , "On a Hawaiian vacation" , "In Nairobi, Kenya" , "At a Chicago law firm"],
		correctAnswer:"At a Chicago law firm"
	},{
		question:"Barack Obama once joked about the diversity of his family, stating he has some family members to look like Bernie Mac and some who look like, who?",
		choices:["Hillary Clinton" , "Tina Fey" , "Queen Elizabeth" , "Margaret Thatcher"],
		correctAnswer:"Margaret Thatcher"
	},{
		question:"What year was Barack Obama elected to the US Senate?",
		choices:["1991", "1996", "2000", "2004"],
		correctAnswer:"1996"
	},{
		question:"Obama won the Nobel Peace Prize. Which of these other prestigious awards has Barack Obama won?",
		choices: ["Academy Award", " Grammy Award" , "Tony Award", "National Book Award"],
		correctAnswer:"Grammy Award"
	},{
		question: "What are the names of Barack Obama's two daughters?",
		choices:["Malia Ann and Natasha", "Mayla and Nastia", "Mary Ann and Natalie", "Michelle and Nancy"],
		correctAnswer:"Malia Ann and Natasha"
	},{
		question:"What did Michelle ask Barack Obama to stop doing before he began campaigning?",
		choices:["Jogging", "Drinking", "Eating unhealthy snacks", "Smoking"],
		correctAnswer: "Smoking"
	},{
		question:"Barack Obama served as Senator for which state?",
		choices:["Illinois","Ohio","Hawaii","Massachusetts"],
		correctAnswer:"Illinois"
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

	//working on clock//
	function initializeClock(container, endtime){
	  var clock = document.getElementById(id);
	  var timeinterval = setInterval(function(){
	    var t = getTimeRemaining(endtime);
	    clock.innerHTML = 'minutes: ' + t.minutes + '<br>' + 'seconds: ' + t.seconds;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	  },1000);
	}


	function showStuff() {
	$("#content").css("display", "block");
	};

	$('#startButton').click(function() { 
        $(this).parent().fadeOut(500);
        showStuff();
 });

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".notice").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".notice").text("Please select an answer");
                $(document).find(".notice").show();
            } else {
                $(document).find(".notice").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                                       
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".container > .question");
    var choiceList = $(document).find(".container > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
	$
    $(document).find(".container > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".container > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}