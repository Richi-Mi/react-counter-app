// Funciones en JS
const saludar = function ( nombre ) {
    return `Hola ${nombre}`
}
const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`
}
const saludar3 = ( nombre ) => `Hola ${nombre}`

export const getUser = () => ({
        uuid: 'ABC12334',
        username: 'Richi_Mi'
    })

export const getUsuarioActivo = ( nombre ) => (
    {
        uuid: 'ABCD123456789',
        username: nombre
    }
)
const usuarioActivo = getUsuarioActivo('José Ricardo')
// console.log( usuarioActivo )