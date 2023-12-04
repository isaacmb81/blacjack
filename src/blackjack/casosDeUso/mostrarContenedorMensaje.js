export function mostrarContenedorMensaje(){
    const botonPedirCarta=document.getElementById("pedirCarta");
    const botonPlantarse=document.getElementById("detener");
    const contenedorInfo=document.getElementById("informacion")
    botonPedirCarta.disabled=true;
    botonPedirCarta.classList.add("botonDeshabilitado");
    botonPlantarse.disabled=true;
    botonPlantarse.classList.add("botonDeshabilitado");
    setTimeout(function(){contenedorInfo.style.display="flex"},1000);
}