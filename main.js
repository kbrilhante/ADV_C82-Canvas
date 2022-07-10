// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var cor = "red";

// circulo(200, 200);

canvas.addEventListener("mousedown",clique);

function clique (e) {
    var novaCor = document.getElementById("cor").value;
    // console.log(novaCor);
    if (novaCor){
        cor = novaCor;
        // console.log(cor);
    }
    // console.log(e);
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    console.log("X = " + mouseX + " | Y = " + mouseY);
    circulo (mouseX, mouseY);
}

function circulo (x, y) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = 2;
    // arc(x,y,r,startangle,endangle) - angulos em radianos - 360° = 2PI
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function limpar () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}