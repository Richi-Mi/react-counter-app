import { retornarArreglo } from "../../bases/07-deses-arr"

describe('Pruebas en Desestructuración', () => {
    test('Debe de retornar un String y un numero', () => {
        /// 1er Forma.
        // const arr = retornarArreglo()
        // expect( arr ).toEqual( [ "ABC", 123 ] )

        const [ letras, numeros ] = retornarArreglo()
        // console.log( typeof numeros )
        expect( letras ).toBe( "ABC" )
        expect( typeof letras ).toBe( "string" )
        
        expect( numeros ).toBe( 123 )
        expect( typeof numeros ).toBe( "number" )
    })
})