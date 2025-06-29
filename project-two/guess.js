let randomNumgenerator = Math.floor(Math.random() * 100 + 1);
const guessInput = document.getElementById("guess");
const randomNumDisplay = document.getElementById("randomNum");
let message = document.getElementById("message");
const submitGuess = document.getElementById("submit");
let gameOver = false;
let attempts = 0;
const maxAttempts = 6;

guessInput.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        submitGuess.click();
    }
});

submitGuess.onclick = function (){
    if(gameOver) return;

    let guess = Number(guessInput.value);
    attempts++;
    let attemptsLeft = maxAttempts - attempts;
    if(isNaN(guess) || guess > 100){
        message.textContent = "Invalid input, make sure to input a number and make it's below 100";
    }
    if(guess === randomNumgenerator){
        message.textContent = `congrats! you have guessed the correct number in just ${attempts} attempts`;
        randomNumDisplay.textContent = randomNumgenerator;
        endGame();
    }
    else if(guess < randomNumgenerator){
        message.textContent = `${guess} is Too Low!: ${attemptsLeft} attempts left`;
    }
    else if(guess > randomNumgenerator){
        message.textContent = `${guess} is Too High!: ${attemptsLeft} attempts left`;
    }
    if(attempts === maxAttempts && !gameOver ){
        message.textContent = `Opps,Game Over!!!, the correct number is ${randomNumgenerator}`;
        randomNumDisplay.textContent = randomNumgenerator;
        endGame();
    }
    guessInput.value = " ";
}

const restartBtn = document.getElementById("restart");

function endGame() {
    gameOver = true;
    guessInput.disabled = true;
    submitGuess.disabled = true;
    restartBtn.style.display = "inline-block";
}

restartBtn.onclick = function () {
    randomNumgenerator = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    guessInput.disabled = false;
    submitGuess.disabled = false;
    guessInput.value = "";
    message.textContent = "guess again, from 1 to 100";
    randomNumDisplay.textContent = "?";
    restartBtn.style.display = "none";
};