var questionPool = [{
    question: "What team won the first Super Bowl?",
    choices: ["Kansas City Chiefs", "Green Bay Packers", "Dallas Cowboys", "New York Giants"],
    correct: 1,
    picture: "assets/images/packers.gif"
}, {
    question: "Which two NFL teams are tied for most fumbles in a season?",
    choices: ["49ers and Vikings", "Giants and 49ers", "Seahawks and Vikings", "Giants and Jets"],
    correct: 0,
    picture: "assets/images/peterson.gif"

}, {
    question: "How many NFL teams are named after cats?",
    choices: ["Three", "Six", "Four", "Five"],
    correct: 2,
    picture: "assets/images/bengals.gif"

}, {
    question: "Where did Michael Vick play for college?",
    choices: ["Virginia Tech", "BYU", "Miami", "Notre Dame"],
    correct: 0,
    picture: "assets/images/vick.gif"
}, {
    question: "How many superbowls have the Dallas Cowboys won?",
    choices: ["Five", "Four", "Six", "Three"],
    correct: 0,
    picture: "assets/images/aikmen.gif"
}, {
    question: "What city did the Colt play in before Indianapolis?",
    choices: ["Miami", "D.C.", "Nashville", "Baltimore"],
    correct: 3,
    picture: "assets/images/colts.gif"
}, {
    question: "What team has played in the AFC and NFC Championship?",
    choices: ["Detroit Lions", "Seattle Seahawks", "Arizona Cardinals", "Oakland Raiders"],
    correct: 1,
    picture: "assets/images/beastmode.gif"
}, {
    question: "Who is the quarterback of the Panthers?",
    choices: ["Michael Vick", "Eli Manning", "Joe Flacco", "Cam Newton"],
    correct: 3,
    picture: "assets/images/newton.gif"
}, {
    question: "How many NFL teams do not have cheerleaders?",
    choices: ["15", "2", "7", "4"],
    correct: 2,
    picture: "assets/images/cheer.gif"
}, {
    question: "Which college has produced the most NFL hall of famers?",
    choices: ["Ohio State", "Michigan", "Florida", "Notre Dame"],
    correct: 3,
    picture: "assets/images/rudy.gif"
}, {
    question: "When did the Chicago Bears win their last Super Bowl?",
    choices: ["1986", "1985", "2004", "2007"],
    correct: 0,
    picture: "assets/images/bears.gif"
}]

// new game button to reload 
function newgame() {
    location.reload();
}

$(document).ready(function () {
    
   
    var userClick ="";
    var running = false;
    var questionLength = questionPool.length;
    var qIndex;
    var index;
    var newArray = [];
    var questionArray = [];
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    var timer = 15;
    var intervalId;
    console.log(right);
    console.log(wrong);
    console.log(unanswered);

    // start game and fill questionArray
    $("#start").on("click", function () {
            $("#start").hide();
            renderQuestion();
            run();
            for(var i = 0; i < questionPool.length; i++) {
        questionArray.push(questionPool[i]);
    }
    // timer start, countdown and stop
        })
    function run(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }
    function decrement() {
        $("#timer").html("<p>  00 : " + timer + "</p>");
        timer --;
    
        if (timer === 0) {
            unanswered++;
            $("#answers").html("<p>Time! The answer is: " + qIndex.choices[qIndex.correct] + "</p>");
            pictureHide();
            stop();
        }	
    }
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    // pick a random question and render it
    function renderQuestion() {
        index = Math.floor(Math.random()*questionPool.length);
        qIndex = questionPool[index];
    
//    loop through answers and display
            $("#main").html("<p>" + qIndex.question + "</p>");
            for(var i = 0; i < qIndex.choices.length; i++) {
                var answerGuess = $("<div>");
                answerGuess.addClass("answerPick");
                answerGuess.html(qIndex.choices[i]);
                answerGuess.attr("value", i);
                $("#answers").append(answerGuess);
    }
    // get user choice from click on answers
    $(".answerPick").on("click", function () {
        userClick = parseInt($(this).attr("value"));
    // compare user guess to correct number, conditions for if it is correct
        if (userClick === qIndex.correct) {
            stop();
            userClick="";
            $("#answers").html("<p>Correct!</p>");
            pictureHide();
            right++;
    // else conditions if not right 
        } else {
            stop();
            userClick="";
            $("#answers").html("<p>Wrong!  " + qIndex.choices[qIndex.correct] + "</p>");
            pictureHide();
            wrong++;
        }
    })
    }
    // hide picture
    function pictureHide () {
        $("#answers").append("<img src=" + qIndex.picture + ">");
        newArray.push(qIndex);
        questionPool.splice(index,1);
    // timeout function for 15 seconds
       setTimeout(function() {
            $("#answers").empty();
            timer= 15;
    // if scores are as long as questionPool then display scores for right, wrong, unanswered
        if ((wrong + right + unanswered) === questionLength) {
            $("#main").empty();
            $("#main").html("<p>Score:   </p>");
            $("#answers").append("<p> Correct: " + right + "</p>" );
            $("#answers").append("<p> Not Correct: " + wrong + "</p>" );
            $("#answers").append("<p> Not Answered: " + unanswered + "</p>" );
            right = 0;
            wrong = 0;
            unanswered = 0;
    // otherwise run timer again and render a question with a gap of 3 seconds
        } else {
            run();
            renderQuestion();
        }
        }, 3000);
    }
    })