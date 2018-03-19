var index = 0;
var correct = 0;
var wrong = 0;
var answer = ["D. Harmon Killebrew", "A. 1965", "D. Bert Blyleven", "B. 1991", "D. Tony Oliva"] 

// timer
var count = 60;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    if (count < 0) {
        clearInterval(counter);
        alert("Game Over!!")
        //counter ended, do something here
        return;
    }
    document.getElementById("timer").innerHTML = count + " secs";
}




// var trivia {
// 'Which Twins player hit more career home runs wearing a Minnesota uniform ?', 
//     'In what year did the Twins win 100 games in a season ?', 
//     'Which of the following Twins have more career strikeouts in a Minnesota uniform ?', 
//     'Which of the following years did the Twins win the World Series ?', 
//     'This Twin won the American League batting title in his rookie year.'

var q1 = 'Which Twins player hit more career home runs wearing a Minnesota uniform?';


    var q2 ='In what year did the Twins win 100 games in a season ?';


        var q3 ='Which of the following Twins have more career strikeouts in a Minnesota uniform ?';


            var q4 ='Which of the following years did the Twins win the World Series ?';


                var q5 ='This Twin won the American League batting title in his rookie year.';        


// function begin()
$(document).ready(function () {})

index = 0;
$('#trivia').append('<button id="startButton">Start</button>');
$('#startButton').on('click', function () {
    $(this).hide();
    triviaquestions();
})



function triviaquestions() {
    $('.q1').text(q1) + '<br>';
    $('.q2').text(q2) + '<br>';
    $('.q3').text(q3) + '<br>';
    $('.q4').text(q4) + '<br>';
    $('.q5').text(q5) + '<br>';

}

function test(form) {
    for (j = 0; j < 5; j++) {
        currQuestion = j * 4;
        for (i = 0; i < 4; i++) {
            if (form.elements[i + currQuestion].checked) {
                if (form.elements[i + currQuestion].value === answer[j]) {
                   answerCorrect()
                } else {
                    answerWrong()
                }
            }
        }
    }
}

    function answerCorrect() {
        correct++;
       alert("Correct!");
       console.log("correct");
   }

   function answerWrong() {
       wrong++;
       alert("Incorrect!");
       console.log("wrong");
   }

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	timer.stop();
    $('.timer').empty();
}