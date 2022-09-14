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
var startBtn = document.getElementById('start-button');
var mainContainer = document.getElementById('main-container');

function displayQuestions(param1, data) {
    // go th rough your questiosn array
    for (let i = 0; i < questionsArray.length; i++) {

        console.log(questionsArray[i].ansRight);

        let questionElement = document.createElement("h3");
        questionElement.textContent = questionsArray[i].question;
        document.body.appendChild(questionElement);

        let answerRightElement = document.createElement("button");
        answerRightElement.textContent = questionsArray[i].ansRight;
        document.body.appendChild(answerRightElement);
        answerRightElement.addEventListener("click", 
            function(){
                evaluateUserChoice(true);
            }
        );
    
        let answerWrong1Element = document.createElement("button");        answerWrong1Element.textContent = questionsArray[i].ansWrong1;
        document.body.appendChild(answerWrong1Element);
        answerWrong1Element.addEventListener("click", 
            function(){
                evaluateUserChoice(false);
            }
        );

        let answerWrong2Element = document.createElement("button");        answerWrong2Element.textContent = questionsArray[i].ansWrong2;
        document.body.appendChild(answerWrong2Element);
        answerWrong2Element.addEventListener("click", 
            function(){
                evaluateUserChoice(false);
            }
        );

        let answerWrong3Element = document.createElement("button");        answerWrong3Element.textContent = questionsArray[i].ansWrong3;
        document.body.appendChild(answerWrong3Element);
        answerWrong3Element.addEventListener("click", 
            function(){
                evaluateUserChoice(false);
            }
        );

        




        // document.main.appendChild(questionText);
        // console.log("success");
        // h3.textContent = question
        // let answerText = document.createElement(p)
        // p.textContent = 
    }
    // one by one and fo rthe first question
    // you will create an h3 eelment and fill its text
    // with the first questions
    // then you will create 4 buttons, with each button
    // holding a choice. You will also attach event listeners
    // to each button.

    // you 
}

function evaluateUserChoice (fucker) {
    let clickedButtonValue = fucker;
    if (clickedButtonValue == true) {
        console.log("Good job!");
    } else {
        console.log("Bad job!");
        // TODO decrement the timer
    }    
}

function beginTimer () {
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
});

startBtn.addEventListener('click', displayQuestions)
