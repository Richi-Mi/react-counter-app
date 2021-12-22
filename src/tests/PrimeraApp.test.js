import React from 'react';
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

/**
 * Renderizar. es un anglicismo para representación gráfica, usado en la jerga informática para referirse 
 * al proceso de generar imagen fotorrealista, o no, a partir de un modelo 2D o 3D.
 * 
 * Podemos hacer pruebas de componentes de React usando la extensión de Jest, o la libreria Enzyme, pero esta solo esta
 * disponible en la version 16 de React, por ahora
 * */ 

describe('Pruebas en <PrimeraApp />', () => {

    // Forma de hacerlo con Jest
    // test('Mostrar el mensaje Hola Papu', () => {
    //     const saludo = "Hola Papu";
    //     /// render( ReactComponent ) .- Renderiza un componente de React, y lo guarda en wrapper
    //     const wrapper = render( <PrimeraApp saludo={ saludo } /> )
    //     const isText = wrapper.getByText( saludo )

    //     // Para usar la función .toBeInTheDocument() es necesario crear el archivo setUpTests.js y 
    //     // ahi hacer la importación necesaria
    //     expect( isText ).toBeInTheDocument()
    // })

    // Forma de Hacerlo con Enzyme.
    test('Mostrar el mensaje, Hola Papu - Enzime', () => {
        const saludo = 'Hola Papu'
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/>)

        // .toMatchSnapshot() .- Validamos que la snapshot( codigo html ) de el componente sea el mismo que el wrapper( codigo html)
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola Papu'
        const subTitle = 'Hola Soy un subtitulo'
        const wrapper = shallow( <PrimeraApp saludo={ saludo } subtitulo={ subTitle } edad={15}/>)

        const textoParrafo = wrapper.find('h2').text() // Devuelve el texto del h2
    
        // const textoParrafo = wrapper.find('h1') .- Devuelve un elemento del componente por su nombre
        // const textoParrafo = wrapper.find('#txt_name') .- Devuelve un elemento del componente por su id
        // const textoParrafo = wrapper.find('.elements') .- Devuelve un elemento del componente por su clase

        expect( textoParrafo ).toBe( subTitle )
    })
    
})
