export function devuelveValorCarta(numero){
    switch(numero){
        case 1:
            numero=1
            break;
        case 11:
            numero=10
            break;
        case 12:
            numero=10
            break;
        case 13:
            numero=10
            break;
        default:
            numero=numero;
            break;
    }
    return numero;
}