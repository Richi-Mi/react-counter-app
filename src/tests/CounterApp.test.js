import { shallow } from "enzyme"
import CounterApp from "../CounterApp"

describe(' - Pruebas sobre el componente CounterApp', () => {
    // let wrapper;
    let wrapper = shallow( <CounterApp /> );
    beforeEach( () => {
        // Esta función va a ejecutar lo que se recibe en el callback, cada que haga una Prueba. en el test()
        wrapper = shallow( <CounterApp /> );
    })
    test('Debe Mostrar el componente Correctamente, con sus valores por defecto', () => {
        // const valueDef = 10;
        // const [ txt, counter ] = wrapper.find('h2').text().split(':')
        
        expect( wrapper ).toMatchSnapshot();
        // expect( parseInt(counter) ).toBe( valueDef )
    })
    test('Debe Mostrar el valor enviado de 100', () => {
        const value = 100;
        const wrapper = shallow( <CounterApp value={ value }/> );
        const [ txt, counter ] = wrapper.find('h2').text().split(':')

        expect( parseInt(counter) ).toBe( value )
    })
    
    test('Debe incrementar con el boton de +1', () => {
        const btn_add = wrapper.find('button').at(0) // at(0) .- Nos sirve para hacer referencia al boton por su posición en el componente
        // console.log( btn_add.html() ) .- Imprime el wrapper en su version de html y devuelve el codigo html
        btn_add.simulate('click')
        const counterText = wrapper.find('h2').text().trim()

        expect( counterText ).toBe("Number: 11")
    })
    test('Debe incrementar con el boton de -1', () => {
        // Para hacer esta prueba requerimos reiniciar el componente de Pruebas wrapper
        const btn_substract = wrapper.find('button').at(2)  
        btn_substract.simulate('click')
        const counterText = wrapper.find('h2').text().trim()

        expect( counterText ).toBe("Number: 9")
    })
    test('Debe colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow( <CounterApp value={ 105 }/> );

        const btn_add = wrapper.find('button').at(0); 
        btn_add.simulate('click');
        btn_add.simulate('click');

        const btn_reset = wrapper.find('button').at(1);
        btn_reset.simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('Number: 105')
    })
})
