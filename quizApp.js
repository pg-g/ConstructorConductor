//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of 
//user objects, and we're also going to be creating lots of Question objects. Those would make two 
//perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters 
//and set them appropriatly
  //code here
var User = function(name, email, pw, totalScore) {
	this.name = name;
	this.email = email;
	this.pw = pw;
	this.totalScore = totalScore;
}

//Create a Question constructor that accepts title, answersArray, rightAnswer, 
//and difficulty parameters
  //code here
var Question = function(title, answersArray, rightAnswer, difficulty) {
	this.title = title;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.difficulty = difficulty;
}

//Create a users Array which is going to hold all of our users.
  //code here
users = [];

//Let's say three people signed up for our service, create 3 instances of User 
//and add each to the users Array
  //code here
users.push(new User('Cam', 'cam@cam.com', '123', 0));
users.push(new User('Ben', 'ben@cam.com', '567', 0));
users.push(new User('Kray', 'kray@cam.com', '910', 0));

//Create a questions Array which is going to hold all of our questions
  //code here
questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question 
//which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.
//Now push all of your instances of Question into the questions Array
  //code here
questions.push(new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', [true, false], true, 15));
questions.push(new Question('T/F: JavaScript is just a scripting version of Java', [true, false], false, 5));
questions.push(new Question('T/F: In Javascript, == doesn\'t check "type" but just the value - where === checks type and value', [true, false], true, 25));


console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and 
//verify that they're both holding the right data.
  //code here
for (var i = 0; i < users.length; i++) {
	console.log(users[i]);
}
for (var i = 0; i < questions.length; i++) {
	console.log(questions[i]);
}