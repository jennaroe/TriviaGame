
var trivia = [{
    question: "What is Barack Obamas middle name?",
		choices:["Willard", "Hussein" ,"Chang", "Uhuru"],
		correctAnswer: "Hussien"
	},{
		question:"Barack Obama was born in what state?",
		choices:["llinois", "Georgia", "Alaska", "Hawaii"],
		correctAnswer: "Hawaii"
	},{
		question:"Barack Obama received his bachelor’s degree from what university?",
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


$( document ).ready(function() {
	
	function showStuff() {
	$("#content").css("display", "block");
	};

	$('#startButton').click(function() { 
        $(this).parent().fadeOut(500);
        showStuff();
 });

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

// Displays answers//
function createRadios(event) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    
    for (var i = 0; i < trivia[0].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += trivia[0].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  };

 $('#answers').append(createRadios());

function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  };
  choose();
  
$('#next').click(function() { 
		$('#random').empty();
        for(var i = 1; i < trivia.length; i++){
	$(document.createElement('h2')).addClass('question').attr('id', 'question').text(trivia[i]['question']).appendTo('#questions');
	};
	// 	for (var i = 0; i < trivia[0].options.length; i++) {
	//       item = $('<li>');
	//       input = '<input type="radio" name="answer" value=' + i + ' />';
	//       input += trivia[0].options[i];
	//       item.append(input);
	//       radioList.append(item);
	//     }};
	//     return radioList;
});

//  	$('#answers').append(createRadios());
// 		};	
});	
