// HTML PAGE

/*
We'll want a body element. Inside body we'll have 
a header, main, and footer element. Dynamic HTML 
creation will take place in main element. Inside main
you'll have a start button.
*/

// JAVASCRIPT
/*
Attach an event listener to the start button. 
That listener's callback function will start the timer.
The timer will be created with the setInterval function. THe timer
will show in the header element

I will store my quiz questions and answers as an object 
inside an array. I will attach another event listener to the start button;
[ startBtn.addEventListener('click', displayQuestions) this callback
will cycle through the question objects and display the question and choices to
the screen. 

*/

// Create JavaScript references to HTML elements, i.e. the start button
// so that you can attach an event listener to it

// create your variables here
let startBtn = document.getElementById('start-button');

let carousel = document.querySelector(".carouselbox");

let timeEl = document.querySelector(".time");

function navigateToNextQuestion(questionNumber, wasPreviousAnswerCorrect) {

        evaluateUserChoice(wasPreviousAnswerCorrect);

    if (questionNumber < questionsArray.length) {

        let questionElement = document.createElement("h3");
        questionElement.textContent = questionsArray[questionNumber].question;
        carousel.appendChild(questionElement);

        let answerRightElement = document.createElement("button");
        answerRightElement.textContent = questionsArray[questionNumber].ansRight;
        carousel.appendChild(answerRightElement);
        answerRightElement.addEventListener("click", 
            function(event){
                // Stops event from bubbling up and new window opening
                event.stopPropagation();
                if ((questionNumber + 1 < questionsArray.length)) {
                    navigateToNextQuestion(questionNumber + 1, true);
                }
            }
        );

        let answerWrong1Element = document.createElement("button");        
        answerWrong1Element.textContent = questionsArray[questionNumber].ansWrong1;
        carousel.appendChild(answerWrong1Element);
        answerWrong1Element.addEventListener("click", 
            function(event){
                // Stops event from bubbling up and new window opening
                event.stopPropagation();
                if ((questionNumber + 1 < questionsArray.length)) {
                    navigateToNextQuestion(questionNumber + 1, false);
                }            
            }
        );

        let answerWrong2Element = document.createElement("button");        answerWrong2Element.textContent = questionsArray[questionNumber].ansWrong2;
        carousel.appendChild(answerWrong2Element);
        answerWrong2Element.addEventListener("click", 
            function(event){
                // Stops event from bubbling up and new window opening
                event.stopPropagation();
                if ((questionNumber + 1 < questionsArray.length)) {
                    navigateToNextQuestion(questionNumber + 1, false);
                }    
            }
        );

        let answerWrong3Element = document.createElement("button");        answerWrong3Element.textContent = questionsArray[questionNumber].ansWrong3;
        carousel.appendChild(answerWrong3Element);
        answerWrong3Element.addEventListener("click", 
            function(event){
                // Stops event from bubbling up and new window opening
                event.stopPropagation();
                if ((questionNumber + 1 < questionsArray.length)) {
                    navigateToNextQuestion(questionNumber + 1, false);
                }    
            }
        );

        // evaluateUserChoice(wasPreviousAnswerCorrect);
    }
}


function evaluateUserChoice(wasPreviousAnswerCorrect) {

    if (wasPreviousAnswerCorrect == true) {
        console.log("Good job!");
    } else {
        console.log("Bad job!");
        secondsLeft = secondsLeft-5;
    }   
}

var secondsLeft = 120;

function beginTimer () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft
    }, 1000);
    // do some stuff like 
    // start your timer; setInterval
    console.log('THe timer has started');
}

var questionsArray = [
    {
        question: "What day is today?",
        ansRight: "Wednesday",
        ansWrong1: "Sunday",
        ansWrong2: "Monday",
        ansWrong3: "Tuesday"
    },
    {
        question: "What day is tomorrow?",
        ansRight: "Thursday",
        ansWrong1: "Wednesday",
        ansWrong2: "Monday",
        ansWrong3: "Tuesday"
    },
]

// create your event listeners here

startBtn.addEventListener('click', function() {
    // console.log('It works!');
    beginTimer();
    navigateToNextQuestion(0, true);
});

