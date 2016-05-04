
$( document ).ready(function() {
	// $('#myButton').on('click', function (event) {
 //    var $btn = $(this).button('startQuiz')
 //    document.getElementById('#myButton').click();
 //    $btn.button(startQuiz, createRadios);
 //  })

// $("#StartButton").click(function () {
//         $("#SplashScreen").hide();
//         $("#GameCanvas").show();
//     });
$('#startButton').click(function() { 
        $(this).parent().fadeOut(500);
 });



var trivia = [
	{
		question: "What is Barack Obamas middle name?",
		options:["Willard", "Hussein" ,"Chang", "Uhuru"],
		correctAnswer: "Hussien"
	},{
		question:"Barack Obama was born in what state?",
		options:["llinois", "Georgia", "Alaska", "Hawaii"],
		correctAnswer: "Hawaii"
	},{
		question:"Barack Obama received his bachelor’s degree from what university?",
		options:["Columbia University", "Harvard University", "Howard University", "Northwestern University"],
		correctAnswer:"Columbia University"
	},{
		question:"Where did Barack Obama and wife Michelle first meet?",
		options:["In a Harvard Law School class" , "On a Hawaiian vacation" , "In Nairobi, Kenya" , "At a Chicago law firm"],
		correctAnswer:"At a Chicago law firm"
	},{
		question:"Barack Obama once joked about the diversity of his family, stating he has some family members to look like Bernie Mac and some who look like, who?",
		options:["Hillary Clinton" , "Tina Fey" , "Queen Elizabeth" , "Margaret Thatcher"],
		correctAnswer:"Margaret Thatcher"
	},{
		question:"What year was Barack Obama elected to the US Senate?",
		options:["1991 " , "1996", "2000", " 2004 "],
		correctAnswer:"1996"
	},{
		question:"Obama won the Nobel Peace Prize. Which of these other prestigious awards has Barack Obama won?",
		options: ["Academy Award ", " Grammy Award" , "Tony Award", "National Book Award "],
		correctAnswer:"Grammy Award"
	},{
		question: "What are the names of Barack Obama's two daughters? ",
		options:["Malia Ann and Natasha ", "Mayla and Nastia ", "Mary Ann and Natalie ", "Michelle and Nancy "],
		correctAnswer:"Malia Ann and Natasha "
	},{
		question:"What did Michelle ask Barack Obama to stop doing before he began campaigning? ",
		options:["Jogging", "Drinking ", "Eating unhealthy snacks ", "Smoking"],
		correctAnswer: "Smoking"
	},{
		question:"Barack Obama served as Senator for which state?",
		options:["Illinois","Ohio","Hawaii","Massachusetts"],
		correctAnswer:"Illinois"

}];

	var questionCounter= 0; //Tracks question number//
	var selections= []; //Array containing user choices//

	var correct = 0;
	var incorrect = 0;
	var timer = 0;

 
// Displays question//

function startQuiz(event) {
$(document.createElement('h2')).addClass('question').attr('id', 'question').text(trivia[0]['question']).appendTo('#questions');
};
startQuiz();


for (var i = 0; i < trivia[0].question.length; i++)


// Displays answers//
function createRadios(event) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    
    for (var i = 0; i < trivia[0].options.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += trivia[0].options[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  };

 $('#answers').append(createRadios());

function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

// Displays answers//
// function createOptions(){
// 	$(document.getElementById('answers'));
// 	$(document.createElement('INPUT'));
// 	options.setAttribute("type", "radio");
// };
// 	$('#answers').append('createOptions')
// $('#answer1').append(trivia[0].options).html(trivia.options);
// $('#answer2').append(options[1]);

// $('#answer3').append(options[2]);

// $('#answer4').append(options[3]);

});
