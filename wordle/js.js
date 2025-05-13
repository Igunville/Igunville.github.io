const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const word = "igloo";
const rows = 5;
const cols = 5;
const padding = 5;
let attempts = 0;
let currentGuess = "";
const squareSize = (canvas.width - padding * (cols + 1)) / cols;


for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let x = col * (squareSize + padding) + padding;
        let y = row * (squareSize + padding) + padding;
        ctx.strokeRect(x, y, squareSize, squareSize);
    }
}

function submitGuess() {
    if (attempts >= rows || currentGuess.length !== cols) return;

    for (let i = 0; i < cols; i++) {
        let color = "gray";
        if (word.includes(currentGuess[i])) color = "yellow";
        if (word[i] === currentGuess[i]) color = "green";

        let x = i * (squareSize + padding) + padding;
        let y = attempts * (squareSize + padding) + padding;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, squareSize, squareSize);

        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText(currentGuess[i], x + squareSize / 3, y + squareSize / 1.5);
    }

    attempts++;
    currentGuess = "";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitGuess();
    } else if (event.key.length === 1 && currentGuess.length < cols) {
        currentGuess += event.key;
    }
});

