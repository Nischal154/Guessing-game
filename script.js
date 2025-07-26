let randomNumber;

const maxNumInput = document.getElementById("maxNum");
const startBtn = document.getElementById("startBtn");
const guessArea = document.querySelector(".guess-area");
const promptText = document.getElementById("prompt");
const guessInput = document.getElementById("userGuess");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
    const max = parseInt(maxNumInput.value);

    if (!isNaN(max) && max > 0) {
        randomNumber = Math.floor(Math.random() * max) + 1;
        promptText.textContent = `Guess a number between 1 and ${max}`;
        guessArea.classList.remove("hidden");
        message.textContent = "";
    } else {
        alert("Please enter a valid max number greater than 0.");
    }
});

guessBtn.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);

    if (guess === randomNumber) {
        message.textContent = "🎉 You are right! Congratulations!";
        guessBtn.disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = "📉 Too low! Try again.";
    } else if (guess > randomNumber) {
        message.textContent = "📈 Too high! Try again.";
    } else {
        message.textContent = "❌ Invalid input.";
    }
});
