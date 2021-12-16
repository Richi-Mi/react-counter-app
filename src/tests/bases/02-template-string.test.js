// Importamos la libreria de Jests
import '@testing-library/jest-dom';
import { getSaludo } from "../../bases/02-template-string";

describe('Pruebas en 02-template.string.js', () => {
    test('getSaludo() debe retornar un "Hola " + nombre ', () => {
        const nombre = 'Richi';
        const saludo = getSaludo( nombre )

        expect( saludo ).toBe( 'Hola ' + nombre )
    })
    test('getSaludo() debe retornar Hola Carlos si no se le manda argumento', () => {
        const saludo = getSaludo()
        expect( saludo ).toBe("Hola Carlos")
    })
})