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

    let questionElement = document.getElementById("question");
    questionElement.textContent = questionsArray[questionNumber].question;

    let answerRightElement = document.getElementById("correctAns");
    answerRightElement.textContent = questionsArray[questionNumber].ansRight;
    answerRightElement.addEventListener("click", 
        function(event){
            // Stops event from bubbling up and new window opening
            // event.stopPropagation();
            if (questionNumber + 1 < questionsArray.length) {
                navigateToNextQuestion(questionNumber + 1, true);
            } 
            else {
                finishedTest();
            }
            event.stopPropagation();
        }
    );

    let answerWrong1Element = document.getElementById("wrongAns1");        
    answerWrong1Element.textContent = questionsArray[questionNumber].ansWrong1;
    answerWrong1Element.addEventListener("click", 
        function(event){
            // Stops event from bubbling up and new window opening
            // event.stopPropagation();
            if (questionNumber + 1 < questionsArray.length) {
                navigateToNextQuestion(questionNumber + 1, false);
            }  
            else {
                finishedTest();
            }         
            event.stopPropagation();
        }
    );

    let answerWrong2Element = document.getElementById("wrongAns2");        answerWrong2Element.textContent = questionsArray[questionNumber].ansWrong2;
    answerWrong2Element.addEventListener("click", 
        function(event){
            // Stops event from bubbling up and new window opening
            // event.stopPropagation();
            if (questionNumber + 1 < questionsArray.length) {
                navigateToNextQuestion(questionNumber + 1, false);
            }    
            else {
                finishedTest();
            }
            event.stopPropagation();
        }
    );

    let answerWrong3Element = document.getElementById("wrongAns3");        answerWrong3Element.textContent = questionsArray[questionNumber].ansWrong3;
    answerWrong3Element.addEventListener("click", 
        function(event){
            // Stops event from bubbling up and new window opening
            // event.stopPropagation();
            if (questionNumber + 1 < questionsArray.length) {
                navigateToNextQuestion(questionNumber + 1, false);
            } 
            else {
                finishedTest();
            }
            event.stopPropagation();
        }
    );
}

function finishedTest() {
    
    window.alert ("Congratulations, you finished the test!");
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
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
            //when timer reaches zero, send to results page//
          }
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

    let questionHeader = document.createElement("h3");
    questionHeader.setAttribute("id", "question");
    questionHeader.textContent = questionsArray[0].question;
    carousel.appendChild(questionHeader);

    let correctAnsBtn = document.createElement("button");
    correctAnsBtn.setAttribute("id", "correctAns");    
    correctAnsBtn.textContent = questionsArray[0].ansRight;
    carousel.appendChild(correctAnsBtn);

    let wrongAnsBtn1 = document.createElement("button");
    wrongAnsBtn1.setAttribute("id", "wrongAns1");    
    wrongAnsBtn1.textContent = questionsArray[0].ansWrong1;
    carousel.appendChild(wrongAnsBtn1);

    let wrongAnsBtn2 = document.createElement("button");
    wrongAnsBtn2.setAttribute("id", "wrongAns2");
    wrongAnsBtn2.textContent = questionsArray[0].ansWrong2;
    carousel.appendChild(wrongAnsBtn2);

    let wrongAnsBtn3 = document.createElement("button");
    wrongAnsBtn3.setAttribute("id", "wrongAns3");    
    wrongAnsBtn3.textContent = questionsArray[0].ansWrong3;
    carousel.appendChild(wrongAnsBtn3);

    beginTimer();
    navigateToNextQuestion(0, true);
});

