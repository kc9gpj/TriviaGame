var questionPool = [{
    question: "What team won the first Super Bowl?",
    choices: ["Kansas City Chiefs", "Green Bay Packers", "Dallas Cowboys", "New York Giants"],
    correct: 1
}, {
    question: "Which two NFL teams are tied for most fumbles in a season?",
    choices: ["49ers and Vikings", "Giants and 49ers", "Seahawks and Vikings", "Giants and Jets"],
    correct: 0
}, {
    question: "How many NFL teams are named after cats?",
    choices: ["Three", "Six", "Four", "Five"],
    correct: 2
}, {
    question: "Where did Michael Vick play for college?",
    choices: ["Virginia Teck", "BYU", "Miami", "Notre Dame"],
    correct: 0
}, {
    question: "How many superbowls have the Dallas Cowboys won?",
    choices: ["Five", "Four", "Six", "Three"],
    correct: 0
}, {
    question: "What city did the Colt play in before Indianapolis?",
    choices: ["Miami", "D.C.", "Nashville", "Baltimore"],
    correct: 3
}, {
    question: "What team has played in the AFC and NFC Championship?",
    choices: ["Detroit Lions", "Seattle Seahawks", "Arizona Cardinals", "Oakland Raiders"],
    correct: 1
}, {
    question: "Who is the quarterback of the Panthers?",
    choices: ["Michael Vick", "Eli Manning", "Joe Flacco", "Cam Newton"],
    correct: 3
}, {
    question: "How many NFL teams do not have cheerleaders?",
    choices: ["15", "2", "7", "4"],
    correct: 2
}, {
    question: "Which college has produced the most NFL hall of famers?",
    choices: ["Ohio State", "Michigan", "Florida", "Notre Dame"],
    correct: 3
}, {
    question: "When did the Chicago Bears win their last Super Bowl?",
    choices: ["1986", "1985", "2004", "2007"],
    correct: 0
}]
// new game button to reload javascript
function newgame() {
    location.reload();
}

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var questionArray = [];
var choicesArray = [];
var correctArray = [];
console.log(correct);
console.log(incorrect);
console.log(unanswered);
console.log(questionArray);
console.log(choicesArray);
console.log(correctArray);
// second to countdown
var number = 30;

//  Variable that will hold our interval ID when we execute, the "run" function
var intervalId;
//  The run function sets an interval, that runs the decrement function once a second.
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;
  //  Show the number in the #show-number tag.
  $("#timer").html("Time Left: " + number);
  //  Once number hits zero...
  if (number === 0) {
    //  run the stop function.
    stop();
  } }
//  The stop function
function stop() {
  //  Clears our intervalId, We just pass the name of the interval, to the clearInterval function.
  clearInterval(intervalId);
}
//  Execute the run function.
run();
// loop through objects

// $('#first'||'#second'||'#third'||'#fourth').click = function(event){
//     userGuess(event.click);
//     console.log(userGuess);

// }



$("button").click(function() {
    var fired_button = $(this).val();
    console.log(fired_button);
});

for (i = 0; i < questionPool.length; i++) {
    questionArray.push(questionPool[i].question);
    choicesArray.push(questionPool[i].choices);
    correctArray.push(questionPool[i].correct);
    $('#main').append(questionPool[i].question);
    $('#first').append(questionPool[i].choices[0]);
    $('#second').append(questionPool[i].choices[1]);
    $('#third').append(questionPool[i].choices[2]);
    $('#fourth').append(questionPool[i].choices[3]);
  
    if (fired_button === questionPool[i].correct) {
       
        correct++;
        number = 30;
        
    } else {
        incorrect++;
        number = 30;
    } 

// no answer

function unanswered(){
    unanswered++
}

//     for (var j = 0; j < questionPool[j].choices.length; j++) {
//     $('#answers').append("  <button>" + questionPool[j].choices + "</button>  ");
//     if (questionPool[i].correct);

// }
}



