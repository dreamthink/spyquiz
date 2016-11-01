"use strict";

$(document).ready(function() {
	$("html").on("click", function() {
		$(".spyimage").fadeIn(3000);
		$(".btn-start").fadeIn(5000);
	});

	$(".btn-start").on("click", function() {
		$(".intro").hide();
		$("main").show();
		$(".questionText").html(questionsArray[0].question);
		$(".possibleAnswers1").html(questionsArray[0].choices);
	});

});

var currentQuestionNumber = 0,
correctTotal = 0,
totalNumberOfQuestions = questionsArray.length;

function questionDisplay() {
	$("#prompt").text('"' + questionsArray[currentQuestionNumber].questionText + '"');
	$("#choices").empty();
	var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
	for (var i = 0; i < totalNumberOfChoices; i++) {
		var buildEachChoiceHTML
	}

}

var questionsArray = [
	{
		questionText: "How do you feel about learning foreign languages?",
		questionChoices: ["Hola! 你好! Bonjour! Привет!", "I speak one foreign language", "I know a few words", "One language is enough of a challenge"], 
		correctAnswer: 0
	},
	{
		questionText: "You think you are being followed. What do you do?",
		questionChoices: ["Confront the person directly and ask if they are following you", "Run as fast as you can!", "Change your route immediately", "Let the person follow you and discreetly try to get a detailed physical description"],
		correctAnswer: 3
	},
	{
		questionText: "When at a party, you...",
		questionChoices: ["Attend parties strictly for the food", "Introduce yourself to everyone", "Stand in a corner and wait for someone to approach you", "Talk only to people you know"],
		correctAnswer: 1
	},
	{
		questionText: "Can you protect yourself in dangerous situations?",
		questionChoices: ["I'm a ninja", "Yikes! Help me!", "I can throw a punch or two", "I'm a scaredy cat"],
		correctAnswer: 0
	},
	{
		questionText: "Can you keep a secret?",
		questionChoices: ["Absolutely not", "Maybe, depends on what it is", "My lips are sealed", "Can I tell one or two people?"],
		correctAnswer: 2
	}
];


