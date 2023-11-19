var firstNumber = []; //stores the first value 
var secondNumber = []; //stores the second value 
var thirdNumber = []; //stores the third value 

//generates a list of numbers to be used in the program
function numberGenerator(){
  for (var i = 0; i < 12; i++){
    firstNumber.push(i);
    secondNumber.push(i*2);
    thirdNumber.push(i*3);
  }
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(thirdNumber);
}

//the global variables
var score = 0;
var correct;
var storedValue1;
var storedValue2;
var storedValue3;
var questionNumber = 0;
var blank = "";
var timeMedium = 120;
var timeHard = 240;
var correctList = [];

//brings user to selection screen from home screen 
onEvent("startButton", "click", function( ) {
  setScreen("rulesExplainedPage");
  numberGenerator();
});

//brings user from instruction page to operation select page
onEvent("agreeButton", "click", function( ) {
  setScreen("operationSelect");
});

//brings user to the rules page
onEvent("rulesButton", "click", function( ) {
  setScreen("rulesExplainedPage");
});

//brings user from end page back to selection page
onEvent("backSelectionButton", "click", function() {
  //resets the scores and app so the user can do another operation
  setScreen("operationSelect");
  score = 0;
  questionNumber = 0;
  correctList = [];
  timeMedium = 120;
  timeHard = 240;
});

//Brings user to difficulty select screen 
onEvent("subtractionButton", "click", function( ) {
  setScreen("subtractionDifficultySelect");
});
onEvent("additionButton", "click", function( ) {
  setScreen("additionDifficultySelect");
});
onEvent("divisionButton", "click", function( ) {
  setScreen("divisionDifficultySelect");
});
onEvent("multiplicationButton", "click", function( ) {
  setScreen("multiplicationDifficultySelect");
});

//subtraction difficulty screen select navigation
onEvent("subtractionEasyButton", "click", function( ) {
  setScreen("subtractionDifficultyEasy");
});
onEvent("subtractionMediumButton", "click", function( ) {
  setScreen("subtractionDifficultyMedium");
});
onEvent("subtractionHardButton", "click", function( ) {
  setScreen("subtractionDifficultyHard");
});

//addition difficulty screen select navigation
onEvent("additionEasyButton", "click", function( ) {
  setScreen("additionDifficultyEasy");
});
onEvent("additionMediumButton", "click", function( ) {
  setScreen("additionDifficultyMedium");
});
onEvent("additionHardButton", "click", function( ) {
  setScreen("additionDifficultyHard");
});


//division difficulty screen select navigation 
onEvent("divisionEasyButton", "click", function( ) {
  setScreen("divisionDifficultyEasy");
});
onEvent("divisionMediumButton", "click", function( ) {
    setScreen("divisionDifficultyMedium");
});
onEvent("divisionHardButton", "click", function( ) {
    setScreen("divisionDifficultyHard");
});


//multiplication difficulty screen select navigation 
onEvent("multiplicationEasyButton", "click", function( ) {
  setScreen("multiplicationDifficultyEasy");
});
onEvent("multiplicationMediumButton", "click", function( ) {
  setScreen("multiplicationDifficultyMedium");
});
onEvent("multiplicationHardButton", "click", function( ) {
  setScreen("multiplicationDifficultyHard");
});


// addition easy
onEvent("additionEasyButton", "click", function(){
   nextQuestionAdditionEasy(); //calls the first question
  });
  
function checkCorrectAdditionEasy(userInput,correctAnswer){
 if(userInput === correctAnswer){
   score = score + 1;
 }
 questionNumber++;
}
onEvent("additionEasySubmitButton", "click", function( ) {

 checkCorrectAdditionEasy(getNumber("additionEasyText"), correct);
 console.log(getNumber("additionEasyText"));
 nextQuestionAdditionEasy();
 setProperty("additionEasyText", "text", blank); //clears out text box
});

//the function for next question
function nextQuestionAdditionEasy(){
 if (questionNumber < 5){
  storedValue1 = (firstNumber[randomNumber(0,6)]*randomNumber(1,2));
  storedValue2 = (secondNumber[randomNumber(0,6)]*randomNumber(1,2));
  console.log(storedValue1);
  console.log(storedValue2);
  setText("additionEasyLabelOutput", storedValue1 + "+" +  storedValue2);
  correct = storedValue1 + storedValue2;
  console.log(correct);
  correctList.push(correct);
  console.log(correctList);

  } else if ((questionNumber == 5)) {
    //If the user has answered more than 5 questions, change the screen and display how many questions are correct
    setScreen("endResult");
    setText("endResultLabel", ("You answered " + score) + " questions out of 5 correctly.");
    setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
  }
}

//addition medium
onEvent("additionMediumButton", "click", function(){
  nextQuestionAdditionMedium(); //calls the first question
  //timer function for the program 
   timedLoop(1000, function() {
  timeMedium = timeMedium - 1;
  setText ("timerLabelAdditionMedium", "Time Left: " + timeMedium);
  if (timeMedium === 0) {
    setScreen("endResult"); 
    setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
    setText("endAnswerOutput", "The correct answers in order were: " + correctList + "\n");
  }
});

 });
 
function checkCorrectAdditionMedium(userInput,correctAnswer){
if(userInput === correctAnswer){
  score = score + 1;
}
questionNumber++;
}

//processes the question
onEvent("additionMediumSubmitButton", "click", function( ) {
checkCorrectAdditionMedium(getNumber("additionMediumText"), correct);
console.log(getNumber("additionMediumText"));
nextQuestionAdditionMedium();
setProperty("additionMediumText", "text", blank); //clears out text box
});

//the function for next question
function nextQuestionAdditionMedium(){
if (questionNumber < 7){

 var index = randomNumber(3, 8);
 storedValue1 = (firstNumber[index]*randomNumber(2,3));
 storedValue2 = (secondNumber[index]*randomNumber(2,3));
 console.log(storedValue1);
 console.log(storedValue2);
 setText("additionMediumLabelOutput", storedValue1 + "+" +  storedValue2);
 correct = storedValue1 + storedValue2;
 console.log(correct);
//adds the correct number to the list
 correctList.push(correct);
 console.log(correctList);
 
 } else if ((questionNumber == 7)) {
   //If the user has answered more than 7 questions, change the screen and display how many questions are correct
   setScreen("endResult"); 
   setText("endResultLabel", "You answered " + score + " questions out of 7 correctly.");
   setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
 }
}

//addition hard
onEvent("additionHardButton", "click", function(){
  nextQuestionAdditionHard(); //calls the first question
  //timer function for the program 
  timedLoop(1000, function() {
    timeHard = timeHard - 1;
    setText ("timerLabelAdditionHard", "Time Left: " + timeHard);
    if (timeHard === 0) {
      setScreen("endResult"); 
      setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
      setText("endAnswerOutput", "The correct answers in order were: " + correctList + "\n");
    }
  });
 });
 
function checkCorrectAdditionHard(userInput,correctAnswer){
if(userInput === correctAnswer){
  score = score + 1;
}
questionNumber++;
}
onEvent("additionHardSubmitButton", "click", function( ) {
checkCorrectAdditionHard(getNumber("additionHardText"), correct);
console.log(getNumber("additionHardText"));
nextQuestionAdditionHard();
setProperty("additionHardText", "text", blank); //clears out text box
});

//the function for next question
function nextQuestionAdditionHard(){
if (questionNumber < 7){

 var index = randomNumber(5, 11);
 storedValue1 = (firstNumber[index]*randomNumber(3,5));
 storedValue2 = (secondNumber[index]*randomNumber(3,5));
 storedValue3 = (thirdNumber[index]*randomNumber(3,5));
 console.log(storedValue1);
 console.log(storedValue2);
 console.log(storedValue3);
 setText("additionHardLabelOutput", storedValue1 + "+" +  storedValue2 + "+" +  storedValue3);
 correct = storedValue1 + storedValue2 + storedValue3;
 console.log(correct);
 correctList.push(correct);
 console.log(correctList);

 } else if ((questionNumber == 7)) {
   //If the user has answered more than 7 questions, change the screen and display how many questions are correct
   setScreen("endResult");
   setText("endResultLabel", "You answered " + score + " questions out of 7 correctly.");
   setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
 }
}

//subtraction easy
onEvent("subtractionEasyButton", "click", function(){
  nextQuestionSubtractionEasy(); //calls the first question
 });
 
function checkCorrectSubtractionEasy(userInput,correctAnswer){
if(userInput === correctAnswer){
  score = score + 1;
}
questionNumber++;
}
onEvent("subtractionEasySubmitButton", "click", function( ) {
checkCorrectSubtractionEasy(getNumber("subtractionEasyText"), correct);
console.log(getNumber("subtractionEasyText"));
nextQuestionSubtractionEasy();
setProperty("subtractionEasyText", "text", blank); //clears out text box
});

//the function for next question
function nextQuestionSubtractionEasy(){
if (questionNumber < 5){

 var index = randomNumber(0, 6);
 storedValue1 = (firstNumber[index]*randomNumber(0,2));
 storedValue2 = (secondNumber[index]*randomNumber(0,2));
 console.log(storedValue1);
console.log(storedValue2);
 setText("subtractionEasyLabelOutput", storedValue1 + "-" +  storedValue2);
 correct = storedValue1 - storedValue2;
 console.log(correct);
 correctList.push(correct);
 console.log(correctList);

 } else if ((questionNumber == 5)) {
   //If the user has answered more than 5 questions, change the screen and display how many questions are correct
   setScreen("endResult");
   setText("endResultLabel", ("You answered " + score) + " questions out of 5 correctly.");
   setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
 }
}

// subtraction medium 
onEvent("subtractionMediumButton", "click", function(){
    nextQuestionSubtractionMedium(); //calls the first question
    //timer function for the program 
    timedLoop(1000, function() {
      timeMedium = timeMedium - 1;
      setText ("timerLabelSubtractionMedium", "Time Left: " + timeMedium);
      if (timeMedium === 0) {
        setScreen("endResult"); 
        setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
        setText("endAnswerOutput", "The correct answers in order were: " + correctList + "\n");
      }
    });
   });
   
  function checkCorrectSubtractionMedium(userInput,correctAnswer){
  if(userInput === correctAnswer){
    score = score + 1;
  }
  questionNumber++;
  }
  onEvent("subtractionMediumSubmitButton", "click", function( ) {
  checkCorrectSubtractionMedium(getNumber("subtractionMediumText"), correct);
  console.log(getNumber("subtractionMediumText"));
  nextQuestionSubtractionMedium();
  setProperty("subtractionMediumText", "text", blank); //clears out text box
  });
  
  //the function for next question
  function nextQuestionSubtractionMedium(){
  if (questionNumber < 7){
  
   var index = randomNumber(1, 12);
   storedValue1 = (firstNumber[index]*randomNumber(1,3));
   storedValue2 = (secondNumber[index]*randomNumber(1,3));
   console.log(storedValue1);
  console.log(storedValue2);
   setText("subtractionMediumLabelOutput", storedValue1 + "-" +  storedValue2);
   correct = storedValue1 - storedValue2;
   console.log(correct);
   correctList.push(correct);
   console.log(correctList);

   } else if ((questionNumber == 7)) {
     //If the user has answered more than 7 questions, change the screen and display how many questions are correct
     setScreen("endResult");
     setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
     setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
   }
  }

// subtraction hard
onEvent("subtractionHardButton", "click", function(){
    nextQuestionSubtractionHard(); //calls the first question
    //timer function for the program 
    timedLoop(1000, function() {
      timeHard = timeHard - 1;
      setText ("timerLabelSubtractionHard", "Time Left: " + timeHard);
      if (timeHard === 0) {
        setScreen("endResult"); 
        setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
        setText("endAnswerOutput", "The correct answers in order were: " + correctList + "\n");
      }
    });
   });
  
   // parameter checks if the answer is correct
  function checkCorrectSubtractionHard(userInput,correctAnswer){
  if(userInput === correctAnswer){
    score = score + 1;
  }
  questionNumber++;
  }
  onEvent("subtractionHardSubmitButton", "click", function( ) {
  checkCorrectSubtractionHard(getNumber("subtractionHardText"), correct);
  console.log(getNumber("subtractionHardText"));
  nextQuestionSubtractionHard();
  setProperty("subtractionHardText", "text", blank); //clears out text box
  });
  
  //the function for next question
  function nextQuestionSubtractionHard(){
  if (questionNumber < 7){
  
   var index = randomNumber(3, 12);
   storedValue1 = (firstNumber[index]*randomNumber(3,5));
   storedValue2 = (secondNumber[index]*randomNumber(3,5));
   storedValue3 = (thirdNumber[index]*randomNumber(3,5));
   console.log(storedValue1);
  console.log(storedValue2);
   setText("subtractionHardLabelOutput", storedValue1 + "-" +  storedValue2 + "-" + storedValue3);
   correct = storedValue1 - storedValue2 - storedValue3;
   console.log(correct);
   correctList.push(correct);
   console.log(correctList);

   } else if ((questionNumber == 7)) {
     //If the user has answered more than 7 questions, change the screen and display how many questions are correct
     setScreen("endResult");
     setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
     setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
   }
  }

//divisionEasy
  onEvent("divisionEasyButton", "click", function(){
    nextQuestionDivisionEasy(); //calls the first question
   });
   
  function checkCorrectDivisionEasy(userInput,correctAnswer){
  if(userInput === correctAnswer){
    score = score + 1;
  }
  questionNumber++;
  }
  onEvent("divisionEasySubmitButton", "click", function( ) {
  checkCorrectDivisionEasy(getNumber("divisionEasyText"), correct);
  console.log(getNumber("divisionEasyText"));
  nextQuestionDivisionEasy();
  setProperty("divisionEasyText", "text", blank); //clears out text box
  });
  
  //the function for next question
  function nextQuestionDivisionEasy(){
  if (questionNumber < 5){
  
   var index = randomNumber(1, 10);
   storedValue2 = (firstNumber[index]*randomNumber(1,2));
   storedValue1 = (storedValue2*randomNumber(1,10));
   console.log(storedValue1);
  console.log(storedValue2);
   setText("divisionEasyLabelOutput", storedValue1 + "÷" +  storedValue2);
   correct = storedValue1 / storedValue2;
   console.log(correct);
   correctList.push(correct);
   console.log(correctList);

   } else if ((questionNumber == 5)) {
     //If the user has answered more than 5 questions, change the screen and display how many questions are correct
     setScreen("endResult");
     setText("endResultLabel", ("You answered " + score) + " questions out of 5 correctly.");
     setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
   }
  } 
  
    //divisionMedium
  onEvent("divisionMediumButton", "click", function(){
    nextQuestionDivisionMedium(); //calls the first question
    //timer function for the program 
    timedLoop(1000, function() {
      timeMedium = timeMedium - 1;
      setText ("timerLabelDivisionMedium", "Time Left: " + timeMedium);
      if (timeMedium === 0) {
        setScreen("endResult"); 
        setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
        setText("endAnswerOutput", "The correct answers in order were: " + correctList + "\n");
      }
    });
   });
   
  function checkCorrectDivisionMedium(userInput,correctAnswer){
  if(userInput === correctAnswer){
    score = score + 1;
  }
  questionNumber++;
  }
  onEvent("divisionMediumSubmitButton", "click", function( ) {
  checkCorrectDivisionMedium(getNumber("divisionMediumText"), correct);
  console.log(getNumber("divisionMediumText"));
  nextQuestionDivisionMedium();
  setProperty("divisionMediumText", "text", blank); //clears out text box
  });
  
  //the function for next question
  function nextQuestionDivisionMedium(){
  if (questionNumber < 7){
  
   var index = randomNumber(5, 11);
    storedValue2 = (firstNumber[index]*randomNumber(2,3));
    storedValue1 = (storedValue2*randomNumber(1,20));
   console.log(storedValue1);
  console.log(storedValue2);
   setText("divisionMediumLabelOutput", storedValue1 + "÷" +  storedValue2);
   correct = storedValue1 / storedValue2;
   console.log(correct);
   correctList.push(correct);
   console.log(correctList);

   } else if ((questionNumber == 7)) {
     //If the user has answered more than 7 questions, change the screen and display how many questions are correct
     setScreen("endResult");
     setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
     setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
   }
  } 


   
  //divisionHard
 onEvent("divisionHardButton", "click", function(){
    nextQuestionDivisionHard(); //calls the first question
    //timer function for the program 
    timedLoop(1000, function() {
      timeHard = timeHard - 1;
      setText ("timerLabelDivisionHard", "Time Left: " + timeHard);
      if (timeHard === 0) {
        setScreen("endResult"); 
        setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
        setText("endAnswerOutput", "The correct answers in order were: " + correctList + "\n");
      }
    });
   });
   
  function checkCorrectDivisionHard(userInput,correctAnswer){
  if(userInput === correctAnswer){
    score = score + 1;
  }
  questionNumber++;
  }
  onEvent("divisionHardSubmitButton", "click", function( ) {
  checkCorrectDivisionHard(getNumber("divisionHardText"), correct);
  console.log(getNumber("divisionHardText"));
  nextQuestionDivisionHard();
  setProperty("divisionHardText", "text", blank); //clears out text box
  });
  
  //the function for next question
  function nextQuestionDivisionHard(){
  if (questionNumber < 7){
  
   var index = randomNumber(4, 11);
    storedValue2 = (firstNumber[index]*randomNumber(2,5));
    storedValue1 = (storedValue2*randomNumber(16,51));
   console.log(storedValue1);
  console.log(storedValue2);
   setText("divisionHardLabelOutput", storedValue1 + "÷" +  storedValue2);
   correct = storedValue1 / storedValue2;
   console.log(correct);
   correctList.push(correct);
   console.log(correctList);

   } else if ((questionNumber == 7)) {
     //If the user has answered more than 7 questions, change the screen and display how many questions are correct
     setScreen("endResult");
     setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
     setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
   }
  } 


  //multiplicationEasy

  onEvent("multiplicationEasyButton", "click", function(){
    nextQuestionMultiplicationEasy(); //calls the first question
   });
   
  function checkCorrectMultiplicationEasy(userInput,correctAnswer){
  if(userInput === correctAnswer){
    score = score + 1;
  }
  questionNumber++;
  }
  onEvent("multiplicationEasySubmitButton", "click", function( ) {
  checkCorrectMultiplicationEasy(getNumber("multiplicationEasyText"), correct);
  console.log(getNumber("multiplicationEasyText"));
  nextQuestionMultiplicationEasy();
  setProperty("multiplicationEasyText", "text", blank); //clears out text box
  });
  
  //the function for next question
  function nextQuestionMultiplicationEasy(){
  if (questionNumber < 5){
  
   var index1 = randomNumber(0, 11);
   var index2 = randomNumber(0, 11);
   storedValue1 = (firstNumber[index1]);
   storedValue2 = (firstNumber[index2]);
   console.log(storedValue1);
   console.log(storedValue2);
   setText("multiplicationEasyLabel", storedValue1 + "x" +  storedValue2);
   correct = storedValue1 * storedValue2;
   console.log(correct);
   correctList.push(correct);
   console.log(correctList);

   } else if ((questionNumber == 5)) {
     //If the user has answered more than 5 questions, change the screen and display how many questions are correct
     setScreen("endResult");
     setText("endResultLabel", ("You answered " + score) + " questions out of 5 correctly.");
     setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
   }
  } 
  

 //multiplicationMedium
 onEvent("multiplicationMediumButton", "click", function(){
  nextQuestionMultiplicationMedium(); //calls the first question
  //timer function for the program 
  timedLoop(1000, function() {
    timeMedium = timeMedium - 1;
    setText ("timerLabelMultiplicationMedium", "Time Left: " + timeMedium);
    if (timeMedium === 0) {
      setScreen("endResult"); 
      setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
      setText("endAnswerOutput", "The correct answers in order were: " + correctList + "\n");
    }
  });
 });
 
function checkCorrectMultiplicationMedium(userInput,correctAnswer){
if(userInput === correctAnswer){
  score = score + 1;
}
questionNumber++;
}
onEvent("multiplicationMediumSubmitButton", "click", function( ) {
checkCorrectMultiplicationMedium(getNumber("multiplicationMediumText"), correct);
console.log(getNumber("multiplicationMediumText"));
nextQuestionMultiplicationMedium();
setProperty("multiplicationMediumText", "text", blank); //clears out text box
});

//the function for next question
function nextQuestionMultiplicationMedium(){
if (questionNumber < 7){

 var index1 = randomNumber(randomNumber(3,5), 11); //randomizes index 1
 var index2 = randomNumber(randomNumber(3,5), 11); //randomizes index 2
 storedValue1 = (firstNumber[index1]);
 if (storedValue1 == 0){
   storedValue1 = storedValue1 + randomNumber(3,12);
 }
 storedValue2 = (secondNumber[index2]);
 if (storedValue2 == 0){
   storedValue2 = storedValue2 + randomNumber(3,12);
 }
 console.log(storedValue1);
console.log(storedValue2);
 setText("multiplicationMediumLabel", storedValue1 + "x" +  storedValue2);
 correct = storedValue1 * storedValue2;
 console.log(correct);
 correctList.push(correct);
 console.log(correctList);
 
 } else if ((questionNumber == 7)) {
   //If the user has answered more than 7 questions, change the screen and display how many questions are correct
   setScreen("endResult");
   setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
   setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );  
 }
} 

 //multiplicationHard
 onEvent("multiplicationHardButton", "click", function(){
  nextQuestionMultiplicationHard(); //calls the first question
  //timer function for the program 
  timedLoop(1000, function() {
    timeHard = timeHard - 1;
    setText ("timerLabelMultiplicationHard", "Time Left: " + timeHard);
    if (timeHard === 0) {
      setScreen("endResult"); 
      setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
      setText("endAnswerOutput", "The correct answers in order were: " + correctList + "\n");
    }
  });
 
 });
 
function checkCorrectMultiplicationHard(userInput,correctAnswer){
if(userInput === correctAnswer){
  score = score + 1;
}
questionNumber++;
}
onEvent("multiplicationHardSubmitButton", "click", function( ) {
checkCorrectMultiplicationHard(getNumber("multiplicationHardText"), correct);
console.log(getNumber("multiplicationHardText"));
nextQuestionMultiplicationHard();
setProperty("multiplicationHardText", "text", blank); //clears out text box
});

//the function for next question
function nextQuestionMultiplicationHard(){
if (questionNumber < 7){

 var index1 = randomNumber(randomNumber(3,5), 11);
 var index2 = randomNumber(randomNumber(1,4), 11);
 var index3 = randomNumber(randomNumber(1,5), 11);
 storedValue1 = (firstNumber[index1]);
 storedValue2 = (secondNumber[index2]);
 storedValue3 = (thirdNumber[index3]);
 console.log(storedValue1);
console.log(storedValue2);
 setText("multiplicationHardLabel", storedValue1 + "x" +  storedValue2 + "x" + storedValue3);
 correct = storedValue1 * storedValue2 * storedValue3;
 console.log(correct);
 correctList.push(correct);
 console.log(correctList);

 } else if ((questionNumber == 7)) {
   //If the user has answered more than 7 questions, change the screen and display how many questions are correct
   setScreen("endResult");
   setText("endResultLabel", ("You answered " + score) + " questions out of 7 correctly.");
   setText("endAnswerOutput", "The correct answers in order were: " + "\n" + correctList );
 }
} 
 
