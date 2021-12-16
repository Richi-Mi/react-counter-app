// rafcp
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    let [ counter, setCounter ] = useState( value ) // Retorna un arreglo con 2 valores
    
    // addNumber
    const handleAdd = () => {
        setCounter( counter + 1 )
        // setCounter( variable => variable + 1 )
    }
    const handleSubstract = () => {
        setCounter( counter - 1 )
    }
    const handleReset = () => {
        setCounter( counter = value )
    }

    return (
        < >
            <h1> CounterApp </h1>
            <h2> Number:  { counter } </h2>

            <button onClick={ handleAdd }> Add Number </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleSubstract }> Substract Number </button>
        </ >
    );
}
// Poner las funciones bien, sin los parentesis
CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp