// Crear un arreglo con 10 posiciones, per, se le
// pueden añadir mas 
// const arreglo = new Array( 10 );

const arreglo = [1, 2, 3, 4 ]
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// arreglo.push(5)
// arreglo.push(6)

// ...objeto - Extrae sus valores del objeto
let arreglo2 = [ ...arreglo, 5 ]
// .map( valor ) Crea un nuevo arreglo recorriendo este
const arreglo3 = arreglo2.map( function( numero ) {
    return numero * 2 
})

console.log(arreglo)
console.log(arreglo2)