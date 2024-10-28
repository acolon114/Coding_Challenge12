//Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById("mainCanvas");
const context = canvas.getContext("2d");
let isDrawing = false;
let selectedTool = "Line"; // Default tool
let startX = 0;
let startY = 0;

//Task 3: Implement Shape Drawing Logic

// Update tool based on selection
function chooseTool() {
    const selectLine = document.getElementById("toolSelectLine");
    const selectRectangle = document.getElementById("toolSelectRectangle");
    const selectCircle = document.getElementById("toolSelectCircle");

    if (selectLine.checked) {
        selectedTool = "Line";
    } else if (selectRectangle.checked) {
        selectedTool = "Rectangle";
    } else if (selectCircle.checked) {
        selectedTool = "Circle";
    }
}

// Start drawing based on tool
canvas.addEventListener('mousedown', function(event) {
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;

} )

canvas.addEventListener('mousemove', function(event) {
    if (!isDrawing) return;

    clearCanvas();  // Clear the canvas for redrawing

    if (selectedTool === "Line") {
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
    }  else if (selectedTool === "Rectangle") {
        const width = event.offsetX - startX;
        const height = event.offsetY - startY;
        context.strokeRect(startX, startY, width, height);
    } else if (selectedTool === "Circle") {
        const radius = Math.sqrt(
            Math.pow(event.offsetX - startX, 2) + Math.pow(event.offsetY - startY, 2)
        );
        drawCircle(startX, startY, radius);
    }
      

});

canvas.addEventListener('mouseup', function(event) {
    if (!isDrawing) return;
    isDrawing = false;

    if (selectedTool === "Rectangle") {
        const width = event.offsetX - startX;
        const height = event.offsetY - startY;
        context.rect(x, y, width, height);
    } else if (selectedTool === "Circle") {
        const radius = Math.sqrt(
            Math.pow(event.offsetX - startX, 2) + Math.pow(event.offsetY - startY, 2)
        );
        drawCircle(startX, startY, radius);
    }

    context.closePath();
});

// Draw circle function
function drawCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.stroke();
}

//Task 4: Add Color Selection and Canvas Clearing

// Choose color
function chooseColor() {
    let color = document.getElementById("colorPicker").value;
    context.strokeStyle = color;
}

// Clear canvas
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
