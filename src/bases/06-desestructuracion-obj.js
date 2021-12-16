// Desestructuracion
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man',
    rango: 'Soldado'
}

// const { nombre: namePerson, edad, clave } = persona
// console.log( namePerson )
// console.log( edad )
// console.log( clave )

const createAvenger = ({ nombre: namePerson, edad, clave, rango = 'Capitan' }) => {
    // console.log( namePerson, edad, clave, rango )
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3223
        }
    }
}
const { nombreClave, anios, latlng: { lat, lng } } = createAvenger( persona )
console.log( nombreClave )
console.log( anios )
console.log( lat, lng )