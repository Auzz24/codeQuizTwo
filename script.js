var startBtn = document.getElementById("startBtn");
var navBar = document.getElementById("navBar");
var timerDiv = document.getElementById("timer");
var secondsLeft = 59;

// function startQuiz() {
//   startBtn.addEventListener("click", questionOne);
//   startBtn.addEventListener("click", countDown);
// }

function wrongAnswer(){
  secondsLeft -= 5;
};

function countDown(){
  var timer = setInterval(function(){
    timerDiv.innerHTML = secondsLeft;
    if(secondsLeft ===0){
      clearInterval(timer);
      window.alert("You Lost")
    }
    secondsLeft --;
  }, 1000);
};

function questionOne() {
  countDown();
  var startSection = document.getElementById("startQuiz");
  startSection.remove();
  var questionOne = document.createElement("div");
  questionOne.setAttribute("id", "questionOne");
  var answerOne = document.createElement("button");
 //answerOne.setAttribute("class", "wrongAnswer");
  var answerTwo = document.createElement("button");
  //answerTwo.setAttribute("class", "wrongAnswer");
  var answerThree = document.createElement("button");
  //answerThree.setAttribute("class", "wrongAnswer");
  var answerCorrect = document.createElement("button");
  questionOne.innerText =
    "Which of the following is an actual JavaScript data type?";
    answerOne.innerText =
    "Earth"
    answerTwo.innerText =
    "wind"
    answerThree.innerText =
    "Fire"
    answerCorrect.innerText =
    "Number"
  navBar.appendChild(questionOne);
  questionOne.appendChild(answerOne);
  questionOne.appendChild(answerTwo);
  questionOne.appendChild(answerThree);
  questionOne.appendChild(answerCorrect);
  answerCorrect.setAttribute("id", "answerCorrect");
  answerOne.setAttribute("class", "wrongAnswerOne");
  answerTwo.setAttribute("class", "wrongAnswerTwo");
  answerThree.setAttribute("class", "wrongAnswerThree");
  answerCorrect.addEventListener("click", questionTwo);
  var wrongAnswerOne = document.querySelector(".wrongAnswerOne");
  wrongAnswerOne.addEventListener("click", wrongAnswer);
  var wrongAnswerTwo = document.querySelector(".wrongAnswerTwo");
  wrongAnswerTwo.addEventListener("click", wrongAnswer);
  var wrongAnswerThree = document.querySelector(".wrongAnswerThree");
  wrongAnswerThree.addEventListener("click", wrongAnswer);
}


function  questionTwo(){
    var questionOne = document.getElementById("questionOne")
    questionOne.innerHTML="Hello???"
    var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  var answerThree = document.createElement("button");
  var answerCorrect = document.createElement("button");
  questionOne.appendChild(answerOne);
  questionOne.appendChild(answerTwo);
  questionOne.appendChild(answerThree);
  questionOne.appendChild(answerCorrect);
    answerCorrect.innerHTML= "HHHHHHHH";
    answerOne.innerHTML= "3434343";
    answerTwo.innerHTML="rrrrrrr";
    answerThree.innerHTML="please ework";
    answerCorrect.setAttribute("id", "answerCorrect");
    answerOne.setAttribute("class", "wrongAnswerOne");
    answerTwo.setAttribute("class", "wrongAnswerTwo");
    answerThree.setAttribute("class", "wrongAnswerThree");
    answerCorrect.addEventListener("click", questionThree);
    var wrongAnswerOne = document.querySelector(".wrongAnswerOne");
    wrongAnswerOne.addEventListener("click", wrongAnswer);
    var wrongAnswerTwo = document.querySelector(".wrongAnswerTwo");
    wrongAnswerTwo.addEventListener("click", wrongAnswer);
    var wrongAnswerThree = document.querySelector(".wrongAnswerThree");
    wrongAnswerThree.addEventListener("click", wrongAnswer);
};

function questionThree(){
    var questionOne = document.getElementById("questionOne")
    questionOne.innerHTML="TINY?"
    var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  var answerThree = document.createElement("button");
  var answerCorrect = document.createElement("button");
  questionOne.appendChild(answerOne);
  questionOne.appendChild(answerTwo);
  questionOne.appendChild(answerThree);
  questionOne.appendChild(answerCorrect);
    answerCorrect.innerHTML= "Is the best";
    answerOne.innerHTML= "no good";
    answerTwo.innerHTML="bad gurl";
    answerThree.innerHTML="not fun";
    answerCorrect.setAttribute("id", "answerCorrect");
    answerOne.setAttribute("class", "wrongAnswerOne");
    answerTwo.setAttribute("class", "wrongAnswerTwo");
    answerThree.setAttribute("class", "wrongAnswerThree");
    answerCorrect.addEventListener("click", endQuiz);
    var wrongAnswerOne = document.querySelector(".wrongAnswerOne");
    wrongAnswerOne.addEventListener("click", wrongAnswer);
    var wrongAnswerTwo = document.querySelector(".wrongAnswerTwo");
    wrongAnswerTwo.addEventListener("click", wrongAnswer);
    var wrongAnswerThree = document.querySelector(".wrongAnswerThree");
    wrongAnswerThree.addEventListener("click", wrongAnswer);
};



function endQuiz(){
    var questionOne = document.getElementById("questionOne");
    questionOne.remove();
    var highScoreHeader = document.createElement("H1");
    highScoreHeader.innerHTML = "HIGH SCORES"
    navBar.appendChild(highScoreHeader);
};

startBtn.onclick = questionOne;
//startBtn.onclick = countDown;

