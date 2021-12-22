import { getImagenPromise } from "../../bases/11-async-await"

describe('Pruebas con async-await y fetch', () => {
    test('Debe retornar el URL de la imagen', async () => {
        const url = await getImagenPromise()
        
        expect( url.includes('http://') ).toBe( true )
    })
})
