const imagenes = ["./imgs/css3.jpg", "./imgs/github.png", "./imgs/html.png", "./imgs/javascript.png", "./imgs/node.jpg", "./imgs/react.png" ]
var cartas = imagenes.concat(imagenes);

var cartaDadaVuelta = "ninguna"
const contraCara = "./imgs/ada.png" 
var procesando= false

var aciertos= 0

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

cartas= shuffle(cartas);

$(".card").click(darVueltaCarta);

function darVueltaCarta(){
    var cardId = $(this).attr("id")
    if(cartaDadaVuelta===cardId || procesando){
        return
    }
    $(this).find("img").attr("src", cartas[cardId])

    if(cartaDadaVuelta==="ninguna"){
        cartaDadaVuelta= cardId

    }else if (cartas[cartaDadaVuelta]===cartas[cardId]){
        $("#" + cardId).fadeTo("fast", 0.5).off("click");
        $("#" + cartaDadaVuelta).fadeTo("fast", 0.5).off("click");

        cartaDadaVuelta="ninguna"
        console.log("you choose wisley")
        aciertos= aciertos+1
        if(cartas.length/2===aciertos){
            setTimeout(function(){
            alert("WE ARE THE CHAMPIONS, MY FRIEND")
        },500)
        }else{
            verificarTurno();
        }


    }else{ 
        procesando=true;
        setTimeout(function(){
            console.log("you choose poorly")
            $("#" + cardId).find("img").attr("src",contraCara)
            $("#" + cartaDadaVuelta).find("img").attr("src",contraCara)
            cartaDadaVuelta="ninguna"
            verificarTurno();
            procesando= false
        },500)
     
    }  

};

var turnosResantes = 16;

function verificarTurno(){
        turnosResantes = turnosResantes - 1;
        if(turnosResantes<=0){
            $('#turnos').text("No te quedan intentos.");
            alert("Perdiste!");
            return;
        }
        $('#turnos').text("Quedan "+turnosResantes+" intentos.")
}
verificarTurno();









