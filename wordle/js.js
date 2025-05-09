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

for (let i = 0; i < cols; i++) {
	let color = "gray"; 
	if (word.includes(guess[i])) color = "yellow";
	if (word(i) === (guess(i) color = "green";

	let x = i * (squareSize + padding) + padding;
	let y = attempts * (squareSize + padding) + padding;
	
	ctx.fillStyle = color;
	ctx.fillRect(x, y, squareSize, squareSize);

	ctx.fillStyle = "black";
	ctx.font = "20px Arial";
	ctx.fillText(guess[i], x + squareSize / 3, y + squareSize / 1.5);

//I need to make a eventlistner next time i work on this
//i think that the changin colors will work and i looked up how to make the letters go in the box and that has worked pretty well 
//need to make it draw on the canvas aadn also need to make the attempts go up so a game over message is put in

