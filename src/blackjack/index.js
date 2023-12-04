import { devuelveValorCarta } from "./casosDeUso/devuelveValorCarta";
import { cartaSeleccionada } from "./casosDeUso/cartaSeleccionada";
import { valoresPorDefecto } from "./casosDeUso/valoresPorDefecto";
import { mostrarContenedorMensaje } from "./casosDeUso/mostrarContenedorMensaje";

const juego=(()=>{
//Jugador
const contenedorCartasJugador=document.getElementById("contenedorCartasJugador");
const contenedorPuntuacionJugador=document.getElementById("puntuacionJugador");
let valoresCartasJugador=0;
let tengoAS=0;
let plantarse=false;

//Crupier
const contenedorPuntuacionCrupier=document.getElementById("puntuacionCrupier");
const contenedorCartasCrupier=document.getElementById("contenedorCartasCrupier");
let valoresCartasCrupier=0;

//Botones
const botonNuevoJuego=document.getElementById("nuevoJuego");
const botonPedirCarta=document.getElementById("pedirCarta");
const botonPlantarse=document.getElementById("detener");
const contenedorInfo=document.getElementById("informacion")
contenedorInfo.style.display="none";

let arrayCartasRepetidas=[];

let jugadorAPerdido=false;


botonNuevoJuego.addEventListener("click",()=>{
    valoresPorDefecto(arrayCartasRepetidas,valoresCartasJugador,valoresCartasCrupier,tengoAS);
    sacarCartaJugador();
    sacarCartaJugador();
    if(valoresCartasJugador==21){
        contenedorInfo.innerHTML="Black Jack";
        mostrarContenedorMensaje()
    }
    contenedorCartasCrupier.innerHTML+=`<img src='./cartas/grey_back.png'>`;
    contenedorCartasCrupier.innerHTML+=`<img src='./cartas/grey_back.png'>`;



})

botonPedirCarta.addEventListener("click",()=>{
    let jugadorAPerdido=sacarCartaJugador();
    if(valoresCartasJugador==21){ //Jugador saca máximo valor
        contenedorCartasCrupier.innerHTML=``;
        do{
            sacarCartaCrupier();
        }while(valoresCartasCrupier<17&&valoresCartasCrupier!=0)
        if(valoresCartasCrupier==21){
            contenedorInfo.innerHTML="Empate";
            mostrarContenedorMensaje()
        }else{
            contenedorInfo.innerHTML="Has ganado";
            mostrarContenedorMensaje()
        }
    }

    if(jugadorAPerdido){ //Jugador se pasa
        contenedorCartasCrupier.innerHTML=``;
        sacarCartaCrupier()
        sacarCartaCrupier()
        contenedorInfo.innerHTML="Has Perdido";
        mostrarContenedorMensaje()
    }
})

botonPlantarse.addEventListener("click",()=>{
    contenedorCartasCrupier.innerHTML=``;
    do{
        sacarCartaCrupier();
    }while(17>valoresCartasCrupier)

    if(valoresCartasJugador>valoresCartasCrupier||valoresCartasCrupier>21){
        contenedorInfo.innerHTML="Has ganado";
    }else if(valoresCartasJugador==valoresCartasCrupier){
        contenedorInfo.innerHTML="Empate";
    }else{
        contenedorInfo.innerHTML="Has Perdido";
    }
    botonPedirCarta.disabled=true;
        mostrarContenedorMensaje()
        
})


function sacarCartaCrupier(){
    let carta;
    do{
        let numeroCarta=Math.floor(Math.random()*13)+1;
        let paloCarta=Math.floor(Math.random()*4)+1;
        carta=cartaSeleccionada(numeroCarta,paloCarta)
        let sumaDelAS=0;
        if(!arrayCartasRepetidas.includes(carta)){
            arrayCartasRepetidas.push(carta)


            if(devuelveValorCarta(numeroCarta)==1){
                sumaDelAS=10
                tengoAS++;
            }

            valoresCartasCrupier+=devuelveValorCarta(numeroCarta)+sumaDelAS;

    
            if(valoresCartasCrupier>21){
                if(tengoAS!=0){
                    valoresCartasCrupier+=-10
                    tengoAS--;
                    contenedorPuntuacionCrupier.innerHTML="Crupier: "+valoresCartasCrupier;
                    contenedorCartasCrupier.innerHTML+=`<img src='./cartas/${carta}.png'>`;
                    return false
                }
                contenedorPuntuacionCrupier.innerHTML="Crupier: "+valoresCartasCrupier;
                contenedorCartasCrupier.innerHTML+=`<img src='./cartas/${carta}.png'>`;
                return true
            }else{
                contenedorPuntuacionCrupier.innerHTML="Crupier: "+valoresCartasCrupier;
                contenedorCartasCrupier.innerHTML+=`<img src='./cartas/${carta}.png'>`;
                return false
            }
            
        }
    }while(!arrayCartasRepetidas.includes(carta))
}

function sacarCartaJugador(){
    do{
        let numeroCarta=Math.floor(Math.random()*13)+1;
        let paloCarta=Math.floor(Math.random()*4)+1;
        let carta=cartaSeleccionada(numeroCarta,paloCarta)
        let sumaDelAS=0;
        if(!arrayCartasRepetidas.includes(carta)){
            arrayCartasRepetidas.push(carta)


            if(devuelveValorCarta(numeroCarta)==1){
                sumaDelAS=10
                tengoAS++;
            }

            valoresCartasJugador+=devuelveValorCarta(numeroCarta)+sumaDelAS;

    
            if(valoresCartasJugador>21){
                if(tengoAS!=0){
                    valoresCartasJugador+=-10
                    tengoAS--;
                    contenedorPuntuacionJugador.innerHTML="Jugador 1: "+valoresCartasJugador;
                    contenedorCartasJugador.innerHTML+=`<img src='./cartas/${carta}.png'>`;
                    return false
                }
                contenedorPuntuacionJugador.innerHTML="Jugador 1: "+valoresCartasJugador;
                contenedorCartasJugador.innerHTML+=`<img src='./cartas/${carta}.png'>`;
                return true
            }else{
                contenedorPuntuacionJugador.innerHTML="Jugador 1: "+valoresCartasJugador;
                contenedorCartasJugador.innerHTML+=`<img src='./cartas/${carta}.png'>`;
                return false
            }
            
        }
    }while(!arrayCartasRepetidas.includes(carta))

}

return {nuevaPartida:valoresPorDefecto}
}) ()