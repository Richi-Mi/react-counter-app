import { getUser, getUsuarioActivo } from "../../bases/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser() .- Debe de retornar un objeto', () => {
        const userTest = {
            uuid: 'ABC12334',
            username: 'Richi_Mi'
        }
        const user = getUser()

        // expect( object1 ).toEqual( object2 ) .- Evalua si 2 objetos son iguales 
        expect( user ).toEqual( userTest )
    })

    // getUsuarioActivo( nombre ) .- Debe de retornar un objeto con el mismo nombre 
    test('getUsuarioActivo( nombre ) .- Debe de retornar un objeto con el nombre', () => {
        const nombre = "Richi_MC";
        const userTest = {
            uuid: 'ABCD123456789',
            username: nombre 
        }

        const user = getUsuarioActivo( nombre )

        expect( user ).toEqual( userTest )
    })
})