const personajes = ['Goku','Vegeta','Trunks']

// console.log( personajes[0] )
// console.log( personajes[1] )
// console.log( personajes[2] )

const [ , , p1 ] = personajes

export const retornarArreglo = () => {
    return [ "ABC", 123 ]
}
// const [ letras, numeros ] = retornarArreglo()

// Tarea
// El primer valor del arreglo se llamara nombre
// El segundo se llamara setNombre
const getArreglo = ( valor ) => {
    return [ valor, () => { console.log('Hola Papu') }]
}