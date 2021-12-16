import { getHeroeById, getHeroesByOwner } from './bases/08-imp-exp'

// const promesa = new Promise( ( resolve, reject ) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve( heroe )

//     }, 2000);
// });

// promesa.then( data => {
//     console.log( data )
// })
// .catch( err => console.warn( err))

const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe === undefined ? reject('El heroe no fue encontrado') : resolve(heroe)
    
        }, 2000);
    });
}
getHeroeByIdAsync(9)
    .then( heroe => {
        console.log('Heroe: ', heroe )
    })
    .catch( err => console.warn( err ))