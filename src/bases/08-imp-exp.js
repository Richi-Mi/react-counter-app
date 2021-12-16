// import { heroes } from './data/heroes'
// import heroes, {owners} from "./../data/heroes";
import heroes from "./../data/heroes";

// console.log( owners )

// find() - devuelve el primer valor que cumpla la condición
const getHeroeById = ( uid ) => {
    return heroes.find( (heroe) => heroe.id === uid )
}
// console.log( getHeroeById(3) )

// Filter() - devuelve un array nuevo con los elementos que cumplan la condición.
const getHeroesByOwner = ( owner ) => {
    return heroes.filter( element => element.owner === owner )
} 
// console.log(getHeroesByOwner("Marvel"))
export {
    getHeroeById,
    getHeroesByOwner
}
