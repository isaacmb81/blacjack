export function valoresPorDefecto(arrayCartasRepetidas,valoresCartasJugador,valoresCartasCrupier,tengoAS){
    const contenedorCartasJugador=document.getElementById("contenedorCartasJugador");
    const contenedorPuntuacionJugador=document.getElementById("puntuacionJugador");
    const contenedorPuntuacionCrupier=document.getElementById("puntuacionCrupier");
    const contenedorCartasCrupier=document.getElementById("contenedorCartasCrupier");
    const botonPedirCarta=document.getElementById("pedirCarta");
    const botonPlantarse=document.getElementById("detener");
    const contenedorInfo=document.getElementById("informacion")
    arrayCartasRepetidas=[];
    valoresCartasJugador=0;
    valoresCartasCrupier=0;
    tengoAS=0;

    contenedorCartasJugador.innerHTML="";
    contenedorCartasCrupier.innerHTML="";
    contenedorPuntuacionJugador.innerHTML="Jugador 1: "
    contenedorPuntuacionCrupier.innerHTML="Crupier: ";
    botonPedirCarta.disabled=false;
    botonPedirCarta.classList.remove("botonDeshabilitado");
    botonPlantarse.disabled=false;
    botonPlantarse.classList.remove("botonDeshabilitado");
    contenedorInfo.style.display="none";
}