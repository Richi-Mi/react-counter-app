/**
 * Los objetos Literales tambien son llamados diccionarios
 * en otros lenguajes de programación. como Python.
 * Para crear un nuevo objeto en JavaScript: No usamos
 * const objeto2 = objeto1;
 * Usamos:
 * const persona2 = { ...persona }
 * Sintaxis: 
 * const <<nameVariable>> = {
 *    key: value,
 *    key: value
 * }  
 * console.log({ persona }) - Imprime el nombre de la variable y valor
 */
const persona = {
    nombre: 'José Ricardo',
    apellido: 'Mendoza Castañeda',
    edad: 45,
    direccion: {
        calle: 'Zumpango',
        lote: '65',
        manzana: '352'
    }
}
// const persona2 = persona
// persona2.nombre = 'Peter'

const persona2 = { ...persona }
console.log( { persona } )
console.table( persona )
console.log( persona.nombre )