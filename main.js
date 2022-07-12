// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp
var eventoMouse = "";
var mouseX, mouseY;
var ultimaPosicaoX, ultimaPosicaoY;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var cor = "red";
var largTraco = 2;

canvas.addEventListener("mousedown", mousedown);

function mousedown (e) {
    var novaCor = document.getElementById("cor").value;
    if (novaCor){
        cor = novaCor;
    }
    var novoTraco = document.getElementById("traco").value;
    if (novoTraco) {
        largTraco = novoTraco;
    }
    
    // eventoMouse = "mousedown";
    getEvento(e);
}

canvas.addEventListener("mousemove", mousemove);

function mousemove (e) {
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

canvas.addEventListener("mouseup", mouseup);

function mouseup (e) {
    // eventoMouse = "mouseup";
    getEvento(e);
}

canvas.addEventListener("mouseleave", mouseleave);

function mouseleave (e) {
    // eventoMouse = "mouseleave";
    getEvento(e);

}

function getEvento (e) {
    eventoMouse = e.type;
    console.log(eventoMouse);
}

function limpar () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("cor").value = "";
    document.getElementById("traco").value = "";
}