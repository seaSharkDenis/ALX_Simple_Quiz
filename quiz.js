// Function checks is the user's selected answer is correct
// and displays appropriate feedback.

function checkAnswer(){
    let feedback = document.getElementById("feedback");
    let correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else{
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the submit buton
let submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);