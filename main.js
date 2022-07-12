// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp
var eventoMouse = "";
var posicaoX, posicaoY;
var ultimaPosicaoX, ultimaPosicaoY;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var txtCor = document.getElementById("cor");
var txtTraco = document.getElementById("traco");

var cor = "red";
var traco = 2;

canvas.addEventListener("mousedown", mousedown);

function mousedown (e) {
    getEvento(e);
}

canvas.addEventListener("mousemove", mousemove);

function mousemove (e) {
    posicaoX = e.offsetX;
    posicaoY = e.offsetY;

    if (eventoMouse == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = traco;

        ctx.moveTo(ultimaPosicaoX,ultimaPosicaoY);

        ctx.lineTo(posicaoX, posicaoY);

        ctx.stroke();
    }

    ultimaPosicaoX = posicaoX;
    ultimaPosicaoY = posicaoY;
}

canvas.addEventListener("mouseup", mouseup);

function mouseup (e) {
    getEvento(e);
}

canvas.addEventListener("mouseleave", mouseleave);

function mouseleave (e) {
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

txtCor.addEventListener("input", function () {
    cor = txtCor.value;
});

txtTraco.addEventListener("input", function (){
    if (txtTraco.value > 0) {
        traco = txtTraco.value;
    }
});