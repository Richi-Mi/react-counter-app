import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en Funciones de Heroes', () => {
    test('Debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById( id )

        const heroeData = heroes.find( hero => hero.id == id )

        expect( heroe ).toEqual( heroeData )
    })
    test('Debe retornar undefined si Héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById( id )

        expect( heroe ).toBe( undefined )
    })
    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = "DC";
        const arrDC = getHeroesByOwner("DC");

        const arrExpect = heroes.filter( hero => hero.owner === owner );

        expect( arrDC ).toEqual( arrExpect );
    })
    test('Debe retornar un arreglo de los heroes de Marvel', () => {
        const arrMarvel = getHeroesByOwner("Marvel");
        const long = 2;

        expect( arrMarvel.length ).toBe( long )
    })
})