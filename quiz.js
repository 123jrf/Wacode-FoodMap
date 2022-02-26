var quizContainer = document.getElementById('quiz-question');
var resultsContainer = document.getElementById('quiz-results');
var submitButton = document.getElementById('quiz-submit');

function helloworld() {
	let inputVal = document.getElementById("quiz-entry").value;
	resultsContainer.innerHTML = inputVal;
}

document.addEventListener("DOMContentLoaded", function(event) { 
  quizContainer.innerHTML = "<p>Hello, world!</p>";
});