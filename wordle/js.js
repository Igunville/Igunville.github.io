const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const word = "igloo";
const rows = 5;
const cols = 5;
const padding = 5;
let attempts = 0;
let currentGuess = "";
const squareSize = (canvas.width - padding * (cols + 1)) / cols;
let pastGuesses = []; 

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let x = col * (squareSize + padding) + padding;
            let y = row * (squareSize + padding) + padding;
            ctx.strokeRect(x, y, squareSize, squareSize);
        }
    }

    for (let row = 0; row < pastGuesses.length; row++) {
        for (let col = 0; col < cols; col++) {
            let x = col * (squareSize + padding) + padding;
            let y = row * (squareSize + padding) + padding;

            ctx.fillStyle = pastGuesses[row][col].color;
            ctx.fillRect(x, y, squareSize, squareSize);

            ctx.fillStyle = "black";
            ctx.font = "20px Arial";
            ctx.fillText(pastGuesses[row][col].letter, x + squareSize / 3, y + squareSize / 1.5);
        }
    }

    drawCurrentGuess();
}

function drawCurrentGuess() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    for (let i = 0; i < currentGuess.length; i++) {
        let x = i * (squareSize + padding) + padding;
        let y = attempts * (squareSize + padding) + padding;
        ctx.fillText(currentGuess[i], x + squareSize / 3, y + squareSize / 1.5);
    }
}

function submitGuess() {
    if (attempts >= rows || currentGuess.length !== cols) return;

    let guessData = [];
    for (let i = 0; i < cols; i++) {
        let color = "gray";
        if (word.includes(currentGuess[i])) color = "yellow";
        if (word[i] === currentGuess[i]) color = "green";

        guessData.push({ letter: currentGuess[i], color });
    }

    pastGuesses.push(guessData);
    attempts++;
    currentGuess = "";

    drawGrid();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitGuess();
    } else if (event.key.length === 1 && currentGuess.length < cols) {
        currentGuess += event.key;
    } else if (event.key === "Backspace") {
        currentGuess = currentGuess.slice(0, -1);
    }
    drawGrid();
});

drawGrid();

