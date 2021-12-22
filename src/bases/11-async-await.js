
export const getImagenPromise = async () => {
    try {
        const apiKey = '2qbkneR3g0Wx7Sj44n2DC54uZOg6Ox5j';
        // const apiKey = '2qbkneR3g0Wx7Sj44n2DC54uZOg6Ox5jdasdadasd';
        const httpCall = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` );

        const { data } = await httpCall.json();    

        const { url } = data.images.original;
        
        return url
    } catch (err) {
        return 'No existe'
    }
}
getImagenPromise()