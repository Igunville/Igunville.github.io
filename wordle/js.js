const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const word = "Pears";
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

function submitGuess() [
	if (attempts >=rows || currentGuess.length !== cols)

	let guess = currentGuess.toUpperCase();
	currentGuess = "";

//I need to make a keylistner next time i work on this
//i need to make it so it can change colors when you enter it
// make the attmetpts go up if wrong
// make it so when you press keys it enters

