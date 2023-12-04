export function cartaSeleccionada(numero,palo){
    switch(numero){
        case 1:
            numero="A"
            break;
        case 2:
            numero=2
            break;
        case 3:
            numero=3
            break;
        case 4:
            numero=4
            break;
        case 5:
            numero=5
            break;
        case 6:
            numero=6
            break;
        case 7:
            numero=7
            break;
        case 8:
            numero=8
            break;
        case 9:
            numero=9
            break;
        case 10:
            numero=10
            break;
        case 11:
            numero="J"
            break;
        case 12:
            numero="Q"
            break;
        case 13:
            numero="K"
            break;
    }
    switch(palo){
        case 1:
            palo="C"
            break;
        case 2:
            palo="D"
            break;
        case 3:
            palo="H"
            break;
        case 4:
            palo="S"
            break;
    }
    return numero+palo;
}