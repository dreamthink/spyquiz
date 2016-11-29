"use strict";

var questionsArray = [
	{
		questionText: "How do you feel about learning foreign languages?",
		questionChoices: ["Hola! 你好! Bonjour! Привет!", "I speak one foreign language", "I know a few words", "One language is enough of a challenge"], 
		correctAnswer: 0,
		correctDetails: "Hola! 你好! Bonjour! Привет!"
	},
	{
		questionText: "You think you are being followed. What do you do?",
		questionChoices: ["Confront the person directly and ask if they are following you", "Run as fast as you can!", "Change your route immediately", "Let the person follow you and discreetly try to get a detailed physical description"],
		correctAnswer: 3,
		correctDetails: "Let the person follow you and discreetly try to get a detailed physical description"
	},
	{
		questionText: "When at a party, you...",
		questionChoices: ["Attend parties strictly for the food", "Introduce yourself to everyone", "Stand in a corner and wait for someone to approach you", "Talk only to people you know"],
		correctAnswer: 1,
		correctDetails: "Introduce yourself to everyone"
	},
	{
		questionText: "Can you protect yourself in dangerous situations?",
		questionChoices: ["I'm a ninja", "Yikes! Help me!", "I can throw a punch or two", "I'm a scaredy cat"],
		correctAnswer: 0,
		correctDetails: "I'm a ninja"
	},
	{
		questionText: "Can you keep a secret?",
		questionChoices: ["Absolutely not", "Maybe, depends on what it is", "My lips are sealed", "Can I tell one or two people?"],
		correctAnswer: 2,
		correctDetails: "My lips are sealed"
	}
];

var currentQuestionNumber = 0,
correctTotal = 0,
totalNumberOfQuestions = questionsArray.length,
userSelectedChoiceArray = [];

function questionDisplay() {
	$("#prompt").text(questionsArray[currentQuestionNumber].questionText);
	$("#choices").empty();
	var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
	
	var buildEachChoiceHTML1 = "<label for='choice-one'><div class='choice'><input type='radio' class='option' id='choice-one' value=" + 0 + "> " + questionsArray[currentQuestionNumber].questionChoices[0] + "</div></label><br>";
	var buildEachChoiceHTML2 = "<label for='choice-two'><div class='choice'><input type='radio' class='option' id='choice-two' value=" + 1 + "> " + questionsArray[currentQuestionNumber].questionChoices[1] + "</div></label><br>";
	var buildEachChoiceHTML3 = "<label for='choice-three'><div class='choice'><input type='radio' class='option' id='choice-three' value=" + 2 + "> " + questionsArray[currentQuestionNumber].questionChoices[2] + "</div></label><br>";
	var buildEachChoiceHTML4 = "<label for='choice-four'><div class='choice'><input type='radio' class='option' id='choice-four' value=" + 3 + "> " + questionsArray[currentQuestionNumber].questionChoices[3] + "</div></label><br>";

	$("#choices").append(buildEachChoiceHTML1, buildEachChoiceHTML2, buildEachChoiceHTML3, buildEachChoiceHTML4);

	// for (var i = 0; i < totalNumberOfChoices; i++) {
		// var buildEachChoiceHTML = "<div class='option' value=" + i + "> " + questionsArray[currentQuestionNumber].questionChoices[i] + "</div>";
		// var buildEachChoiceHTML = "<input type='radio' class='option' value=" + i + "> " + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
		// $("#choices").append(buildEachChoiceHTML);
		// userSelectedChoiceArray.push()
	// }
	$(".questionNumberDisplay").text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestions);
}

$(document).ready(function() {
	// Initiate CSS typing animation and intro slider
	$(".css-typing").show();
	$("html").on("click", function() {
			$(".spyimage").fadeIn(2000);
			$(".btn-start").fadeIn(2000);
		});
	$(".startButton").click(function() {
		$(".startButton").toggle("bounce", { times: 3}, "slow", function() {
			$(".intro").hide();
			$("main").show();
			$(".results").hide();
			questionDisplay();
		});
	});

	$(".questionAndAnswerContainer").on("click", ".option", function() {
			var answer = $("input[class='option']:checked").val();
			userSelectedChoiceArray.push(answer);
			var correctAnswer = questionsArray[currentQuestionNumber].correctAnswer;
		
			if (answer == correctAnswer) {
				correctTotal++;
				// console.log(correctTotal);
				}

			$("#result-msg").append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
			$("#result-msg").append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");

			if (currentQuestionNumber + 1 == totalNumberOfQuestions) {
				$("#result").text(correctTotal + "/" + totalNumberOfQuestions);

				if (correctTotal == totalNumberOfQuestions) {
					$(".result-detail-msg").append("You are definitely spy material!");
				} else if (correctTotal == totalNumberOfQuestions - 1) {
					$(".result-detail-msg").append("You are kind of spy material.");
				} else if (correctTotal == totalNumberOfQuestions - 2) {
					$(".result-detail-msg").append("You have spy potential but need more training.");
				} else if (correctTotal == totalNumberOfQuestions - 3) {
					$(".result-detail-msg").append("You need a lot of training.");
				} else if (correctTotal == totalNumberOfQuestions - 4) {
					$(".result-detail-msg").append("You should consider a different career.");
				} else if (correctTotal === 0) {
					$(".result-detail-msg").append("Forget about being a spy.");
				}

				$(".questionAndAnswerContainer").hide();
				$(".results").show();
			} else {
				currentQuestionNumber++;
				questionDisplay();
			}

	});

// Starts a new game and resets values
	$("#againButton").on("click", function() {
		currentQuestionNumber = 0;
		correctTotal = 0;
		$(".result-detail-msg").empty();
		$("#result-msg").empty();
		$(".results").hide();
		$(".questionAndAnswerContainer").show();
		questionDisplay();
	});

// console.log(userSelectedChoiceArray);

});

