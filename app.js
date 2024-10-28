//Task 2: Configure the JavaScript for Drawing Context

const canvas = document.getElementById("mainCanvas");
const context = canvas.getContext("2d");
let isDrawing = false;
let selectedTool = "Line"; // Default tool
let startX = 0;
let startY = 0;
