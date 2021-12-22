import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    // Parametro done() .- Le indica a Jest, cuando debe acabara la prueba en caso de que sea
    // Asincrona
    test('getHeroeByIdAsync() - Debe de retornar un heroe async', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] )
                done()
            })
    });
    test('Debe obtener un error si el heroe no existe', ( done ) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( err => {
                expect( err ).toBe('El heroe no fue encontrado')
                done()
            })
    });
})
