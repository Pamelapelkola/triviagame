var index = 0;
var countdowntimer = {}

var correct = 0;
var wrong = 0;

//var trivia {
// 'Which Twins player hit more career home runs wearing a Minnesota uniform ?', 
//     'In what year did the Twins win 100 games in a season ?', 
//     'Which of the following Twins have more career strikeouts in a Minnesota uniform ?', 
//     'Which of the following years did the Twins win the World Series ?', 
//     'This Twin won the American League batting title in his rookie year.'

var q1 = ['Which Twins player hit more career home runs wearing a Minnesota uniform?', ['A. Tony Oliva', ' B. Roy Sievers', ' C. Gary Gaetti', ' D. Harmon Killebrew'],
    ['false', 'false', 'false', 'true'],
    ['D. Harmon Killebrew']
]

var q2 = ['In what year did the Twins win 100 games in a season ?', [' A.1965', ' B. 1991', ' C. 2002', ' D. 1970'],
    ['true', 'false', 'false', 'false'],
    ['D.1965']
]
var q3 = ['Which of the following Twins have more career strikeouts in a Minnesota uniform ?', [' A. Camilo Pascual', ' B. Jim Kaat', ' C. Frank Viola', ' D. Bert Blyleven'],
    ['false', 'false', 'false', 'true'],
    ['D. Bert Blyleven']
]
var q4 = ['Which of the following years did the Twins win the World Series ?', [' A.1988', ' B. 1991', ' C. 1990', ' D. 1992'],
    ['false', 'true', 'false', 'false'],
    ['B. 1991']
]
var q5 = ['This Twin won the American League batting title in his rookie year.', [' A. Harmon Killebrew', ' B. Kirby Puckett', ' C. Rod Carew', ' D. Tony Oliva'],
    ['false', 'false', 'false', 'true'],
    ['D. Tony Oliva']
]

var questionArray = ['q1', 'q2', 'q3', 'q4', 'q5']

//loop array to print Q text on page
for (i = 0; i < q1.length; i++) {
    $('.q1').text(q1[0]) + '<br>';
    $('.a1').text(q1[1]);
}
for (i = 0; i < q2.length; i++) {
    $('.q2').text(q2[0]) + '<br>';
    $('.a2').text(q2[1]);
}
for (i = 0; i < q3.length; i++) {
    $('.q3').text(q3[0]) + '<br>';
    $('.a3').text(q3[1]);
}
for (i = 0; i < q4.length; i++) {
    $('.q4').text(q4[0]) + '<br>';
    $('.a4').text(q4[1]);
}
for (i = 0; i < q5.length; i++) {
    $('.q5').text(q5[0]) + '<br>';
    $('.a5').text(q5[1]);
}



//functions

 $(document).ready(function () {})


// function begin()
    //   $('#timer')
    //   .countdown('2017/01/01', function(event) {
    //     $(this).text(
    //       event.strftime('%D days %H:%M:%S')
    //     );
    //   });


// function answer()

// function correct()

// function wrong()

// function showscore()