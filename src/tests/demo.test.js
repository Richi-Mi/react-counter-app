// test('Descripcion de la prueba', funciónParaProbarla()): Esta función ya viene incluida en Jest
//// Tambien se puede lanzar errores asi.

// const isActive = false;
// if( !isActive ) {
//     throw new Error('Debe ser true')
// }
//// describe() .- Agrupa varias pruebas para una mayor organización.
describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben ser iguales los String', () => {
        // 1. - Inicialización 
        const mensaje = 'Pana Eduardo'
        // 2. - Estimulo
        const mensaje2 = `Pana Eduardo`
        // Observar el Comportamiento
        // expect( elemento2 ).toBe( elemento1 ) .- === Es lo mismo que hacer elemento2 === elemento1 
        expect( mensaje ).toBe( mensaje2 )
    })

})
