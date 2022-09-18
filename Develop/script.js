let startBtn = document.getElementById('start-button');

let carousel = document.querySelector(".carouselbox");

let timeEl = document.querySelector(".time");

let score = 0;

function navigateToNextQuestion(questionNumber, wasPreviousAnswerCorrect) {

    if (secondsLeft < 0) {
        timeEl.textContent = "";
    }

    evaluateUserChoice(wasPreviousAnswerCorrect);

    let questionElement = document.getElementById("question");
    questionElement.textContent = questionsArray[questionNumber].question;

    let answerRightElement = document.getElementById("correctAns");
    answerRightElement.textContent = questionsArray[questionNumber].ansRight;
    answerRightElement.addEventListener("click", 
        function(event){
            if (questionNumber + 1 < questionsArray.length) {
                navigateToNextQuestion(questionNumber + 1, true);
                score++;
            } 
            else {
                secondsLeft = 0;
                showResults();
            }
        }
    );

    let answerWrong1Element = document.getElementById("wrongAns1");        
    answerWrong1Element.textContent = questionsArray[questionNumber].ansWrong1;
    answerWrong1Element.addEventListener("click", 
        function(event){
            if (questionNumber + 1 < questionsArray.length) {
                navigateToNextQuestion(questionNumber + 1, false);
            }  
            else {
                secondsLeft = 0;
                showResults();
            }         
        }
    );

    let answerWrong2Element = document.getElementById("wrongAns2");        
    answerWrong2Element.textContent = questionsArray[questionNumber].ansWrong2;
    answerWrong2Element.addEventListener("click", 
        function(event){
            if (questionNumber + 1 < questionsArray.length) {
                navigateToNextQuestion(questionNumber + 1, false);
            }    
            else {
                secondsLeft = 0;
                showResults();
            }
        }
    );

    let answerWrong3Element = document.getElementById("wrongAns3");        answerWrong3Element.textContent = questionsArray[questionNumber].ansWrong3;
    answerWrong3Element.addEventListener("click", 
        function(event){
            if (questionNumber + 1 < questionsArray.length) {
                navigateToNextQuestion(questionNumber + 1, false);
            } 
            else {
                secondsLeft = 0;
                showResults();
            }
        }
    );
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
        timeEl.textContent = secondsLeft + " seconds left to complete the quiz";
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
    
    console.log('The timer has started');
}

let questionsArray = [cd
    {
        question: "What year was the Constitution written",
        ansRight: "1776",
        ansWrong1: "1787",
        ansWrong2: "1788",
        ansWrong3: "1812"
    },
    {
        question: "Why did the British lose?",
        ansWrong1: "They were bored.",
        ansRight: "The Americans had better kung-fu.",
        ansWrong2: "Democracy.",
        ansWrong3: "They didn't lose, they were just taking a breather.",
    },
    {
        question: "What legal principle was established by the Supreme Court's decision in Marbury v. Madison?",
        ansWrong1: "presumption of innocence",
        ansWrong2: "the right to a lawyer",
        ansRight: "judicial review",
        ansWrong3: "*eagle shriek"
    },
    {
        question: "Who was the 3rd president of the United States?",
        ansRight: "Thomas Jefferson",
        ansWrong1: "James Madison",
        ansWrong2: "George Washington",
        ansWrong3: "Uncle Sam",
    },
    {
        question: "What year did the United States go to the Moon?",
        ansWrong1: "1969",
        ansWrong2: "1972",
        ansWrong3: "2001: A Space Odyssey",
        ansRight: "Who says they did? I want answers!",
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

function showResults() {   
    timeEl.textContent = "";
    let resultsDiv = document.createElement("div");
    let resultsHeader = document.createElement("h3");
    resultsHeader.setAttribute("id", "resultsHeader");
    resultsHeader.textContent = "All done!";
    resultsDiv.appendChild(resultsHeader);

    let resultsScore = document.createElement("p");
    resultsScore.setAttribute("id", "resultsScore");
    resultsScore.textContent = "Your final score is " + score + ".";
    resultsDiv.appendChild(resultsScore);

    let initials = document.createElement("input");
    initials.setAttribute("id", "initials");
    initials.setAttribute("placeholder", "Enter initials");
    resultsDiv.appendChild(initials);

    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.textContent = "Submit";
    resultsDiv.appendChild(submitBtn);
    submitBtn.addEventListener("click", 
        function(event){
            resultsHeader.textContent = "Highscores";
            resultsScore.textContent = initials.value + " - " + score;
            let goBackBtn = document.createElement("button");
            goBackBtn.setAttribute("id", "goBackBtn");
            goBackBtn.textContent = "Go Back";
            resultsDiv.replaceChild(goBackBtn, initials);
            submitBtn.textContent = "Clear Highscores";
            
        }
    );

    document.getElementById("main-container").replaceChild(resultsDiv, carousel);
}
