// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp
var eventoMouse = "empty";
var mouseX, mouseY;
var ultimaPosicaoX, ultimaPosicaoY;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var cor = "red";
var largTraco = 2;

canvas.addEventListener("mousedown", down);

function down (e) {
    var novaCor = document.getElementById("cor").value;
    if (novaCor){
        cor = novaCor;
    }
    var novoTraco = document.getElementById("traco").value;
    if (novoTraco) {
        largTraco = novoTraco;
    }
    
    eventoMouse = "mousedown";
}

canvas.addEventListener("mousemove", move);

function move (e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;

    if (eventoMouse == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largTraco;

        ctx.moveTo(ultimaPosicaoX,ultimaPosicaoY);

        ctx.lineTo(mouseX, mouseY);

        ctx.stroke();
    }

    ultimaPosicaoX = mouseX;
    ultimaPosicaoY = mouseY;
}

canvas.addEventListener("mouseup", up);

function up (e) {
    eventoMouse = "mouseup";
}

canvas.addEventListener("mouseleave", leave);

function leave (e) {
    eventoMouse = "mouseleave";
}

function limpar () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("cor").value = "";
    document.getElementById("traco").value = "";

}