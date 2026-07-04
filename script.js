// ===========================
// Puzzle Game - script.js
// ===========================

// Correct answers for each puzzle
const answers = {
    puzzle1: "32",
    puzzle2: "apple",
    puzzle3: "42",
    puzzle4: "keyboard"
};

// Function to check an answer
function checkAnswer(puzzle, nextPage) {

    let userAnswer = document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    let score = Number(localStorage.getItem("score")) || 0;

    if (userAnswer === answers[puzzle]) {
        score++;
        localStorage.setItem("score", score);
        alert("✅ Correct Answer!");
    } else {
        alert("❌ Wrong Answer!");
    }

    window.location.href = nextPage;
}

// Display final score
function showScore() {

    let score = Number(localStorage.getItem("score")) || 0;

    document.getElementById("finalScore").innerHTML =
        score + " / 4";

    let message = "";

    if (score === 4) {
        message = "🏆 Excellent! Perfect Score!";
    }
    else if (score === 3) {
        message = "🎉 Great Job!";
    }
    else if (score === 2) {
        message = "🙂 Good! Keep Practicing.";
    }
    else if (score === 1) {
        message = "😊 Nice Try!";
    }
    else {
        message = "😅 Better Luck Next Time!";
    }

    document.getElementById("resultMessage").innerHTML = message;
}

// Restart Game
function restartGame() {
    localStorage.setItem("score", 0);
    window.location.href = "index.html";
}
