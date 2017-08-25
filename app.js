
var inquirer = require ("inquirer")
var Basic = require('./basic.js')
var Cloze = require ('./cloze.js')

var score = 0;


module.exports = Basic;
module.exports = Cloze;

inquirer.prompt ([
{
	type: 'list',
	name: "flashcard",
	message: "Which flashcard do you want to use",
	choices: ["Basic", "Cloze"],
}
])

.then(function(answer) {
	var quest1 = new Basic("Who was Goku's first villian in Dragonball Z", "raditz")
	if (answer.flashcard === "Basic")
	
	inquirer.prompt ([
{
	type: 'input',
	name: "question1",
	message: quest1.front
}

])
	.then(function(answer) {
	if (answer.question1.toLowerCase() === quest1.back)
	{
		console.log ("Correct")
		score++;
	}
	else {
		console.log ("sorry brah, you done goof")
	}

	var quest2 = new Basic("Who beat Cell in DBZ", "gohan")

	inquirer.prompt ([
{
	type: 'input',
	name: "question2",
	message: quest2.front
}

])
	.then(function(answer) {
		if(answer.question2.toLowerCase() ===quest2.back)
{
	console.log("Correct")
	score++;
}

	else {
		console.log ("sorry brah, you done goof")
	};
	var quest3 = new Basic("What is trunks and goten's fusion", "gotenks")

	inquirer.prompt ([
{
	type: 'input',
	name: "question3",
	message: quest3.front
}

])
	.then(function(answer) {
		if(answer.question3.toLowerCase() ===quest3.back)
{
	console.log("Correct")
	score++;
	console.log("This is the end of the game. Congratz you got " + score + "/3 correct")
}
	else {
		console.log ("sorry brah, you done goof. This is the end of the game, but at least you got " + score + "/3 correct")
	};

})

	})

});


else {

var q1 = new Cloze ("Vegeta", "Vegeta is Goku's rival")
inquirer.prompt ([
{
	type: 'input',
	name: "question1",
	message: q1.partial
}
])

.then(function(answer) {
		if(answer.question1.toLowerCase() === q1.deletez.toLowerCase())
{
	console.log("Correct")
	score++;
	console.log(q1.full)
}
	else {
		console.log ("sorry brah, you done goof")
		console.log (q1.full)
	};

var q2 = new Cloze ("19", "Vegeta defeated Android 19 after tearing off his arm")
inquirer.prompt ([
{
	type: 'input',
	name: "question2",
	message: q2.partial
}
])

.then(function(answer) {
		if(answer.question2.toLowerCase() === q2.deletez)
{
	console.log("Correct")
	score++;
	console.log(q2.full)
}
	else {
		console.log ("sorry brah, you done goof")
		console.log (q2.full)
	};

var q3 = new Cloze ("Tarble", "Tarble is brother of Vegeta")
inquirer.prompt ([
{
	type: 'input',
	name: "question3",
	message: q3.partial
}
])

.then(function(answer) {
		if(answer.question3.toLowerCase() === q3.deletez.toLowerCase())
{
	console.log("Correct")
	score++;
	console.log(q3.full)
	console.log("-----------------------------------------")
	console.log ("Congratz, you finished the game. You got " + score + "/3 correct")
}

else {
		console.log ("sorry brah, you done goof")
		console.log (q3.full)
		console.log("-----------------------------------------")
		console.log ("You finished the game. You got " + score + "/3 correct")
	};
})

})
})
}
})



