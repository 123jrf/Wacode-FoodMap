var quizContainer = document.getElementById('quiz-question');
var submitButton = document.getElementById('quiz-submit');
var textEntry = document.getElementById("answer_field");
var answerLabel = document.getElementById("answer_label");

var questions = [
	["<p>What percentage of Americans do you think are food insecure before COVID-19?</p>", 12.5,
		"<p>In 2020, an estimated 1 in 8 <b>(12.5%)</b> Americans were food insecure, equating to over <strong>38 million</strong> Americans, including almost <strong>12 million children</strong>. <a href=https://hungerandhealth.feedingamerica.org/understand-food-insecurity/>[Source]</a></p>"],
	["<p>What percentage of Americans do you think are food insecure since the pandemic?</p>", 25,
		"<p>Since the onset of COVID-19, food insecurity has <strong>doubled</strong> to around <strong>25%</strong> in the United States.</p>"
	]
]

var button_texts = [
	"Check Answer",
	"Next Question!"
]

var current_question = 0;

// Quiz button pressed
function quizbtnpress() {
	// If current question is even, check answer, if it's odd, move to the next question
	if (current_question / 2 > questions.length - 1) {
		quizContainer.innerHTML = "<p>That's all the questions.</p>";
		
		textEntry.remove();
		submitButton.remove();
	}
	else if (current_question % 2 === 0) {
		// Get input from entry
		let inputVal = parseFloat(textEntry.value.replace(/[^\d.-]/g, ''));
		let answerVal = quizContainer.innerHTML = questions[(current_question) / 2][1]
		
		let result = "";
		
		console.log("'" + inputVal + "'");
		
		if (inputVal == "NaN") {
			console.log("No");
		}
		else if ((inputVal > answerVal*0.9) && (inputVal < answerVal*1.1)) {
			result = "<p>Correct!</p>";
		}
		else {
			result = "<p>Incorrect!</p>";
		}
		
		// Set the results text
		textEntry.style.visibility = "hidden";
		quizContainer.innerHTML = result + questions[(current_question) / 2][2];
		
	}
	else if (current_question % 2 === 1) {
		quizContainer.innerHTML = questions[(current_question+1) / 2][0];
		
		textEntry.style.visibility = "visible";
		
	}
	
	console.log(current_question);
	
	// Increment current question
	current_question += 1;
	
	// Set button text
	submitButton.innerHTML = button_texts[current_question % 2];
}

document.addEventListener("DOMContentLoaded", function(event) { 
  quizContainer.innerHTML = questions[current_question][0];
  submitButton.innerHTML = button_texts[current_question % 2];
});