/**
 * Recibe un numero comprendido entre 1 y 13, y devuelve el valor de esa carta. Esto sirve para el caso del AS y de las cartas JQK
 * @param {number} numero 
 * @returns number
 */
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