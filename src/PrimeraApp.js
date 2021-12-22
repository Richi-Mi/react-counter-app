// import React, { Fragment } from 'react';
// return (
//     <Fragment>
//         <h1 className='title'> saludo </h1>
//         <p> Mi primera Apilcación </p>    
//     </Fragment>
// );
import React from 'react';
import PropTypes from 'prop-types';

// FC

const PrimeraApp = ({ saludo, edad, subtitulo = '' }) => {
    // if( !saludo ) {
    //     throw new Error('El saludo es Necesario')
    // }

    return ( 
        < >
            <h1> { saludo } </h1>
            {/* <pre > { JSON.stringify(saludo, null, 3)} </pre> */}
            <h2>{ subtitulo }</h2>
            <p> Mi primera Apilcación, edad: { edad } </p>    
        </ >
    )
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    edad: PropTypes.number
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;