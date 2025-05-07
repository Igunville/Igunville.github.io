// Get the existing canvas from the document
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Define grid dimensions
const rows = 6;
const cols = 5;
const padding = 5;
const squareSize = (canvas.width - padding * (cols + 1)) / cols;

// Draw the grid with padding
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let x = col * (squareSize + padding) + padding;
        let y = row * (squareSize + padding) + padding;
        ctx.strokeRect(x, y, squareSize, squareSize);
    }
}

