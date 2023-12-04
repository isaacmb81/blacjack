/**
 * Inicia una nueva partida, poniendo los valores a 0, como por ejemplo vacia el array de cartasRepetidas o las puntuaciones de los jugadores
 * @param {string[]} arrayCartasRepetidas 
 * @param {number} valoresCartasJugador 
 * @param {number} valoresCartasCrupier 
 * @param {number} tengoAS 
 */
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