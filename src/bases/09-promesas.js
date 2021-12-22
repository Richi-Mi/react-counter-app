import { getHeroeById, getHeroesByOwner } from './08-imp-exp'

export const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe === undefined ? reject('El heroe no fue encontrado') : resolve(heroe)
    
        }, 1500);
    });
}