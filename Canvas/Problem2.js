var canvasField = document.getElementById("canvas-prob2");
var context = canvasField.getContext("2d");

var xCoord = 10,
    yCoord = 10,
    xDir = 1,
    yDir = 1,
    radius = 8;

setInterval(move, 10);

function move() {

    context.beginPath();
    context.arc(xCoord, yCoord, radius * 2, 0, 2 * Math.PI);
    context.fillStyle = "#79f7e4";
    context.fill();

    xCoord += xDir;
    yCoord += yDir;

    if (xCoord === radius || xCoord === canvasField.width - radius) {
        xDir *= -1;
    }

    if (yCoord === radius || yCoord === canvasField.height - radius) {
        yDir *= -1;
    }

    context.beginPath();
    context.arc(xCoord, yCoord, radius, 0, 2 * Math.PI);
    context.fillStyle = "#064cbb";
    context.fill();
    context.stroke();
}