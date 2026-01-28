// Image dimensions
const imageWidth = 20;
const imageHeight = 8;

// Boolean array storing pixel on/off state
const imageData = createImageData(imageWidth, imageHeight);

// Draw the face outline
drawRectangle(0, 0, 20, 8);

// Draw eyes
drawDot(7, 2);
drawDot(12, 2);

// Draw smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);

// Output the image to the console
outputImage();

// Converts (x, y) coordinates into a 1D array index
function getIndex(x: number, y: number) {
  return y * imageWidth + x;
}

// Draws a rectangle outline starting at (x, y)
function drawRectangle(x: number, y: number, width: number, height: number) {
  // Ignore invalid rectangle sizes
  if (width <= 0 || height <= 0) return;

  // Top and bottom edges
  drawHorizontalLine(x, y, width);
  drawHorizontalLine(x, y + height - 1, width);

  // Left and right edges
  drawVerticalLine(x, y, height);
  drawVerticalLine(x + width - 1, y, height);
}

// Turns on a single pixel if it is inside the image bounds
function drawDot(x: number, y: number) {
  if (!isPointInImage(x, y)) return;
  imageData[getIndex(x, y)] = true;
}

// Draws a horizontal line to the right
function drawHorizontalLine(x: number, y: number, length: number) {
  for (let i = 0; i < length; i++) {
    drawDot(x + i, y);
  }
}

// Draws a vertical line downward
function drawVerticalLine(x: number, y: number, length: number) {
  for (let i = 0; i < length; i++) {
    drawDot(x, y + i);
  }
}

// Checks whether a point is inside the image area
function isPointInImage(x: number, y: number) {
  return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

// Prints the image to the console using characters
function outputImage(onChar = "X", offChar = " ") {
  let text = "";

  for (let i = 0; i < imageData.length; i++) {
    // Start a new row
    if (i > 0 && i % imageWidth === 0) {
      text += "\n";
    }

    text += imageData[i] ? onChar : offChar;
  }

  console.log(text);
}

// Creates a boolean array representing the image pixels
function createImageData(width: number, height: number): boolean[] {
  return new Array(width * height).fill(false);
}