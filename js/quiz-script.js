var quizContainer = document.getElementById('quiz-question');
var submitButton = document.getElementById('quiz-submit');
var textEntry = document.getElementById("answer_field");
var answerLabel = document.getElementById("answer-label");

var correctAnswers = 0;

var questions = [
	["<h3>What year did the United Nations declare food insecurity a global problem?</h3>", 2001,
		"In <b>2001</b>, food insecurity was declared a global problem, but even 20 years later it persists!", ""],
	["<h3>What rank is food insecurity out of the UN's Top 17 World Issues?", 2,
		"Food insecurity is ranked at <b>2nd</b> out of the top issues in the world!", ""],
	["<h3>What percentage of Americans do you think are food insecure before COVID-19?</h3>", 12.5,
		"<p>In 2020, an estimated 1 in 8 <b>(12.5%)</b> Americans were food insecure, equating to over <strong>38 million</strong> Americans, including almost <strong>12 million children</strong>. <a href=https://hungerandhealth.feedingamerica.org/understand-food-insecurity/>[Source]</a></p>", "%"],
	["<h3>What percentage of Americans do you think are food insecure since the pandemic?</h3>", 25,
		"<p>Since the onset of COVID-19, food insecurity has <strong>doubled</strong> to around <strong>25%</strong> in the United States.</p>", "%"]
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
		quizContainer.innerHTML = "<h3>That's all the questions!</h3>";
		answerLabel.innerHTML = "Your score: <b>" + correctAnswers.toString() + "/" + questions.length.toString() + " (" + Math.round(correctAnswers * 100 / questions.length) + "%).</b>";
		
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
		else if (inputVal === answerVal) {
			result = "<p><b>Correct!</b></p>";
			correctAnswers += 1;
		}
		else if ((inputVal > answerVal-2) && (inputVal < answerVal+2)) {
			result = "<p><b>Close!</b></p>";
			correctAnswers += 0.5;
		}
		else {
			result = "<p><b>Incorrect!</b></p>";
		}
		
		// Set the results text
		textEntry.style.visibility = "hidden";
		answerLabel.innerHTML = "Your answer: <b>" + inputVal.toString() + questions[(current_question) / 2][3] + "</b>";
		quizContainer.innerHTML = result + questions[(current_question) / 2][2];
		
	}
	else if (current_question % 2 === 1) {
		quizContainer.innerHTML = questions[(current_question+1) / 2][0];
		
		textEntry.style.visibility = "visible";
		answerLabel.innerHTML = "Enter your answer:";
		
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